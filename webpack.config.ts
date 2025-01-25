import wasmPackPlugin from "@wasm-tool/wasm-pack-plugin";
import compressionWebpackPlugin from "compression-webpack-plugin";
import copyWebpackPlugin from "copy-webpack-plugin";
import eslintPlugin from "eslint-webpack-plugin";
import fs from "fs";
import htmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import type webpack from "webpack";
import type { WebpackPluginInstance } from "webpack";
import type { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

const createSceneEntry = (path: string, sourceAbsolutePath: string, fileName: string, defaultSceneIndex?: number): WebpackPluginInstance => ({
    apply(compiler: any): void {
        compiler.hooks.compile.tap("Compile", (): void => {
            if (fs.existsSync(fileName)) {
                return;
            }
            let code = "import type { ISceneBuilder } from \"./baseRuntime\";\nimport { buildSceneEntry } from \"./buildSceneEntry\";\n\nconst scenes: [string, () => Promise<ISceneBuilder>][] = [\n";
            const files = fs.readdirSync(path);
            files.forEach((file): void => {
                if (file.endsWith(".ts")) {
                    const name = file.substring(0, file.length - 3);
                    const spaceName = name.replace(/[A-Z]/g, (s): string => ` ${s.toLowerCase()}`);
                    code += `    ["${spaceName}", async(): Promise<ISceneBuilder> => new (await import("${sourceAbsolutePath}/${name}")).SceneBuilder()],\n`;
                }
            });
            if (files.length > 0) {
                code = code.substring(0, code.length - 2);
            }
            if (defaultSceneIndex !== undefined) {
                code += `\n];\nbuildSceneEntry(scenes, ${defaultSceneIndex});\n`;
            } else {
                code += "\n];\nbuildSceneEntry(scenes);\n";
            }
            fs.writeFileSync(fileName, code);
        });
    }
});

export default (env: any): webpack.Configuration & { devServer?: WebpackDevServerConfiguration } => ({
    entry: "./src/Test/index.ts",
    output: {
        path: path.join(__dirname, "/test_dist"),
        filename: "[name].bundle.js",
        clean: true
    },
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                glslShaders: {
                    test: (module: { type: string; resource: string | undefined }): boolean => {
                        if (module.resource === undefined) {
                            return false;
                        }
                        const resource = module.resource.replace(/\\/g, "/");
                        if (resource.includes("Shaders/")) {
                            return true;
                        }
                        return false;
                    },
                    name: "glslShaders",
                    chunks: "async",
                    enforce: true
                },
                wgslShaders: {
                    test: (module: { type: string; resource: string | undefined }): boolean => {
                        if (module.resource === undefined) {
                            return false;
                        }
                        const resource = module.resource.replace(/\\/g, "/");
                        if (resource.includes("ShadersWGSL/")) {
                            return true;
                        }
                        return false;
                    },
                    name: "wgslShaders",
                    chunks: "async",
                    enforce: true
                }
            }
        }
    },
    cache: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.m?js$/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    resolve: {
        alias: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "@": path.resolve(__dirname, "src")
        },
        modules: ["src", "node_modules"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        fallback: {
            "fs": false,
            "path": false
        }
    },
    node: {
        global: false,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        __filename: false,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        __dirname: false
    },
    plugins: ([
        createSceneEntry("./src/Test/Scene", "@/Test/Scene", "./src/Test/index.ts"),
        new htmlWebpackPlugin({
            template: "./src/Test/index.html"
        }),
        new eslintPlugin({
            extensions: ["ts", "tsx"],
            fix: true,
            cache: true,
            configType: "flat"
        }),
        new copyWebpackPlugin({
            patterns: [
                { from: "res", to: "res" }
            ]
        })
    ] as webpack.Configuration["plugins"])!.concat(env.wasmInstance !== "js" ? [
        new wasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "src/wasm_src"),
            outDir: path.resolve(__dirname, "src/wasm/" + env.wasmInstance),
            outName: "index",
            extraArgs: "--target web",
            forceMode: "development"
        })
    ] : []).concat(env.production ? [
        new compressionWebpackPlugin({
            test: /\.(js|wasm)$/i
        }) as any
    ] : []),
    devServer: {
        host: "0.0.0.0",
        port: 20310,
        allowedHosts: "all",
        client: {
            logging: "none"
        },
        hot: true,
        watchFiles: ["src/**/*"],
        server: "https",
        headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Cross-Origin-Opener-Policy": "same-origin",
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Cross-Origin-Embedder-Policy": "require-corp"
        }
    },
    ignoreWarnings: [
        (warning): boolean => warning.message.includes("Circular dependency between chunks with runtime")
    ],
    mode: env.production ? "production" : "development"
});

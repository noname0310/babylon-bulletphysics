import path from "path";
import webpack from "webpack";

export default (env: any): webpack.Configuration => ({
    entry: "./src/index.ts",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist/umd"),
        filename: `babylon.bulletphysics${env.production ? ".min" : ""}.js`,
        library: {
            name: {
                amd: "babylon-bulletphysics",
                commonjs: "babylon-bulletphysics",
                root: "BABYLONBULLET"
            },
            type: "umd"
        },
        // libraryExport: "default",
        umdNamedDefine: true,
        globalObject: "(typeof self !== \"undefined\" ? self : typeof global !== \"undefined\" ? global : this)"
    },
    optimization: {
        minimize: env.production
    },
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
            }
        ]
    },
    resolve: {
        alias: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "@": path.resolve(__dirname, "src")
        },
        modules: ["src", "node_modules"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    externals: [
        ({request}, callback): void => {
            if (/^@babylonjs\/core\//.test(request!)) {
                return callback(null, {
                    amd: request,
                    commonjs: request,
                    commonjs2: request,
                    root: "BABYLON"
                });
            }
            callback();
        }
    ],
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ],
    mode: env.production ? "production" : "development"
});

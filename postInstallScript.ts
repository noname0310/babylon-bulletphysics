import { execSync } from "child_process";
import * as fs from "fs";
import https from "https";

async function download(url: string, dest: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on("finish", () => {
                file.close();
                resolve();
            });
        }).on("error", (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function installAmmo(): Promise<void> {
    if (fs.existsSync("./src/External/ammo.wasm.d.ts")) return;

    await download(
        "https://raw.githubusercontent.com/regnaio/ammo.js/37cff85841b7ee79180114c9da7a32ed8d2ae549/dist/ammo.wasm.js",
        "./src/External/ammo.wasm.js"
    );
    await download(
        "https://raw.githubusercontent.com/regnaio/ammo.js/37cff85841b7ee79180114c9da7a32ed8d2ae549/dist/ammo.wasm.wasm",
        "./src/External/ammo.wasm.wasm"
    );
    await download(
        "https://raw.githubusercontent.com/giniedp/ammojs-typed/05408a318256ca561720aad1cfd0e83e772f06cb/ammo/ammo.d.ts",
        "./src/External/ammo.wasm.d.ts"
    );

    try {
        execSync("cd src/External && git init && git apply ammo-bundler.patch");
    } catch (error: any) {
        console.log(error.output.toString());
        process.exit(1);
    }
    if (fs.existsSync("./src/External/.git")) {
        fs.rmSync("./src/External/.git", { recursive: true });
    }
}

async function installBullet(): Promise<void> {
    if (!fs.existsSync("./src/wasm_src/bullet_src/BulletCollision")) {
        try {
            execSync("cd src/wasm_src/bullet_src && github-directory-downloader https://github.com/bulletphysics/bullet3/tree/d7f9d662076ed8c7cc2a62720ffbc7aea574cf3e/src/BulletCollision --dir=BulletCollision");
        } catch (error: any) {
            console.log(error.output.toString());
            if (fs.existsSync("./src/wasm_src/bullet_src/BulletCollision")) {
                fs.rmSync("./src/wasm_src/bullet_src/BulletCollision", { recursive: true });
            }
            process.exit(1);
        }
    }

    if (!fs.existsSync("./src/wasm_src/bullet_src/BulletDynamics")) {
        try {
            execSync("cd src/wasm_src/bullet_src && github-directory-downloader https://github.com/bulletphysics/bullet3/tree/d7f9d662076ed8c7cc2a62720ffbc7aea574cf3e/src/BulletDynamics --dir=BulletDynamics");
        } catch (error: any) {
            console.log(error.output.toString());
            if (fs.existsSync("./src/wasm_src/bullet_src/BulletDynamics")) {
                fs.rmSync("./src/wasm_src/bullet_src/BulletDynamics", { recursive: true });
            }
            process.exit(1);
        }
    }

    if (!fs.existsSync("./src/wasm_src/bullet_src/LinearMath")) {
        try {
            execSync("cd src/wasm_src/bullet_src && github-directory-downloader https://github.com/bulletphysics/bullet3/tree/d7f9d662076ed8c7cc2a62720ffbc7aea574cf3e/src/LinearMath --dir=LinearMath");
        } catch (error: any) {
            console.log(error.output.toString());
            if (fs.existsSync("./src/wasm_src/bullet_src/LinearMath")) {
                fs.rmSync("./src/wasm_src/bullet_src/LinearMath", { recursive: true });
            }
            process.exit(1);
        }
    }
}

async function main(): Promise<void> {
    await installAmmo();
    await installBullet();
}

main();

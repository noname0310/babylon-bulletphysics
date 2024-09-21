import { execSync } from "child_process";
import * as fs from "fs";

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
    await installBullet();
}

main();

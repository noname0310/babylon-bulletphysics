export class BenchHelper {
    public sampleCount: number;

    public showFpsPerFrame: boolean;

    private readonly _func: () => void;

    public constructor(func: () => void) {
        this.sampleCount = 600;
        this.showFpsPerFrame = false;
        this._func = func;
    }

    public runBench(): void {
        const sampledFps: number[] = [];
        const sampleCount = this.sampleCount;

        for (let i = 0; i < sampleCount; ++i) {
            const start = performance.now();
            this._func();
            const end = performance.now();
            const fps = 1000 / (end - start);
            sampledFps.push(fps);
        }
        let averageFps = 0;
        let resultString = "";
        if (this.showFpsPerFrame) {
            let result = "";
            for (let i = 0; i < sampleCount; ++i) {
                result += `(${i}, ${sampledFps[i]})`;
                if (i !== sampleCount - 1) {
                    result += ", ";
                }
                averageFps += sampledFps[i];
            }
            resultString += `Result: ${result}`;
            console.log(resultString);
        } else {
            for (let i = 0; i < sampleCount; ++i) {
                averageFps += sampledFps[i];
            }
        }
        resultString += `Average: ${averageFps / sampleCount}`;
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "0";
        div.style.left = "0";
        div.style.color = "black";
        div.textContent = resultString;
        document.body.appendChild(div);
    }
}

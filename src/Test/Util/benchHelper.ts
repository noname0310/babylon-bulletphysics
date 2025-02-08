export class BenchHelper {
    public sampleCount: number;

    public showFpsPerFrame: boolean;

    private readonly _func: () => [number, number];

    public constructor(func: () => [number, number]) {
        this.sampleCount = 600;
        this.showFpsPerFrame = false;
        this._func = func;
    }

    public runBench(): void {
        const simulationFrameTimes: number[] = [];
        const renderFrameTimes: number[] = [];
        const sampleCount = this.sampleCount;

        for (let i = 0; i < sampleCount; ++i) {
            const [simulationTime, renderTime] = this._func();
            simulationFrameTimes.push(simulationTime);
            renderFrameTimes.push(renderTime);
        }
        let averageRenderTime = 0;
        let averageSimulationTime = 0;
        let resultString = "";
        if (this.showFpsPerFrame) {
            let result = "";
            for (let i = 0; i < sampleCount; ++i) {
                result += `(${i}, ${simulationFrameTimes[i] + renderFrameTimes[i]})`;
                if (i !== sampleCount - 1) {
                    result += ", ";
                }
                averageRenderTime += renderFrameTimes[i];
                averageSimulationTime += simulationFrameTimes[i];
            }
            resultString += `Result: ${result}`;
            console.log(resultString);
        } else {
            for (let i = 0; i < sampleCount; ++i) {
                averageRenderTime += renderFrameTimes[i];
                averageSimulationTime += simulationFrameTimes[i];
            }
        }
        resultString += `Average simulation time: ${averageSimulationTime / sampleCount} ms<br>`;
        resultString += `Average render time: ${averageRenderTime / sampleCount} ms<br>`;
        resultString += `Average total time: ${(averageSimulationTime + averageRenderTime) / sampleCount} ms<br>`;
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "0";
        div.style.left = "0";
        div.style.color = "black";
        div.innerHTML = resultString;
        document.body.appendChild(div);
    }
}

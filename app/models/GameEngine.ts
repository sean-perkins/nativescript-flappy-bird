
export class GameEngine {

    static GRAVITY = 0.25;

    private fps = 1000 / 60; // 60fps

    private gameLoop: any;

    start(executionCycle: Function): void {
        this.gameLoop = setInterval(() => {
            executionCycle();
        }, this.fps);
    }

    pause(): void {
        clearTimeout(this.gameLoop);
    }

}

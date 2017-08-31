/**
 * Base class for animated models in the game
 */
export abstract class AnimationEntity {
    /**
     * The animation delay between game loops (i.e: fps)
     */
    animationDelay: number;
    /**
     * The animation interval object
     */
    private animationInterval: any;
    /**
     * Determines if the entity is animating
     */
    animating: boolean;
    /**
     * The position offset of the model (used for animations)
     */
    position: number;
    /**
     * Abstract implementations of the animation sequence for a model
     */
    animate() {
        this.animating = true;
    }
    /**
     * Starts an underlying animation for a model
     * @param animationFn The animation sequence to run
     */
    protected startAnimation(animationFn: Function): void {
        this.animationInterval = setInterval(animationFn, this.animationDelay);
    }



    /**
     * Stops the animation for the model
     */
    stopAnimation(): void {
        clearInterval(this.animationInterval);
        this.animating = false;
    }

}

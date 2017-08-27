import { SplashInstructionComponent } from '../splash-instruction/splash-instruction.component';
import { OnDestroy, ViewChild } from '@angular/core';
import { Component } from '@angular/core';

import { Bird, Ceiling, Land, Sky } from '../../../models/index';
import { GameEngine } from '../../../models/GameEngine';

@Component({
    selector: 'ns-game',
    moduleId: module.id,
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnDestroy {
    // Splash instruction component referenced, accesed for animating dismiss
    @ViewChild(SplashInstructionComponent) splashInstruction: SplashInstructionComponent;
    // Determines if the game has started
    hasStarted = false;
    // The death state of the player
    dead = false;

    constructor(
        public bird: Bird,
        public ceiling: Ceiling,
        public land: Land,
        public sky: Sky,
        private engine: GameEngine) { }

    /**
     * On destroy - clean up animations and pause the game loop
     */
    ngOnDestroy() {
        this.stopAnimations();
        this.engine.pause();
    }

    /**
     * Handles when a user taps on the screen
     */
    screenPress(): void {
        // Starts the game only if it has not already started
        if (!this.hasStarted) {
            this.hasStarted = true;
            this.startGame();
        }
        // Handle the jump if the user has not died
        if (!this.dead) {
            this.bird.jump();
        }
    }

    /**
     * Restart the game (the user selected replay)
     */
    restart(): void {
        this.dead = false;
        this.bird.reset();
        this.bird.animate();
        this.land.animate();
        this.sky.animate();
        this.ceiling.animate();
        this.startGame();
    }

    /**
     * Starts the game
     * Dismisses splash screen and starts game loop for altitude changes
     */
    private startGame(): void {
        this.splashInstruction.dismiss();
        this.engine.start(() => {
            this.bird.velocity += GameEngine.GRAVITY;
            this.bird.position += this.bird.velocity;
            this.bird.rotation = Math.min((this.bird.velocity / 10) * 90, 90);
            if (this.bird.hasCrashed) {
                this.endGame();
            }
            this.bird.checkAltitude();
            // TODO handle drawing pipes
        });
    }

    /**
     * Ends the game
     * Marks the user as died, plays audio and pauses game loop
     */
    private endGame(): void {
        this.dead = true;
        this.stopAnimations();
        this.bird.playDeathAudio();
        this.engine.pause();
    }

    /**
     * Stops all active animations
     * Used for when the player has died
     */
    private stopAnimations(): void {
        this.bird.stopAnimation();
        this.ceiling.stopAnimation();
        this.land.stopAnimation();
        this.sky.stopAnimation();
    }

}

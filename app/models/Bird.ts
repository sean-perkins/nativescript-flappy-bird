import { Injectable } from '@angular/core';
import { AnimationEntity } from './AnimationEntity';
import { TNSPlayer } from 'nativescript-audio';
import { isAndroid } from 'tns-core-modules/platform';

@Injectable()
export class Bird extends AnimationEntity {

    // The offset position of the background sprite for the bird
    private positionOffset = 0;
    // The delay for the FPS
    animationDelay = 150;
    // Velocity change when a user jumps the bird
    private jumpVelocity = -4.6;
    // Rotation of the image used for diving sequence
    rotation = 0;
    // The vertical positioning of the entity
    position = 180;
    // The velocity of the bird as gravity takes effect
    velocity = 0;
    // The audio sequence for the flap sound
    wingFlapAudio: TNSPlayer;

    constructor() {
        super();
        this.wingFlapAudio = new TNSPlayer();
    }

    /**
     * Resets the bird model back to default
     */
    reset(): void {
        this.velocity = 0;
        this.rotation = 0;
        this.position = 180;
    }

    /**
     * Animates the bird to simulate flapping
     */
    animate(): void {
        const assetSize = isAndroid ? 25 : 24;
        this.startAnimation(() => {
            this.positionOffset -= assetSize;
            if (this.positionOffset <= -(assetSize * 4)) {
                this.positionOffset = 0;
            }
        });
    }

    /**
     * Handles the jump animation for the bird
     */
    jump(): void {
        // Only flap and play audio if the user has not crashed
        this.velocity = this.jumpVelocity;
        this.rotation = Math.min((this.velocity / 10) * 90, 90);
        this.wingFlapAudio.initFromFile({
            audioFile: '~/audio/sfx_wing.mp3',
            loop: false
        });
        this.wingFlapAudio.play();
    }

    /**
     * Check altitude to prevent user from clipping past the ceiling barrier
     */
    checkAltitude(currentPosition: number, maxHeight: number): void {
        const boundHeight = currentPosition - 22;
        if (boundHeight < maxHeight) {
            this.position = currentPosition - 80;
        }
    }

    /**
     * Checks if the bird has crashed, offsets rotation to solve UI problem
     */
    hasCrashed(currentPosition: number, minHeight: number): boolean {
        const crashed = (currentPosition + 45) >= minHeight;
        if (crashed) {
            this.rotation = 70;
        }
        return crashed;
    }

    /**
     * Style implementation to leverage animations+ inside NativeScript
     */
    get styles(): string {
        return `
        background-position: 0 ${this.positionOffset};
        rotate: ${this.rotation};`;
    }

    /**
     * Plays the death audio for the bird
     */
    playDeathAudio(): void {
        const deathAudio = new TNSPlayer();
        deathAudio.initFromFile({
            audioFile: '~/audio/sfx_die.mp3',
            loop: false
        });
        deathAudio.play();
    }
}

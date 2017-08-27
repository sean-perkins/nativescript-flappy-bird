import { Injectable } from '@angular/core';
import { AnimationEntity } from './AnimationEntity';

@Injectable()
export class Ceiling extends AnimationEntity {

    animationDelay = 1000 / 60;

    position = 0;

    animate(): void {
        this.startAnimation(() => {
            this.position--;
            if (this.position < -200) {
                this.position = 0;
            }
        });
    }

    get styles(): string {
        return `background-position: ${this.position} 0;`;
    }

}

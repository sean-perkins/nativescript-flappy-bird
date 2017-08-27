import { Injectable } from '@angular/core';
import { AnimationEntity } from './AnimationEntity';

@Injectable()
export class Land extends AnimationEntity {

    animationDelay = 1000 / 20;

    animate(): void {
        this.position = 0;
        this.startAnimation(() => {
            this.position += 20;
            if (this.position > 330) {
                this.position = 0;
            }
        });
    }

    get styles(): string {
        return `background-position: ${this.position} 0;`;
    }

}

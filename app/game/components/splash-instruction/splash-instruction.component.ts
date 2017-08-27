import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'splash-instruction',
    moduleId: module.id,
    templateUrl: './splash-instruction.component.html',
    styleUrls: ['./splash-instruction.component.css']
})
export class SplashInstructionComponent {

    @ViewChild('splash') splashImage: ElementRef;

    dismiss(): void {
        if (this.splashImage && this.splashImage.nativeElement) {
            this.splashImage.nativeElement.animate({
                opacity: 0,
                duration: 500
            });
        }
    }

}

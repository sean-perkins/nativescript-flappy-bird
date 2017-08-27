import { Component, ViewChild, ElementRef, Output, OnInit, EventEmitter } from '@angular/core';

import { screen } from 'tns-core-modules/platform';

@Component({
    selector: 'splash-scoreboard',
    moduleId: module.id,
    templateUrl: './splash-scoreboard.component.html',
    styleUrls: ['./splash-scoreboard.component.css']
})
export class SplashScoreBoardComponent implements OnInit {

    @ViewChild('replayBtn') replayBtn: ElementRef;

    @Output() onReplay: EventEmitter<boolean> = new EventEmitter();

    replayOffset: number;

    ngOnInit() {
        this.replayOffset = (screen.mainScreen.widthDIPs / 2) - 60; // Half screen width - Half image width = center
        this.replayBtn.nativeElement.translateX = this.replayOffset;

        this.replayBtn.nativeElement.animate({
            opacity: 1.0,
            duration: 400
        });
        this.replayBtn.nativeElement.animate({
            translate: {
                x: this.replayOffset,
                y: 0
            },
            duration: 400
        });
    }

    replay(): void {
        this.onReplay.next(true);
    }

}

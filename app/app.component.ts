import { Component } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { Color } from 'tns-core-modules/color';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
})

export class AppComponent {

    constructor(private page: Page) {
        // Hides the status bar and sets the background to the sky blue
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.backgroundColor = new Color('#4EC0CA');
    }

}

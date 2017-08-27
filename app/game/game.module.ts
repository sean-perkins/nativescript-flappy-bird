import { SplashInstructionComponent } from './components/splash-instruction/splash-instruction.component';
import { SplashScoreBoardComponent } from './components/splash-scoreboard/splash-scoreboard.component';
import { SkyComponent } from './components/sky/sky.component';
import { LandComponent } from './components/land/land.component';
import { CeilingComponent } from './components/ceiling/ceiling.component';
import { BirdComponent } from './components/bird/bird.component';
import { GameComponent } from './components/game/game.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GameComponent,
        BirdComponent,
        CeilingComponent,
        LandComponent,
        SkyComponent,
        SplashInstructionComponent,
        SplashScoreBoardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GameModule { }

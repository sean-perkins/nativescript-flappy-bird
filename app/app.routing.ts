import { GameComponent } from './game/components/game/game.component';
import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/game', pathMatch: 'full' },
    { path: 'game', component: GameComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

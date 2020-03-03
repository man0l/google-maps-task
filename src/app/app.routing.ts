import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);

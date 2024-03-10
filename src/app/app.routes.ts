import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IvantiComponent } from './partners/ivanti/ivanti.component';

export const routes: Routes = [
    { 
        path: "home", 
        component: HomeComponent
    },
    { 
        path: "ivanti", 
        component: IvantiComponent
    },
    { 
        path: '**', 
        redirectTo: 'home'
    }
];

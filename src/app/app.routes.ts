import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IvantiComponent } from './partners/ivanti/ivanti.component';
import { ProactivanetComponent } from './partners/proactivanet/proactivanet.component';

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
        path: "proactivanet", 
        component: ProactivanetComponent
    },
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: '**', component: HomeComponent}
];

import { Routes } from '@angular/router';
import { EnergyConverter } from './features/energy-converter/energy-converter';
import { WeightConverter } from './features/weight-converter/weight-converter';
import { Shell } from './core/shell/shell'


export const routes: Routes = [
    {
        path: '',
        component: Shell,
        children: [
            {path: '', redirectTo: 'energy', pathMatch: 'full'}, // redirects to energy by defualt
            {path:'weight', component: WeightConverter},
            {path: 'energy', component: EnergyConverter}
        ]
    }
];

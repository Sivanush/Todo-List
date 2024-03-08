import { Routes } from '@angular/router';
import { AllComponent } from './components/pages/all/all.component';
import { ImportentComponent } from './components/pages/importent/importent.component';
import { CompletedComponent } from './components/pages/completed/completed.component';

export const routes: Routes = [
    {
        path:'',
        component:AllComponent
    },
    {
        path:'importent',
        component:ImportentComponent
    },
    {
        path:'complete',
        component:CompletedComponent  
    }
];

import { CheckInFilterComponent } from './check-in/check-in-filter/check-in-filter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HospedeFormComponent } from './hospede/hospede-form/hospede-form.component';
import { CheckInFormComponent } from './check-in/check-in-form/check-in-form.component';

const appRoutes: Routes = [
    { path: 'check-in/novo', component: CheckInFormComponent },
    { path: 'check-in', component: CheckInFilterComponent },
    { path: 'hospedes', component: HospedeFormComponent },
    { path: '', redirectTo: '/check-in', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

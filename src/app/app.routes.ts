import { Routes } from '@angular/router';

import { Exercice1Component } from './exercice1-component/exercice1-component';
import { Exercice2Component } from './exercice2-component/exercice2-component';
import { TransactionListComponent } from './exercice3/transaction-list-component/transaction-list-component';
import { TransactionDetailComponent } from './exercice3/transaction-detail-component/transaction-detail-component';

export const routes: Routes = [
    { path: '', redirectTo: '/exercice1', pathMatch: 'full' },
    { path: 'exercice1', component: Exercice1Component },
    { path: 'exercice2', component: Exercice2Component },
    { path: 'exercice3', component: TransactionListComponent },
    { path: 'exercice3/transaction/:id', component: TransactionDetailComponent}
];

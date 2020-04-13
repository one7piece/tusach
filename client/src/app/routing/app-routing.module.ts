import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent, BookDetailComponent, AccountComponent, MessagesComponent } from '../components'

const routes: Routes = [
  //{ path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book/:id', component: BookDetailComponent }
];

@NgModule({
  //imports: [ RouterModule.forRoot(routes, {enableTracing: true, useHash: true})],
  imports: [ RouterModule.forRoot(routes, {useHash: true})],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

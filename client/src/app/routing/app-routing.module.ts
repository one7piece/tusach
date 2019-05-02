import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent, BookDetailComponent, MessagesComponent, MapviewComponent } from '../components'

const routes: Routes = [
  //{ path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'mapview', component: MapviewComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true})],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

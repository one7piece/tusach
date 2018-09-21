import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';   // NgModel lives here
// import material modules
import { MatToolbarModule, MatInputModule, MatListModule, MatExpansionModule, 
  MatFormFieldModule, MatButtonModule, MatMenuModule, MatSidenavModule, 
  MatIconModule, MatCardModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent, HeaderComponent, MessagesComponent, BooksComponent, BookDetailComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessagesComponent,
    BooksComponent,
    BookDetailComponent
  ],
  imports: [
    MatToolbarModule, MatFormFieldModule, MatButtonModule, MatMenuModule, MatInputModule,
    MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatExpansionModule,
    BrowserAnimationsModule,  
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';   // NgModel lives here
// import material modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent, LoginComponent, HeaderComponent, MessagesComponent, BooksComponent, BookDetailComponent, AccountComponent } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessagesComponent,
    BooksComponent,
    BookDetailComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    MatToolbarModule, MatFormFieldModule, MatButtonModule, MatMenuModule, MatInputModule,
    MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatExpansionModule,
    BrowserAnimationsModule,  
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

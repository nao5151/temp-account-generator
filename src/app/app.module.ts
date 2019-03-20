import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { AccountFieldComponent } from './account/account-field/account-field.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordGeneratorComponent,
    AccountFieldComponent,
    AccountEditComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

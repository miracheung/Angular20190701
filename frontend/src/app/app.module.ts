import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import {GetService} from './get.service'
import {AuthService} from './login/auth.service';
import { ExpensesAddComponent } from './expenses-add/expenses-add.component';
import { ExpensesEditComponent } from './expenses-edit/expenses-edit.component';
import { ExpensesDeleteComponent } from './expenses-delete/expenses-delete.component';
import { PiechartComponent } from './piechart/piechart.component';
import {ChartsModule} from 'ng2-charts';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './login/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpensesListComponent,
    ExpensesAddComponent,
    ExpensesEditComponent,
    ExpensesDeleteComponent,
    PiechartComponent,
    RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [
    GetService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

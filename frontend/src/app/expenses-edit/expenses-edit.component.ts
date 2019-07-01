import { Component, OnInit, Input } from '@angular/core';
import { IModel } from '../model';
import {Router} from "@angular/router"
import { GetService } from './../get.service';
import {AuthService} from '../login/auth.service'

@Component({
  selector: 'app-expenses-edit',
  templateUrl: './expenses-edit.component.html',
  styleUrls: ['./expenses-edit.component.css']

})
export class ExpensesEditComponent  {

  childExpense:IModel = JSON.parse(localStorage.getItem('parentExpense'));

  submitted = false;

  public expenses = [];
  public errorMsg;

  constructor(private router: Router,
    private _getService: GetService,
    private _authService: AuthService) { }



  onSubmit(expensesForm) {
    console.log(expensesForm);
    console.log(this.childExpense.id)
    this.submitted = true;
    this._getService.updateExpenses(this.childExpense.id,expensesForm).subscribe(
    );
    this.router.navigate(['/list']);


  }

  onSelectBack() {
    this.router.navigate(['list']);
  }

  onSelectLogout() {
    this._authService.logout()
    this.router.navigate(['login']);
  }

}

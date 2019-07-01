import { Component, Input } from '@angular/core';
import { GetService } from './../get.service';
import {Router} from "@angular/router"
import {AuthService} from '../login/auth.service'

@Component({
  selector: 'app-expenses-add',
  templateUrl: './expenses-add.component.html',
  styleUrls: ['./expenses-add.component.css']
})
export class ExpensesAddComponent {

  submitted = false;

  public expenses = [];
  public errorMsg;

  constructor(private router: Router,
    private _getService: GetService,
    private _authService: AuthService) { }



  onSubmit(expensesForm) {
    console.log(expensesForm);
    this.submitted = true;
    this._getService.postExpenses(expensesForm).subscribe(
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

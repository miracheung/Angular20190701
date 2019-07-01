import { Component, OnInit, Input } from '@angular/core';
import { GetService } from './../get.service';
import {Router} from "@angular/router"
import { Observable } from 'rxjs';
import { IModel } from '../model';
import {AuthService} from '../login/auth.service'
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  public expenses = [];
  public errorMsg;


  disabled: boolean = false;

  constructor(private router: Router,
    private _getService: GetService,
    private _authService: AuthService) {  }

  ngOnInit() {
    this._getService.getExpenses().subscribe(
      (data) =>this.expenses = data
      ,
      (error) => this.errorMsg = error

    );

    // console.log(this.expenses)
  }

  onSelectEdit(expense) {
    localStorage.setItem('parentExpense', JSON.stringify(expense));
    // console.log(expense);
    this.router.navigate(['/edit', expense.id]);
  }
  onSelectDelete(expense) {
    // console.log(expense)
    // this.parentExpense=expense
    this.router.navigate(['/delete', expense.id]);
  }

  onSelectGraph() {
    localStorage.setItem('parentExpenses', JSON.stringify(this.expenses));
    // console.log(expense)
    // this.parentExpense=expense
    this.router.navigate(['graph']);
  }

  onSelectLogout() {
    this._authService.logout()
    this.router.navigate(['login']);
  }
}

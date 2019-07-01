import { Component, OnInit } from '@angular/core';
import { GetService } from './../get.service';
import {ActivatedRoute, Router, ParamMap} from "@angular/router"
import {AuthService} from '../login/auth.service'

@Component({
  selector: 'app-expenses-delete',
  templateUrl: './expenses-delete.component.html',
  styleUrls: ['./expenses-delete.component.css']
})
export class ExpensesDeleteComponent implements OnInit {

  public expenseId;

  constructor(private router: Router,
    private _getService: GetService,
    private route: ActivatedRoute,
    private _authService: AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.expenseId = id;
    });

  }
  onSelectDelete() {
  // this._getService.deleteExpenses().subscribe(
    //   (data) =>this.expenses = data,
    //   (error) => this.errorMsg = error
    // );

    // this.submitted = true;

    this._getService.deleteExpenses(this.expenseId).subscribe();
    console.log(this.expenseId)
    this.router.navigate(['/list']);
  };
  onSelectNo() {

      this.router.navigate(['/list']);
    };

  onSelectLogout() {
    this._authService.logout()
    this.router.navigate(['login']);
  }
}

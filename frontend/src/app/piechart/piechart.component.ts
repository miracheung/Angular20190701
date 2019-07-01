import { Component, OnInit } from '@angular/core';
import { GetService } from './../get.service';
import {Router} from "@angular/router"
import {AuthService} from '../login/auth.service'

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  public expenses = [];
  public errorMsg;


  public pieChartLabels = [];
  // public pieChartData = [120, 150, 180, 90];
  public pieChartData = []
  public pieChartType = 'pie';

  childExpenses= JSON.parse(localStorage.getItem('parentExpenses'));

  constructor(private _getService: GetService,
    private router: Router,
    private _authService: AuthService) {  }

  ngOnInit() {
    // this._getService.getExpenses().subscribe(
    //   (data) =>this.expenses = data
    //   ,
    //   (error) => this.errorMsg = error
    // );
    var amount = []
    var description = []

    this.childExpenses.forEach(function(arrayItem) {
      console.log(arrayItem)
      var x = arrayItem.amount;
      var y = arrayItem.description;
      // var z = {data: x, label: 'price'};
      // var z = {data: [x], label: y};
      description.push(y);
      amount.push(x);
      // barra.push(z);


    })

    this.pieChartData = amount;
    this.pieChartLabels= description;
  }

  onSelectBack() {
    this.router.navigate(['list']);
  }

  onSelectLogout() {
    this._authService.logout()
    this.router.navigate(['login']);
  }
}

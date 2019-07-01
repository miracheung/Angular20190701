import { Component } from "@angular/core";

import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  message: string;
  creds = {
    username: "",
    password: ""
  };

  constructor(private router: Router, private _authService: AuthService) {}

  onSubmit() {
    this._authService.handleAuth(this.creds);
    if (!this._authService.isAuthenticated()) {
      this.message = "Invalid username or password";
    }
  }
  onSelectRegistration() {
    this.router.navigate(["registration"]);
  }
}

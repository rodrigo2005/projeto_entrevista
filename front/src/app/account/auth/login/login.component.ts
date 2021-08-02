import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  usuario: Login;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.usuario = new Login();

    // reset login status
    this.authenticationService.logout();
  }

  ngAfterViewInit() {
    document.body.classList.add('authentication-bg');
  }



  /**
   * On submit form
   */
  onSubmit() {
    this.loading = true;
    this.authenticationService.login(this.usuario)
      .subscribe(
        data => {
          this.router.navigate(['../../cliente/lista']);
        },
        error => {
          console.log(error)
          this.error = "Usuário e/ou senha incorretos"
          this.loading = false;
        });
  }
}

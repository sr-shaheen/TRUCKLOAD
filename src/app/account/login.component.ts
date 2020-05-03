import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../_services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from '../shared/services/common.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private commonService: CommonService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.commonService.showSuccessMsg('You Login successfully!');
          // this.router.navigate([this.returnUrl]);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // this.snackBar.open('Username of Password Incorrect', '×', {
          //   panelClass: 'success',
          //   verticalPosition: 'top',
          //   horizontalPosition: 'right',
          //   duration: 3000,
          // });
          this.commonService.showErrorMsg('Username of Password Incorrect');
          this.loading = false;
        }
      );
  }
}

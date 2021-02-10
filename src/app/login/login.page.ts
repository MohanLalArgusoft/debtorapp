import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      dob: ['', [Validators.required]],
    });
  }

  login(){
    if (this.loginForm.valid) {
      let debtor_id = localStorage.getItem('debtor_id');
      this.commonService.showLoader();
      this.authService.authenticate(debtor_id,this.loginForm.value.dob).subscribe((res)=>{
        console.log(res['result']);
        this.commonService.dismissLoader();
        if(res['result']){
          localStorage.setItem('remote_token',res['data']);
          let navigationExtras: NavigationExtras = {
            queryParams: {
              form_slug: localStorage.getItem('form_slug'),
              case_id: localStorage.getItem('case_id'),
              debtor_id: localStorage.getItem('debtor_id')
            }
          };
          this.router.navigate(['/home'],navigationExtras);
        } else {
          this.commonService.showToast('Invalid Date of Birth','danger');
        }
      })
    }
  }

}

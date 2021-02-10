import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { DynamicFormsService } from '../services/dynamic-forms.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  jsonObject: any;
  jsonString: any;
  formConfig: any;
  debtor_dob: '';
  loader;
  case_id: '';
  form_slug: '';
  debtor_id: '';
  formObj;

  constructor( 
    private dynamicFormsService: DynamicFormsService, 
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private router: Router

  ) { }

  ngOnInit() {
    this.formConfig = {
      options: {
        alerts: {
          submitMessage: 'Thank you for submitting the form.'
        },
        errors: {
          message: 'Error while submitting the form. Please try again.'
        }
      }
    };
  }

  async ionViewWillEnter() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.form_slug = params['form_slug'];
        this.case_id = params['case_id'];
        this.debtor_id = params['debtor_id'];
        localStorage.setItem('form_slug',this.form_slug);
        localStorage.setItem('case_id',this.case_id);
        if(localStorage.getItem('debtor_id') != this.debtor_id){
          localStorage.setItem('debtor_id',this.debtor_id);
          localStorage.setItem('remote_token','');
          this.router.navigate(['/login']);
        }else {
          localStorage.setItem('debtor_id',this.debtor_id);
        }
      }
    });
    if(!localStorage.getItem('remote_token')){
      this.router.navigate(['/login']);
    } else {
      this.getForm();
    }
  }

  getForm(){
    this.commonService.showLoader();
    this.dynamicFormsService.getForm(this.form_slug,this.case_id,this.debtor_id).subscribe(async(res)=>{
      this.commonService.dismissLoader();
      if(res['result']){
        if(res['data'].length > 0){
          this.setForm(res);
        }
      }else {
        this.commonService.showToast(res['message'],'danger');
      }
    });
  }

  setForm(obj){
    this.formObj = obj.data[0];
    this.jsonString = obj.data[0].content;
    this.jsonObject = JSON.parse(this.jsonString);
    if(this.jsonObject.display == 'form'){
			this.jsonObject.components.forEach( (component, index)=> {
        if(component.type == 'htmlelement'){
          var str = component.content;
          this.jsonObject.components[index].content = str.replace(/\\/g, ''); 
        }
      });
		} else if(this.jsonObject.display == 'wizard'){
      this.jsonObject.components.forEach( (page, index)=> {
        page.components.forEach((component,i) => {
          if(component.type == 'htmlelement'){
            var str = component.content;
            this.jsonObject.components[index].components[i].content = str.replace(/\\/g, ''); 
          }  
        });
      });
		}

  }

  onRender(event) {
    // console.log(event);
  }
  onNext(event) {
    // console.log(event);
  }
  async onChange(event) {
    // console.log(event)
  }

  async onSubmit(event) {
    this.commonService.showLoader();
    this.dynamicFormsService.saveFormData(this.form_slug,this.case_id,this.debtor_id,event.data).subscribe(async (res) => {
      if(res['result']){
        this.jsonObject = {};
        this.commonService.showToast('Form Submitted!');
      }else {
        this.jsonObject = {};
        this.commonService.showToast('Failed to Submit!','danger');
      }
      this.commonService.dismissLoader();
    });
  }

  async confirmLogout() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Logout!',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.router.navigate(['/login']);
            localStorage.setItem('remote_token','');
          }
        }
      ]
    });
    await alert.present();
  }
}

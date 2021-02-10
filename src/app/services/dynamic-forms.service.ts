import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormsService {
  constructor(
    public http: HttpClient,
  ) { }

  getForm(form_slug,caseId,debtor_id){
    const apiURL =  localStorage.getItem('server_url') + `b/dynamic_form_builder/dynamic_form_render/${form_slug}/${caseId}/${debtor_id}?source=debtor_API`;
    return this.http.get(apiURL);
  }

  saveFormData(form_slug,caseId,debtor_id,payload){
    const apiURL =  localStorage.getItem('server_url') + `b/dynamic_form_builder/dynamic_form_render/${form_slug}/${caseId}/${debtor_id}?source=debtor_API`;
    return this.http.post(apiURL,payload);
  }
}

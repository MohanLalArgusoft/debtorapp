import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormsService {
  constructor(
    public http: HttpClient,
  ) { }

  getForm(form_slug,caseId,debtor_id){
    const apiURL =  SERVER_URL + `b/dynamic_form_builder/dynamic_form_render/${form_slug}/${caseId}/${debtor_id}?source=debtor_API`;
    return this.http.get(apiURL);
  }

  saveFormData(form_slug,caseId,debtor_id,payload){
    const apiURL =  SERVER_URL + `b/dynamic_form_builder/dynamic_form_render/${form_slug}/${caseId}/${debtor_id}?source=debtor_API`;
    return this.http.post(apiURL,payload);
  }
}

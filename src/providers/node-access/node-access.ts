import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the NodeAccessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NodeAccessProvider {

  constructor(public http: Http) {
    console.log('Hello NodeAccessProvider Provider');
  }
  // url = "https://acess-node.herokuapp.com"
  url = "http://localhost:5000"

  login(user, password){
    //retorna um token. Você deve usar o token para fazer as demais chamadas ao back-end
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let payload = JSON.stringify({user:user,password:password})
    return this.http.post(this.url+"/mobileLogin", payload, options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  getList(){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.url+"/getListPass/token", options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    let body = res.json();
    // console.log("Resultado da extracao:")
    // console.log(body)
    return body;
  }

  private handleErrorObservable(error: Response | any) {
    console.log(error.message || error);
    return Observable.throw(error.message || error);
  }



}

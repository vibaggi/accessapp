import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs'
import {NodeAccessProvider} from '../../providers/node-access/node-access'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[NodeAccessProvider]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: NodeAccessProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log("login")
    this.service.login("adm", "adm").subscribe(response=>{
      console.log(response)
      if(response.status==200){
        this.navCtrl.push(TabsPage)
      }else if(response.status == 401){
        //aviso de login não autorizado
      }
    })
    // this.service.getList().subscribe(resp=>{
    //   console.log(resp)
    // })
    
  }

}

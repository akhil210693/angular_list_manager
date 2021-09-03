import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grocery List Component';
  name: string;
  cost:string;
  group:string;
  in= [];
  out=[];
  
  onClick(){
    if(this.group=="In"){
    
  	this.in.push({name: this.name,cost:this.cost,group:this.group, strike: false});
    }
    if(this.group=="Out"){
      this.out.push({name: this.name,cost:this.cost,group:this.group, strike: false});
      }
  	this.name = '';
    this.cost = '';
    this.group='';
   
  }
  deleteFieldValue(index) {
    this.out.splice(index, 1);
}
deleteFieldValue1(index) {
  this.in.splice(index, 1);
}
}

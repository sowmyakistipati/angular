import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  SourceofImage:any="assets/s1.png"
  myh1:String='Ironman'
  drfintro:String="";
  intro(){
    this.drfintro="hi drf solutions"
  }
 
  fullName:String=''
  phone:String=''
  email:String=''
  flag:boolean=false;
  
  submit(){
    this.flag=true;
    this.fullName=this.fullName
    this.phone=this.phone
    this.email=this.email
  }

}

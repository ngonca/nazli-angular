import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nazli-project';
  public name:string = "";
  kahvelist = new Array();

  constructor(){
    this.kahvelist = JSON.parse(localStorage.getItem('kahveler')||"[]" );
  }

  add_Kahve(){
    this.kahvelist.push(this.name);
    localStorage.setItem('kahveler',JSON.stringify(this.kahvelist));
  }
}

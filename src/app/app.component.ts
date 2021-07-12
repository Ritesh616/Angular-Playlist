
import { Component } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'blog app';
  name="Ritesh Shende";
  getName()
  {
    return this.name
  }

obj={
  name:'petter',

  age:20
}
arr=['bruce','petter','Ritesh Shende']
a=100;
b=100;
siteUrl=window.location.href

getName1()
{
  alert("Ritesh Shende")
}


myEvent()
{
  console.warn()
}

currentVal=""
getVal()
{
  console.warn()
  
}

name1="ritesh shende"
disabledBox=true
enableBox()
{
  this.disabledBox=false
}
show="red"
show1="green"
show2="blue"

color="red"
color1="green"
color2="blue"
color3="yellow"

  data=[
    {
      name:'Ram',
      age:20,
      email:"ram123@gmail.com"
    },
    {
      name:'Petter',
      age:22,
      email:"petter123@gmail.com"
    },
    {
      name:'Sam',
      age:24,
      email:"sam666@gmail.com"
    },
    {
      name:'Bruse',
      age:26,
      email:"Bruse444@gmail.com"
    }
  ]


  color4="orange"
 
  err=false;
 


  updateColor()
  {
    this.color="blue"
  }


  data4="ritesh Shende"

  parentComponent()
  {
    console.warn()
  }

  Name="Ritesh Shende"
}

import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userss',
  templateUrl: './userss.component.html',
  styleUrls: ['./userss.component.css']
})
export class UserssComponent implements OnInit {

  @Output() parentComponent: EventEmitter<any>= new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
    this.parentComponent.emit("hello")
  }

}

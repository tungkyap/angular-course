import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-app',
  templateUrl: './learn-app.component.html',
  styleUrls: ['./learn-app.component.css']
})
export class LearnAppComponent implements OnInit {

  data = {
    title: "Angular Core Deep Dive"
  }

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(title: string) {
    this.data.title = title;
  }

}

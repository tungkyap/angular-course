import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  constructor() { }

  data = {
    title: "<h1>Angular Core Deep Dive</h1>"
  };

  ngOnInit(): void {
  }

  onClick() {
    alert('Hello World!');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

}

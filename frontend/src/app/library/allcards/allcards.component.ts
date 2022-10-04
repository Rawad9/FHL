import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcards',
  templateUrl: './allcards.component.html',
  styleUrls: ['./allcards.component.css'],
})
export class AllcardsComponent implements OnInit {
  cards = [
    {
      title: 'one',
      imgsrc: 'one',
      btn1: 'one',
      btn2: 'one',
    },
    {
      title: 'two',
      imgsrc: 'two',
      btn1: 'two',
      btn2: 'two',
    },
    {
      title: 'three',
      imgsrc: 'three',
      btn1: 'three',
      btn2: 'three',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

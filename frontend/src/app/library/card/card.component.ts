import { Component, OnInit, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title = 'test';
  @Input() imgsrc = 'test';
  @Input() btn1 = 'test';
  @Input() btn2 = 'test';
  constructor(private clipboardApi: ClipboardService) {}
  copyText(value: string) {
    this.clipboardApi.copyFromContent(value);
  }
  ngOnInit(): void {}
}

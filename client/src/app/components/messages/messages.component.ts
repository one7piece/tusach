import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // public because messageService property is used in template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}

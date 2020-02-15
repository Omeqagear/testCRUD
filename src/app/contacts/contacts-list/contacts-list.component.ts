import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  conts;
  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.conts = this.contactService.getContacts();
  }

  deleteEmployee(id) {
    for (let i = 0; i < this.conts.length; i++) {
      if (this.conts[i].id === id) {
          this.conts.splice(i, 1);
      }
    }

    this.contactService.deleteContact(id);
  }

}

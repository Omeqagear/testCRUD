import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts;
  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(id) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
          this.contacts.splice(i, 1);
      }
    }

    this.contactService.deleteContact(id);
  }

}

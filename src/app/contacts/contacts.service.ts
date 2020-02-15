import { Injectable } from '@angular/core';
import { Init } from './contacts-init';

@Injectable({
  providedIn: 'root'
})
export class ContactsService extends Init {

  constructor() {
    super();
    console.log('Contact Service works');
    this.load();
  }

  getContacts() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts;
  }

  addContact(newContact) {
    const contact = JSON.parse(localStorage.getItem('contacts'));
    contact.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contact));
  }

  deleteContact(id) {
    const contact = JSON.parse(localStorage.getItem('contacts'));
    for (let i = 0; i < contact.length; i++) {
     if (contact[i].id === id) {
       contact.splice(i, 1);
     }
  }
    localStorage.setItem('contacts', JSON.stringify(contact));
  }

  updateContact(oldContact, NewContact) {
    const contact = JSON.parse(localStorage.getItem('contacts'));

    for (let i; i < contact.length; i++) {
      if (contact[i].id === oldContact[i].id) {
        contact[i] = NewContact;
      }
    }
    localStorage.setItem('contacts', JSON.stringify(contact));
  }
}

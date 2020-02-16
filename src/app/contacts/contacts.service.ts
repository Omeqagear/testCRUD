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
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts;
  }

  addContact(newContact) {
    let contact = JSON.parse(localStorage.getItem('contacts'));
    contact.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contact));
  }

  deleteContact(id) {
    let contact = JSON.parse(localStorage.getItem('contacts'));
    for (let i = 0; i < contact.length; i++) {
     if (contact[i].id === id) {
       contact.splice(i, 1);
     }
  }
    localStorage.setItem('contacts', JSON.stringify(contact));
  }

  updateContact(oldContact, newContact) {
    let contacts = JSON.parse(localStorage.getItem('contacts'));

    for (let i; i < contacts.length; i++) {
      if (contacts[i].id == oldContact.id) {
        contacts[i] = newContact;
      }
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}

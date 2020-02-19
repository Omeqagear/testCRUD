import { Component, OnInit, ViewChild } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.css']
})
export class ContactsCreateComponent implements OnInit {

  contacts: any;
  text: any;
  oldText: any;
  appState = 'default';
  phoneNumberPattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
  emailPattern = '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/';
  constructor(private contactService: ContactsService, private router: Router) { }

  @ViewChild('f', {read: NgForm, static: true}) form: any;

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onSubmit() {
    if (this.form.value) {
    let newContact = {
      id: uuid(),
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      phoneNumber: this.form.value.phoneNumber,
      second_phoneNumber: this.form.value.second_phoneNumber,
      email: this.form.value.email,
      languages: this.form.value.languages,

    };
    this.contacts.push(newContact);
    this.contactService.addContact(newContact);
    this.router.navigate(['contacts-list']);
    }
  }

}

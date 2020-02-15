import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, Form } from '@angular/forms';


@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit {

  cont;
  id;
  constructor(private _Activatedroute: ActivatedRoute, private contService: ContactsService, private router: Router) { }

  @ViewChild('form', {read: NgForm, static: true}) form: any;

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.params.id;
    let conts = this.contService.getContacts();
    this.cont = conts.find(p => p.id === this.id);
    console.log(this.cont);
  }
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
      this.contService.updateContact(this.cont, this.form.value);
      this.router.navigate(['contacts-list']);
    }
  }

}
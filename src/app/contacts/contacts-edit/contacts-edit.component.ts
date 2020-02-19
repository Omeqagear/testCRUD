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

  cont: any;
  id: any;
  phoneNumberPattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
  // tslint:disable-next-line: variable-name
  constructor(private _Activatedroute: ActivatedRoute, private contService: ContactsService, private router: Router) { }

  @ViewChild('f', {read: NgForm, static: true}) form: any;

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.params.id;
    let conts = this.contService.getContacts();
    this.cont = conts.find(p => p.id === this.id);
    console.log(this.cont);
  }
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value);
      this.contService.updateContact(this.cont, this.form.value);
      this.router.navigate(['contacts-list']);
    }
  }

}

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsCreateComponent } from './contacts/contacts-create/contacts-create.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsEditComponent } from './contacts/contacts-edit/contacts-edit.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'contacts-list',
        pathMatch: 'full'
      },
      {
        path: 'contacts-list',
        component: ContactsListComponent,
      },
      {
        path: 'contacts-create',
        component: ContactsCreateComponent,
      },
      {
        path: 'contacts-edit/:id',
        component: ContactsEditComponent,
      },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';
import { Contact } from '../../state/models/contact.model';
// import { Contact } from 'src/app/state/models/contact.model';
 import * as ContactActions from '../../state/actions/contact.actions';
// import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-contact-grid-data',
  templateUrl: './contact-grid-data.component.html',
  styleUrls: ['./contact-grid-data.component.scss']
})
export class ContactGridDataComponent implements OnInit {
  contacts$: Observable<Contact[]>; // Observable for contacts
  isEditMode: boolean = false;
  isFormVisible: boolean = true;
  contactModel: Contact  = { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' };

  constructor(private store: Store<AppState>) {
    this.contacts$ = this.store.select((state) => state.contacts.contacts);
  }

  ngOnInit(): void {
    console.log('Dispatching loadContacts...');
    // Dispatch the action to load contacts
    this.store.dispatch(ContactActions.loadContacts());
    this.contacts$.subscribe((contacts) => {
      console.log('Contacts observable:', contacts); // Log emitted contacts
    });
  }

  onDelete(contactId: number): void {
    // Dispatch the delete contact action
    this.store.dispatch(ContactActions.deleteContact({ id: contactId }));
  }

  handleSave(contact: Contact): void {
    if (this.isEditMode) {
      this.store.dispatch(ContactActions.updateContact({ contact }));
    } else {
      const newContact = { ...contact, id: Date.now() };
      this.store.dispatch(ContactActions.addContact({ contact: newContact }));
    }
    this.isFormVisible = false;
  }
  
  handleCancel(): void {
    this.isFormVisible = false;
  }
  
  onAddNew(): void {
    this.contactModel = { id: 0, firstName: '', lastName: '', email: '' };
    this.isFormVisible = true;
    this.isEditMode = false;
  }
  
  onEdit(contact: Contact): void {
    this.contactModel = { ...contact };
    this.isFormVisible = true;
    this.isEditMode = true;
  }
  
}

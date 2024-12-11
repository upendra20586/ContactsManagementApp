import { createAction, props } from '@ngrx/store';
import { Contact } from '../models/contact.model';

export const loadContacts = createAction('[Contact] Load Contacts');
export const loadContactsSuccess = createAction(
  '[Contact] Load Contacts Success',
  props<{ contacts: Contact[] }>()
);
export const loadContactsFailure = createAction(
  '[Contact] Load Contacts Failure',
  props<{ error: string }>()
);

export const addContact = createAction(
  '[Contact] Add Contact',
  props<{ contact: Contact }>()
);
export const addContactSuccess = createAction(
  '[Contact] Add Contact Success',
  props<{ contact: Contact }>()
);

export const updateContact = createAction(
  '[Contact] Update Contact',
  props<{ contact: Contact }>()
);
export const updateContactSuccess = createAction(
  '[Contact] Update Contact Success',
  props<{ contact: Contact }>()
);

export const deleteContact = createAction(
  '[Contact] Delete Contact',
  props<{ id: number }>()
);
export const deleteContactSuccess = createAction(
  '[Contact] Delete Contact Success',
  props<{ id: number }>()
);

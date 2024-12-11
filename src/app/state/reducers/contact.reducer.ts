import { createReducer, on } from '@ngrx/store';
import { Contact } from '../models/contact.model';
import * as ContactActions from '../actions/contact.actions';

export interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
}

export const initialState: ContactState = {
    contacts: [],
    loading: false,
    error: null,
  };
  
  export const contactReducer = createReducer(
    initialState,
    on(ContactActions.loadContacts, (state) => ({ ...state, loading: true })),
    on(ContactActions.loadContactsSuccess, (state, { contacts }) => ({
      ...state,
      loading: false,
      contacts,
    })),
    on(ContactActions.loadContactsFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    })),
    on(ContactActions.addContactSuccess, (state, { contact }) => ({
      ...state,
      contacts: [...state.contacts, contact],
    })),
    on(ContactActions.updateContactSuccess, (state, { contact }) => ({
      ...state,
      contacts: state.contacts.map((c) =>
        c.id === contact.id ? contact : c
      ),
    })),
    on(ContactActions.deleteContactSuccess, (state, { id }) => ({
      ...state,
      contacts: state.contacts.filter((c) => c.id !== id),
    }))
  );
  

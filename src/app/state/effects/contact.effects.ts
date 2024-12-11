import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ContactActions from '../actions/contact.actions';
import { ContactService } from '../../services/contact.service';
// import { ContactService } from 'src/app/services/contact.service';

@Injectable()
export class ContactEffects {
  constructor(
    private actions$: Actions,
    private contactService: ContactService
  ) {}

  loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.loadContacts),
      mergeMap(() =>
        this.contactService.getContacts().pipe(
          map((contacts) => {
            console.log('Contacts loaded:', contacts); // Log retrieved data
            return ContactActions.loadContactsSuccess({ contacts });
          }),
          catchError((error) => {
            console.error('Error loading contacts:', error);
            return of(ContactActions.loadContactsFailure({ error }));
          })
        )
      )
    )
  );
  

  addContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.addContact),
      mergeMap((action) =>
        this.contactService.addContact(action.contact).pipe(
          map((contact) => ContactActions.addContactSuccess({ contact }))
        )
      )
    )
  );

  updateContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.updateContact),
      mergeMap((action) =>
        this.contactService.updateContact(action.contact).pipe(
          map((contact) => ContactActions.updateContactSuccess({ contact }))
        )
      )
    )
  );

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.deleteContact),
      mergeMap((action) =>
        this.contactService.deleteContact(action.id).pipe(
          map(() => ContactActions.deleteContactSuccess({ id: action.id }))
        )
      )
    )
  );
}

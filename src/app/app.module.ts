import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { contactReducer } from './state/reducers/contact.reducer';
import { ContactEffects } from './state/effects/contact.effects';
import { HttpClientModule } from '@angular/common/http';
import { ContactGridDataComponent } from './components/contact-grid/contact-grid-data.component';
import { ContactAddEditComponent } from './components/contact-add-edit/contact-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactGridDataComponent,
    ContactAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Ensure this is imported for API calls
    StoreModule.forRoot({ contacts: contactReducer }), // Register reducer
    EffectsModule.forRoot([ContactEffects]), // Register effects
    ContactGridDataComponent,
    ContactAddEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

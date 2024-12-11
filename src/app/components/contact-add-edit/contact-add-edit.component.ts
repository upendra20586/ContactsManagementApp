import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../state/models/contact.model';
// import { Contact } from 'src/app/state/models/contact.model';

@Component({
  selector: 'app-contact-add-edit',
  templateUrl: './contact-add-edit.component.html',
  styleUrls: ['./contact-add-edit.component.scss']
})
export class ContactAddEditComponent implements OnInit {
  @Input() contact!: Contact;
  @Input() isEditMode = false;

  @Output() save = new EventEmitter<Contact>();
  @Output() cancel = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(contactForm: any): void {
    if (!contactForm.valid) {
      return; // Prevent submission if the form is invalid
    }
    this.save.emit(this.contact);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactGridDataComponent } from './components/contact-grid/contact-grid-data.component';

export const routes: Routes = [
  { path: '', component: ContactGridDataComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

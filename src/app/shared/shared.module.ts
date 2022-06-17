import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';
import { TrimTextPipe } from './pipes/trim-text.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    TrimTextPipe,
    SpinnerComponent,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    FormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    NavBarComponent,
    CardComponent,
    TrimTextPipe,
    SpinnerComponent,
    ErrorModalComponent
  ]
})
export class SharedModule { }

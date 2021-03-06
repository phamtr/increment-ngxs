import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeState } from './home.store';

@NgModule({
  imports: [
    CommonModule // ngFor, ngIf directives
  ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeModule {}

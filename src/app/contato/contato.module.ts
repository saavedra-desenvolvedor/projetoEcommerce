import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ContatoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  
})
export class ContatoModule {}

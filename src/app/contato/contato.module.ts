import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarrinhoRoutingModule } from '../carrinho/carrinho-routing.module';
import { ContatoComponent } from './contato.component';

@NgModule({
  declarations: [
    ContatoComponent,
  ],
  imports: [
    CommonModule,CarrinhoRoutingModule, FormsModule
  ]
  
})
export class ContatoModule { }

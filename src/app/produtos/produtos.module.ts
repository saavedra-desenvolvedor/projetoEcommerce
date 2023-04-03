import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';

import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetalheProdutoComponent],
  imports: [CommonModule, ProdutosRoutingModule, FormsModule],
})
export class ProdutosModule {}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from '../../produtos';
import { ProdutosService } from '../../produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css'],
})
export class DetalheProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  constructor(
    private produtosService: ProdutosService,
    private route : ActivatedRoute,
    ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId)
  }
}

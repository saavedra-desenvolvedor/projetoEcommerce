import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from '../../notificacao.service';
import { IProduto } from '../../produtos';
import { ProdutosService } from '../../produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css'],
})
export class DetalheProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route : ActivatedRoute,
    private notificacaoService : NotificacaoService,
    ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId)
  }
  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho")
  }
}
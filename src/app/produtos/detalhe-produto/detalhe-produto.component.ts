import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from '../../carrinho.service';
import { NotificacaoService } from '../../notificacao.service';
import { IProduto, IProdutoCarrinho } from '../../produtos';
import { ProdutosService } from '../../produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css'],
})
export class DetalheProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtosService.getOne(produtoId);
    console.log(this.produto);
  }
  adicionarAoCarrinho() {
    alert('O produto foi adicionado ao carrinho');
    //this.notificacaoService.notificar('O produto foi adicionado ao carrinho');
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade,
    };
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import swal from 'sweetalert';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;
  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }
  calcularTotal() {
    this.total = this.itensCarrinho.reduce(
      (prev, curr) => prev + curr.preco * curr.quantidade,
      0
    );
  }
  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(
      (item) => item.id !== produtoId
    );
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }
  comprar() {
    swal({
      title: 'Compra finalizada!',
      icon: 'success',
    });
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }
}

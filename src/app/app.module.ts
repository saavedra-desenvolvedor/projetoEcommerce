
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ProdutosComponent,PaginaNaoEncontradaComponent ],
  imports: [BrowserModule,BrowserAnimationsModule, AppRoutingModule,FormsModule, MatSnackBarModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


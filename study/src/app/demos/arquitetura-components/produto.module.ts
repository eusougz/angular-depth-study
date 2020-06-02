import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto/produto-dashboard/produto-dashboard.component';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  declarations: [
    ProdutoDashboardComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule {}

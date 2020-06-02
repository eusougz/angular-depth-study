import { Routes, RouterModule } from "@angular/router";
import { ProdutoDashboardComponent } from './produto/produto-dashboard/produto-dashboard.component';
import { NgModule } from '@angular/core';

const produtoRouterConfig: Routes = [
  { path: '', component: ProdutoDashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(produtoRouterConfig)
  ],
  exports: [RouterModule]
})
export class ProdutoRoutingModule {}

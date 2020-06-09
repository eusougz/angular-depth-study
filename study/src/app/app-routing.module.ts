import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PipesTrainingComponent } from './pipes-training/pipes-training.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pipes-training', component: PipesTrainingComponent },
  { path: 'produtos',
        loadChildren: () => import('./demos/arquitetura-components/produto.module')
        .then(m => m.ProdutoModule) },
  { path: 'forms',
        loadChildren: () => import('./demos/formularios/formularios.module')
        .then(m => m.FormulariosModule)
  },
  { path: '', component: HomeComponent },
  { path: 'eusougz',
        loadChildren: () => import('./portfolio/portfolio.module')
        .then(m => m.PortfolioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

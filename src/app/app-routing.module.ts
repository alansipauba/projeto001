import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { PlanosComponent } from './planos/planos.component';
import { ContatoComponent } from './contato/contato.component';
import { GaleriaComponent } from './galeria/galeria.component';


const routes: Routes = [
  {path:'', component: ContentComponent},
  {path: 'planos', component: PlanosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'galeria', component: GaleriaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

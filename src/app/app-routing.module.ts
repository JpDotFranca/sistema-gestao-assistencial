import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultorComponent} from './componentes/consultor/consultor.component';


const routes: Routes = [
  { path: 'cadastro-consultor', component: ConsultorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

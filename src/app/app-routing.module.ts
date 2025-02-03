import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThinksComponent } from './component/thinks/create-thinks/create-thinks.component';
import { ListThinksComponent } from './component/thinks/list-thinks/list-thinks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-pensamento',
    pathMatch: 'full'
  },
  {
    path: 'criar-pensamento',
    component: CreateThinksComponent
  },
  {
    path: 'listar-pensamento',
    component: ListThinksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

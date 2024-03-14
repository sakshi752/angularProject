import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { ServiceComponent } from './MyComponents/service/service.component';
import { CustomPipesComponent } from './MyComponents/custom-pipes/custom-pipes.component';

const routes: Routes = [
  {path:'',component:TodosComponent},
  {path:'service',component:ServiceComponent},
  {path:'pipe',component:CustomPipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

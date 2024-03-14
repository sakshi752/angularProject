import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceComponent } from './MyComponents/service/service.component';
import { UserAuthService } from './Services/user-auth.service';
import { PowerPipe } from './CustomPipes/power.pipe';
import { CustomPipesComponent } from './MyComponents/custom-pipes/custom-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    ServiceComponent,
    PowerPipe,
    CustomPipesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule // Add FormsModule to the imports array
  ],
  providers: [UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TcCreateComponent } from './components/tc-create/tc-create.component';
import { TcEditComponent } from './components/tc-edit/tc-edit.component';
import { TcViewComponent } from './components/tc-view/tc-view.component';
import { TcListComponent } from './components/tc-list/tc-list.component';

const routes: Routes = [
  {path: 'tc-create', component: TcCreateComponent},
  {path: 'tc-edit/:id', component: TcEditComponent},
  {path: 'tc-view/:id', component: TcViewComponent},
  {path: 'tc-list', component: TcListComponent},
  {path: '', redirectTo: 'tc-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

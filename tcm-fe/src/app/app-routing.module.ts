import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TcCreateComponent } from './components/tc-create/tc-create.component';
import { TcEditComponent } from './components/tc-edit/tc-edit.component';
import { TcViewComponent } from './components/tc-view/tc-view.component';
import { TcListComponent } from './components/tc-list/tc-list.component';
import { TpCreateComponent } from './components/tp-create/tp-create.component';
import { TpEditComponent } from './components/tp-edit/tp-edit.component';
import { TpViewComponent } from './components/tp-view/tp-view.component';
import { TpListComponent } from './components/tp-list/tp-list.component';


const routes: Routes = [
  {path: 'tp-create', component: TpCreateComponent},
  {path: 'tp-edit/:id', component: TpEditComponent},
  {path: 'tp-view/:id', component: TpViewComponent},
  {path: 'tp-list', component: TpListComponent},
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

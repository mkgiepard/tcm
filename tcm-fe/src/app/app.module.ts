import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TcCreateComponent } from './components/tc-create/tc-create.component';
import { TcEditComponent } from './components/tc-edit/tc-edit.component';
import { TcViewComponent } from './components/tc-view/tc-view.component';
import { TcListComponent } from './components/tc-list/tc-list.component';

import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TcCreateComponent,
    TcEditComponent,
    TcViewComponent,
    TcListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

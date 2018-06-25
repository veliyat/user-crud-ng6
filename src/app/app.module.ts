import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { UserFormComponent } from './user-crud/user-form/user-form.component';
import { UserListComponent } from './user-crud/user-list/user-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { UserThumbComponent } from './user-crud/user-thumb/user-thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCrudComponent,
    UserFormComponent,
    UserListComponent,
    HeaderComponent,
    UserThumbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

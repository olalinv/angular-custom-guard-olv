import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './user.guard';

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

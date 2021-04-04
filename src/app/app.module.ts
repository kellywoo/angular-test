import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import {
  BComponent,
  AComponent,
  CComponent,
} from "./child.component";
import { HelloComponent } from "./hello.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BComponent,
    AComponent,
    CComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

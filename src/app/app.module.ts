import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleImportComponent } from './example-import/example-import.component';
import { NestedImportComponent } from './example-import/nested-import/nested-import.component';
import { ExampleRootComponent } from './example-root/example-root.component';
import { NestedRootComponent } from './example-root/nested-root/nested-root.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleImportComponent,
    NestedImportComponent,
    ExampleRootComponent,
    NestedRootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

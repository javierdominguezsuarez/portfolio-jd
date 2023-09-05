import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { DataModule } from '@data/data.module';
import { LayoutModule } from '@layout/layout.module';
import { ModulesModule } from '@modules/modules.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DataModule,
    LayoutModule,
    ModulesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

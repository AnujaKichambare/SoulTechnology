import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
     
      {path:'',component:MycomponentComponent},
      
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

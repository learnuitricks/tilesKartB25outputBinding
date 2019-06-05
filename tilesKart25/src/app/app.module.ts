import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { LoginComponent } from './login/login.component';
import { StatusPipe } from './status.pipe';
import { Status2Pipe } from './status2.pipe';
import { TileComponent } from './tile/tile.component';
import { StarComponent } from './shared/star/star.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TileDetailComponent } from './tiles/tile-detail/tile-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    LoginComponent,
    StatusPipe,
    Status2Pipe,
    TileComponent,
    StarComponent,
    WelcomeComponent,
    TileDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

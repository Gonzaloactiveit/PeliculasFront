import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RickComponent } from './rick/rick.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PersonajeComponent } from './personaje/personaje.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { EpisodioComponent } from './episodio/episodio.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { LocationComponent } from './location/location.component';
import { MatTreeModule } from '@angular/material/tree';
import { TreeChecklistExample } from './sidenav-tree/sidenav-tree';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    RickComponent,
    PersonajeComponent,
    EpisodioComponent,
    LocationComponent,
    TreeChecklistExample,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatChipsModule,
    MatTreeModule,
    MatCheckboxModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

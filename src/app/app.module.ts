import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }          from './app-routing.module';
import { AppComponent }              from './app.component';
import { EffectsModule }             from '@ngrx/effects';
import { StoreModule }               from '@ngrx/store';
import { EntityDataModule }          from '@ngrx/data';
import { entityConfig }              from './entity-metadata';
import { HttpClientModule }          from '@angular/common/http';
import { HomeComponent }             from './feature/components/home/home.component';
import { BsDropdownModule }          from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { ImpresumComponent }         from './feature/components/impresum/impresum.component';
import { LoadingComponent }          from './feature/shared/components/loading/loading.component';
import { AlertModule }               from 'ngx-bootstrap/alert';
import { AuthModule }                from './feature/auth/auth.module';
import { MatIconModule }             from '@angular/material/icon';
import { LayoutModule }              from '@angular/cdk/layout';
import { MobileMenueComponent }      from './feature/shared/components/mobile-menue/mobile-menue.component';
import { ProfileComponent }          from './feature/components/profile/profile.component';
import { CustomUrlGeneratorService } from './feature/components/social-group/share/store/custom-url-generator.service';
import { ReactiveFormsModule }  from '@angular/forms';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { DragAndDropDirective } from './feature/shared/directives/drag-and-drop.directive';
import { NgxDropzoneModule }         from 'ngx-dropzone';

@NgModule( {
  declarations: [
    AppComponent,
    HomeComponent,
    ImpresumComponent,
    ProfileComponent,
    DragAndDropDirective
  ],
  imports: [
    BrowserModule,
    NgxDropzoneModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot( [] ),
    StoreModule.forRoot( {}, {} ),
    EntityDataModule.forRoot( entityConfig ),
    BsDropdownModule,
    BrowserAnimationsModule,
    LoadingComponent,
    AuthModule,
    AlertModule,
    LayoutModule,
    MobileMenueComponent,
    ReactiveFormsModule,
    CdkDropList,
    CdkDrag
  ],
  providers: [ CustomUrlGeneratorService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {}

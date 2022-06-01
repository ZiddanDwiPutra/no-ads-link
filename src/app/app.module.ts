import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FirebaseService } from 'src/service/firebase.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { AppFooterComponent } from './shared/app-footer/app-footer.component';
import { AppNotFoundComponent } from './shared/app-not-found/app-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    AppLandingComponent,
    AppFooterComponent,
    AppNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

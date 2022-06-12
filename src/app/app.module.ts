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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './shared/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InstructionComponent } from './app-landing/shared/instruction/instruction.component';
import { WidgetInfoComponent } from './app-landing/shared/widget-info/widget-info.component';
import { SuggestionComponent } from './app-landing/shared/suggestion/suggestion.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    AppLandingComponent,
    AppFooterComponent,
    AppNotFoundComponent,
    HeaderComponent,
    AboutComponent,
    InstructionComponent,
    WidgetInfoComponent,
    SuggestionComponent
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
    MatStepperModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

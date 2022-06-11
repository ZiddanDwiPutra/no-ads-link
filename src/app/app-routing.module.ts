import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { AppNotFoundComponent } from './shared/app-not-found/app-not-found.component';

const routes: Routes = [
  {path: "", component: AppLandingComponent},
  {path: ":shortLink", component: AppLandingComponent},
  {path: "app/not-found", component: AppNotFoundComponent},
  {path: "app/about", component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

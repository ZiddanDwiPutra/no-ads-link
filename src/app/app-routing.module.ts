import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { AppNotFoundComponent } from './shared/app-not-found/app-not-found.component';

const routes: Routes = [
  {path: "", component: AppLandingComponent},
  {path: ":shortLink", component: AppLandingComponent},
  {path: ":shortLink/not-found", component: AppNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

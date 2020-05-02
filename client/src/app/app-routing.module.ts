import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodenamesPageComponent } from './codenames-page/codenames-page.component';


const routes: Routes = [
  { path: '', component: CodenamesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

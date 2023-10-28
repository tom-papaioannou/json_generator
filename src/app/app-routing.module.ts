import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorViewComponent } from './generator-view/generator-view.component';

const routes: Routes = [
  { path: 'generator-view', component: GeneratorViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
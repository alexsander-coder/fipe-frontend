import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FipeAnalysisComponent } from './pages/fipe-analysis/fipe-analysis.component';

const routes: Routes = [
  { path: '', component: FipeAnalysisComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurProcessComponent } from './components/our-process/our-process.component';

const routes: Routes = [
  { path: 'our-process', component: OurProcessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: false,
    anchorScrolling: 'enabled'
  }),],
  exports: [RouterModule]
})

export class AppRoutingModule { }
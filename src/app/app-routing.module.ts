import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
// import { ReportFormComponent } from './report-form/report-form.component';
// import { ReportConfirmationComponent } from './report-confirmation/report-confirmation.component';

const routes: Routes = [
  {path:'',redirectTo:'main', pathMatch: 'full'},
  {path:'main',component:MainPageComponent},
  // { path: 'missing-bag', component:ReportFormComponent  },
  // { path: 'confirm', component: ReportConfirmationComponent },
  {path:'**',redirectTo:'main'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ 
    enableTracing: true,    /* <-- Set this to true */
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

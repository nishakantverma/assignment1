import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { provideRouter, withDebugTracing } from '@angular/router';
// import { ReportFormComponent } from './app/report-form/report-form.component';
import { MainPageComponent } from './app/main-page/main-page.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    provideRouter(
      [
        {path:'',redirectTo:'main', pathMatch: 'full'},
        {path:'main',component:MainPageComponent},
        // { path: 'missing-bag', component:ReportFormComponent  },
       ], // first argument is your routes array
      withDebugTracing(), // second argument and beyond are router features to be enabled
    ),
  ],
})
  .catch(err => console.error(err));

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AjaxDatatableComponent } from './ajax-datatable/ajax-datatable.component';
import { RouterLinkComponent } from './json-datatable/json-datatable.component';
import { OptionsDatatableComponent } from './options-datatable/options-datatable.component';
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';

const routes: Routes = [
  { path: 'ajax', component: AjaxDatatableComponent },
  { path: 'json', component: RouterLinkComponent },
  { path: 'options', component: OptionsDatatableComponent },
  { path: 'basic', component: BasicDatatableComponent },
  { path: '', redirectTo: '/ajax', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AjaxDatatableComponent,
    RouterLinkComponent,
    OptionsDatatableComponent,
    BasicDatatableComponent
  ],
  providers: [],
})
export class AppModule { }

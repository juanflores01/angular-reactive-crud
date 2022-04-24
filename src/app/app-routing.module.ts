import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTableComponent } from './my-table/my-table.component';
import { MyFormComponent } from './my-form/my-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-table', pathMatch: 'full' },
  { path: 'my-form', component: MyFormComponent },
  { path: 'my-table', component: MyTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

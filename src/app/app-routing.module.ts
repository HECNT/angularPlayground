import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonCreateComponent } from './person-create/person-create.component';

const routes: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{
		path: 'inicio',
		component: AppComponent
	},
	{
		path: 'persons',
		component: PersonListComponent
	},
	{
		path: 'create-person',
		component: PersonCreateComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'post-detail/:id', component: PostDetailComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }

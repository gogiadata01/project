import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProdDetalsComponent } from './prod-detals/prod-detals.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


//Posts
import { PostsComponent } from './Post/posts/posts.component';
import { PostDetalsComponent } from './Post/post-detals/post-detals.component';

const routes: Routes = [

  {
    path:'Posts', 
    component:PostsComponent
  },
  {
    path:'post/:id', 
    component: PostDetalsComponent
  },

  {
    path: 'product', component: ProductComponent
  },

  {
    path: 'profile',
     component: UserComponent,
     canActivate:[AuthGuard]
  },

  {
    path: '', component: WelcomeComponent 
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'products/detals/:id', component: ProdDetalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

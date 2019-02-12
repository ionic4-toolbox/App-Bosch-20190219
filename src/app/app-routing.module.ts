import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesPageModule' },
  { path: 'products', loadChildren: './pages/products/products.module#ProductsPageModule' },
  { path: 'product-detail', loadChildren: './pages/product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'register-installation', loadChildren: './pages/register-installation/register-installation.module#RegisterInstallationPageModule' },
  { path: 'user-installations', loadChildren: './pages/user-installations/user-installations.module#UserInstallationsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

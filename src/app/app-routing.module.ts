import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';


const routes: Routes = [{
  path:'home',
  component:HomeComponent
},{
  path:'ecommerce',
  component:EcommerceComponent
}
,{
  path:'',
  component:HomeComponent
}
,{
  path:'**',
  component:HomeComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

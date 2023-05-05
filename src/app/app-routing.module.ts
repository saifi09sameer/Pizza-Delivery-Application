import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeedBackFormComponent } from './feed-back-form/feed-back-form.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './Guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AddNewFoodComponent } from './add-new-food/add-new-food.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewAllItemsComponent } from './view-all-items/view-all-items.component';
import { ViewOrdersDetailsComponent } from './view-orders-details/view-orders-details.component';
import { AdminGuard } from './Guards/admin.guard';
import { DeActivateGuard } from './Guards/de-activate.guard';
import { ViewAllUsersWithAmountComponent } from './view-all-users-with-amount/view-all-users-with-amount.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent,canDeactivate:[DeActivateGuard]},
  {path:'card',component:CardComponent,canActivate:[AuthGuard]},
  {path:'feedBack',component:FeedBackFormComponent},
  {path:'Admin',component:AdminComponent,canActivate:[AdminGuard]},
  {path:'view-details',component:ViewUsersComponent,canActivate:[AdminGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'details',component:DetailsComponent,canActivate:[AuthGuard]},
  {path:'view-orders-details',component:ViewOrdersDetailsComponent,canActivate:[AuthGuard]},
  {path:'addNewItem',component:AddNewFoodComponent,canActivate:[AdminGuard]},
  {path:'view-all-items',component:ViewAllItemsComponent,canActivate:[AdminGuard]},
  {path:'app-view-all-users-with-amount',component:ViewAllUsersWithAmountComponent,canActivate:[AdminGuard]},
  {path:'**', component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
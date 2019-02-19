import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserInstallationsDetailsPage } from './user-installations-details.page';

const routes: Routes = [
  {
    path: '',
    component: UserInstallationsDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserInstallationsDetailsPage]
})
export class UserInstallationsDetailsPageModule {}

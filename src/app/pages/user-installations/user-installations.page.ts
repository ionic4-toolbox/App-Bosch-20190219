import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInstallationsService } from './user-installations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-installations',
  templateUrl: './user-installations.page.html',
  styleUrls: ['./user-installations.page.scss'],
})
export class UserInstallationsPage implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  installations: any[];

  constructor(
    private userInstallationService: UserInstallationsService
  ) { }

  ngOnInit() {
    this.getUserInstallations();
  }

  async getUserInstallations() {
    await this.userInstallationService.getUserInstallations().then(res => res.subscribe(i => this.installations = i));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}

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

  getUserInstallations() {
    this.subscriptions.add(
      this.userInstallationService.getUserInstallations(44).subscribe((res: any) => {
        this.installations = res;
        console.log(res);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}

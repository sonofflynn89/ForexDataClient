import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PairAllocationInfoModalComponent } from '../pair-allocation-info-modal/pair-allocation-info-modal.component';
import { SubscriptionModalComponent } from '../subscription-modal/subscription-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  user_id;
  pairsFollowed = [];
  followedPairsLeft;
  subscription;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private api: ApiService, 
    private dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.user_id = params.get("user_id");

      this.api.getPairsFollowed(this.user_id).subscribe((pairs: string[]) => {
        this.pairsFollowed = pairs;
      });

      this.api.getFollowedPairsLeft(this.user_id).subscribe((followedPairsLeft: number) => {
        this.followedPairsLeft = followedPairsLeft;
        this.subscription = followedPairsLeft === -1 ? 'Premium' : 'Basic';
      });
    })
  }

  navigateFollowPairs() {
    this.router.navigate(['/follow-pairs', this.user_id]);
  }

  openEditSubscriptionDialog() {
    const dialogRef = this.dialog.open(SubscriptionModalComponent, { data: this.subscription });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== null && result !== this.subscription) {
        const body = { 
          user_id: this.user_id, 
          subscription_type: result
        };
        this.api.updateSubscription(body).subscribe(() => {
          this.subscription = result;
          this.followedPairsLeft = result === 'Premium' ? -1 : 5; 
        });
      }
    });
  }

  openPairAllocationDialog() {
    this.dialog.open(PairAllocationInfoModalComponent)
  }


}

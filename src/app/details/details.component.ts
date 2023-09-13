import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service';
import { UserDetails } from '../models/user-details';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  currentUser: UserDetails | undefined;
  constructor(private service: UsersService, private route: ActivatedRoute) {
    const id = this.route.snapshot.params['detailsId'];
    this.currentUser = this.service.usersDetails.find((user) => user.id === id);
    console.log('lala');
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  usersData: User[] = [];
  constructor(private userservie: UsersService) {
    this.usersData = this.userservie.usersData;
  }

  ngOnInit(): void {}
}

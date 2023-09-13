import { Injectable } from '@angular/core';
import userData from './user-list.json';
import details from './user-details.json';
import { User } from './models/user';
import { UserDetails } from './models/user-details';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersData: User[] = userData.users;
  usersDetails: UserDetails[] = details.userDetails;

  constructor() {}
}

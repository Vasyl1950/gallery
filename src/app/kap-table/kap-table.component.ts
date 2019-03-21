import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared1/users.service';

@Component({
  selector: 'app-kap-table',
  templateUrl: './kap-table.component.html',
  styleUrls: ['./kap-table.component.css'],
})

export class KapTableComponent implements OnInit {

 users: any[];

 public imgIndex: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    
  }

  public shownModal() {
    this.imgIndex = this.imgIndex;
  }
}



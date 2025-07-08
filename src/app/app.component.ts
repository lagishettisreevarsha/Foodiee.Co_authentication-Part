import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  user:any;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
  title = 'Foodiee.co';
  logout() {
    this.userService.logout();
    window.location.reload();
  }
}

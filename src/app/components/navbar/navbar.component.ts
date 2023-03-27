import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  private roles: string = "";
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    //this.isLoggedIn = true;
     if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles==('ROLE_ADMIN');
      this.showUserBoard = this.roles==('ROLE_USER');
 
      this.username = user.username;
     
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(["/login"]);
  }

}

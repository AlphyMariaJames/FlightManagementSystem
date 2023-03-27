import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-management-ui';
 
  isLoggedIn = false;
  roles: string = "";
  constructor(private tokenStorage: TokenStorageService, private router: Router) {  }
 
  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
  }
  showHeader(){
    if((this.router.url != '/login') && (this.router.url != '/signup')){
      return true;
    }else{
      return false;
    }
  }
   
}
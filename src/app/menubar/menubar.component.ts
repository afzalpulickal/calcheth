import { Component, OnInit } from '@angular/core';
import { NavigationService, routes } from '../services/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private navService: NavigationService,private router:Router) { }
  navigationService: any;
  ngOnInit() {
    
    this.navigationService = this.navService;
  }
  navigateTo(route:routes){
    this.router.navigate(['/'+ routes[route]]);
  }

}

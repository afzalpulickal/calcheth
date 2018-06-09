import { Component, OnInit } from '@angular/core';
import { NavigationService,routes } from '../services/navigation.service';

@Component({
  selector: 'app-mark-cards',
  templateUrl: './mark-cards.component.html',
  styleUrls: ['./mark-cards.component.scss']
})
export class MarkCardsComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navService.currentRoute = routes.markcards;
  }

}

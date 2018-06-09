import { Component, OnInit } from '@angular/core';
import { NavigationService,routes } from '../services/navigation.service';

@Component({
  selector: 'app-card-entry-status',
  templateUrl: './card-entry-status.component.html',
  styleUrls: ['./card-entry-status.component.scss']
})
export class CardEntryStatusComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navService.currentRoute = routes.subjectcardentrystatus;
  }

}

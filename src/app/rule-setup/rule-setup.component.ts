import { Component, OnInit } from '@angular/core';
import { NavigationService,routes } from '../services/navigation.service';

@Component({
  selector: 'app-rule-setup',
  templateUrl: './rule-setup.component.html',
  styleUrls: ['./rule-setup.component.scss']
})
export class RuleSetupComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navService.currentRoute = routes.rulesetup;
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigationService,routes } from '../services/navigation.service';

@Component({
  selector: 'app-copy-template',
  templateUrl: './copy-template.component.html',
  styleUrls: ['./copy-template.component.scss']
})
export class CopyTemplateComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navService.currentRoute = routes.copytemplate;
  }
}

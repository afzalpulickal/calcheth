import { Component, OnInit } from '@angular/core';
import { NavigationService,routes } from '../services/navigation.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navService.currentRoute = routes.curriculum;
  }

}

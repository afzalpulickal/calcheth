import { Component, OnInit } from '@angular/core';
import { NavigationService,routes } from '../services/navigation.service';

@Component({
  selector: 'app-external-exam',
  templateUrl: './external-exam.component.html',
  styleUrls: ['./external-exam.component.scss']
})
export class ExternalExamComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navService.currentRoute = routes.externalexamupload;
  }

}

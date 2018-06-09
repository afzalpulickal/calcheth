import { Component, OnInit } from '@angular/core';
import { NavigationService,routes } from '../services/navigation.service';

@Component({
  selector: 'app-mark-upload',
  templateUrl: './mark-upload.component.html',
  styleUrls: ['./mark-upload.component.scss']
})
export class MarkUploadComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navService.currentRoute = routes.markupload;
  }

}

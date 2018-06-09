import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import * as _ from "lodash";
import { NavigationService, routes } from '../services/navigation.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  years: any;
  selectedYear: number;
  selectedTerm: string;
  selectedSubject: string;
  selectedSection: string;
  selectedGrade: string;
  isComponentEmpty: boolean = true;
  showDialog: boolean = false;
  showDeleteConfirm: boolean = false;
  showEditConfirm: boolean = false;;
  data: any = {};
  components: Array<component> = [];
  constructor(private service: ApiService, private navService: NavigationService) { }
  selectedComponent: component = {};
  ngOnInit() {
    this.navService.currentRoute = routes.componentconfiguration;
    this.service.doGet('assets/data.json', (data) => {
      this.data = data;
      this.years = this.data.years;
    });
  }

  saveComponent() {
    if (this.selectedComponent.label) {
      if (this.selectedComponent.id) {
        // _.remove(this.components, o => o.id = this.selectedComponent.id);
        this.showDialog = false;
        this.showEditConfirm = true;
      } else {
        this.selectedComponent.id = Math.random().toString().split('.')[1];
        this.components.push(this.selectedComponent);
      }
      this.selectedComponent = {};
      this.showDialog = false;
    }
  }

  deleteComponent() {
    if (this.selectedComponent.id) {
      this.showDialog = false;
      this.showDeleteConfirm = true;
    }
  }

  editComponent(data: component) {
    this.selectedComponent = _.cloneDeep(data);
    this.showDialog = true;
  }

  addComponent() {
    this.selectedComponent = {};
    this.showDialog = true;
  }

  saveChanges() {
    let index = _.findIndex(this.components, o => o.id == this.selectedComponent.id);
    if (index != -1) {
      this.components[index] = this.selectedComponent;
    }
    this.selectedComponent = {};
    this.showEditConfirm = false;
  }
  cancelEdit() {
    this.showEditConfirm = false;
  }
  confirmDelete() {
    _.remove(this.components, o => o.id == this.selectedComponent.id);
    this.selectedComponent = {};
    this.showDeleteConfirm = false;
  }

  cancelDelete() {
    this.showDeleteConfirm = false;
  }
}

export interface component {
  id?: string;
  label?: string;
  description?: string;
  type?: string;
  assesmentGroup?: string;
  dataType?: string;
  maxScore?: number;
  passScore?: number;
  calcMetod?: string;
}

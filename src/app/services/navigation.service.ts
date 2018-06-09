import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  currentRoute: routes = 0;
  constructor() { }
}

export enum routes {
  curriculum = 0,
  markentry,
  rulesetup,
  componentconfiguration,
  copytemplate,
  markupload,
  viewreporcards,
  markcards,
  addreportcardterm,
  subjectcardentrystatus,
  externalexamupload
}

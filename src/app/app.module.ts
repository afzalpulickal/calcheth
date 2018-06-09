import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../app/services/api.service';
import { NavigationService } from '../app/services/navigation.service';
import { from } from 'rxjs';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { MarkEntryComponent } from './mark-entry/mark-entry.component';
import { RuleSetupComponent } from './rule-setup/rule-setup.component';
import { CopyTemplateComponent } from './copy-template/copy-template.component';
import { MarkUploadComponent } from './mark-upload/mark-upload.component';
import { ViewReportComponent } from './view-report/view-report.component';
import { MarkCardsComponent } from './mark-cards/mark-cards.component';
import { AddReportComponent } from './add-report/add-report.component';
import { CardEntryStatusComponent } from './card-entry-status/card-entry-status.component';
import { ExternalExamComponent } from './external-exam/external-exam.component';


const appRoutes: Routes = [
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'markentry', component: MarkEntryComponent },
  { path: 'rulesetup', component: RuleSetupComponent },
  { path: 'componentconfiguration', component: WorkspaceComponent },
  { path: 'copytemplate', component: CopyTemplateComponent },
  { path: 'markupload', component: MarkUploadComponent },
  { path: 'viewreporcards', component: ViewReportComponent },
  { path: 'markcards', component: MarkCardsComponent },
  { path: 'addreportcardterm', component: AddReportComponent },
  { path: 'subjectcardentrystatus', component: CardEntryStatusComponent },
  { path: 'externalexamupload', component: ExternalExamComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MenubarComponent,
    TopbarComponent,
    WorkspaceComponent,
    DialogComponent,
    CurriculumComponent,
    MarkEntryComponent,
    RuleSetupComponent,
    CopyTemplateComponent,
    MarkUploadComponent,
    ViewReportComponent,
    MarkCardsComponent,
    AddReportComponent,
    CardEntryStatusComponent,
    ExternalExamComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ), MatButtonModule, MatSelectModule, BrowserAnimationsModule, FormsModule, HttpClientModule
  ],
  providers: [ApiService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

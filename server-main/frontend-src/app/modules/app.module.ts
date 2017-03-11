import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { CollegeService } from '../services/college.service';
import { UndergradDegreeService } from '../services/undergraddegree.service';
import { DepartmentService } from '../services/department.service';
import { CourseService } from '../services/course.service';
import { PubSubEventService } from '../services/pubsubevent.service';
import { PersistenceService } from '../services/persistence.service';

import { AppComponent } from '../components/app.component';
import { LeftBarComponent } from '../components/app.leftbar';
import { RightBarComponent } from '../components/app.rightbar';
import { graphDisplayComponent } from '../components/app.graphDisplay';
import { NavComponent } from '../components/app.nav';
import { PageFooterComponent } from '../components/app.pageFooter';
import { ToolbarComponent } from '../components/app.toolbar';
import { courseCardComponent } from '../components/app.courseCard';
import { ModalComponent } from '../components/app.modal';
import { TabsComponent } from '../components/app.tabs';
import { CardContainerComponent } from '../components/app.cardContainer';
import { CourseDegreeModal } from '../components/app.courseDegreeModal'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        MaterialModule
    ],
    entryComponents: [
        CourseDegreeModal
    ],
    declarations: [
        AppComponent,
        LeftBarComponent,
        RightBarComponent,
        graphDisplayComponent,
        NavComponent,
        PageFooterComponent,
        ToolbarComponent,
        courseCardComponent,
        TabsComponent,
        CardContainerComponent,
        CourseDegreeModal
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        CollegeService,
        UndergradDegreeService,
        DepartmentService,
        CourseService,
        PubSubEventService,
        PersistenceService
    ]
})
export class AppModule {
}

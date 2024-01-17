import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AddCvButtonComponent } from './add-cv-button/add-cv-button.component';
import { TestSubInputComponent } from './test-sub-input/test-sub-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    AddCvButtonComponent,
    TestSubInputComponent
  ],
  imports: [
    BrowserModule,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

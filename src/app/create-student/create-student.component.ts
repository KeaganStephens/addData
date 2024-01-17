import { ViewChild, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc,collection} from 'firebase/firestore';
import {} from 'firebase/firestore'
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  name: string = '';
  email: string = '';
  contactNumber : string = ""
  educationList: EducationEntry[] = [ 
    {
      school: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: ''
    }
  ];
  experienceList: ExperienceEntry[] = [
    {
      title: '',
      employmentType: '',
      companyName: '',
      location: '',
      locationType: '',
      startDate: '',
      endDate: ''
    }
  ];
  certification: string = '';
  languageList: string[] = [""];
  certificationList: string[] = [""];
  database:any;

  constructor(public dataService: DataService) { }

addCvCollection( name: string, contactNumber: string, email: string, education: EducationEntry[], experience: ExperienceEntry[], certification: string[], languages: string[] ) {
  this.dataService.createCvCollection( name, contactNumber, email, education, experience, certification, languages );
  this.readCvCollection()

  // alert(name +" "+ email +" "+  contactNumber +" "+ education +" "+ experience +" "+ certification +" "+ languages)
  // // console.log(education)
  // // console.log(experience)
  // console.log(certification)
}

async readCvCollection() {
// console.log(this.dataService.getCvCollection())
  this.database= await this.dataService.getCvCollection();
}

addEducation() {
  console.log("working")
  // Initialize a new education entry
  const newEducation: EducationEntry = {
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: ''
  };

  // Add the new education entry to the list
  this.educationList.push(newEducation);
}

addExperience() {
  const newExperience: ExperienceEntry = {
    title: '',
    employmentType: '',
    companyName: '',
    location: '',
    locationType: '',
    startDate: '',
    endDate: ''
  };

  this.experienceList.push(newExperience);
}

addCertification() {
  this.certificationList.push("");
}

addLanguage() {
  // Add language to the list
  this.languageList.push('');
  console.log()
  // You might want to have a predefined list of languages to choose from
}

ngOnInit() {
  this.readCvCollection();
  console.log(this.database)
}


}

interface EducationEntry {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

interface ExperienceEntry {
  title: string;
  employmentType: string;
  companyName: string;
  location: string;
  locationType: string;
  startDate: string;
  endDate: string;
}
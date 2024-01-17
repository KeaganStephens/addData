import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) { }

 async createCvCollection(name: string, contactNumber: string, email: string, education: EducationEntry[], experience: ExperienceEntry[], certification: string[], languages: string[]) {
  const docRef = await addDoc(collection(this.firestore, 'CvCollection'), {
    name: name,
    contactNumber: contactNumber,
    email: email,
    education: education,
    experience: experience,
    certification: certification,
    languages: languages,
  });
  console.log("Document written with ID: ", docRef.id);
}

async getCvCollection() {
  return (
   await getDocs(query(collection(this.firestore, 'CvCollection')))
  ).docs.map((students) => students.data());
 }

}

// Define a type for the Education Entry
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

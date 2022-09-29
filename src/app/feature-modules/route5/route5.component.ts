import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss']
})
export class Route5Component implements OnInit {

  studentData: Array<StudentDataModel> = [];
  originalStudentData: Array<StudentDataModel> = [];
  headers: Array<string> = [];
  data: Array<Array<string>> = [];
  sortCount = 0;
  selectedHeader = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getStudentsData().subscribe((res) => {
      this.studentData =  Object.values(res);
      this.originalStudentData = [...this.studentData];
      this.headers = Object.keys(this.studentData[0]);
    });
  }

  sort(header: string) {
    this.selectedHeader = header;
    this.sortCount = this.sortCount === 0 ? 1 : this.sortCount === 1 ? -1 : 0;

    if (this.sortCount) {
      if (this.sortCount === 1) {
        this.ascSortOnHeaderBasis(header);
      } else {
        this.dscSortOnHeaderBasis(header);
      }
    } else {
      this.studentData = [...this.originalStudentData];
    }
  }

  ascSortOnHeaderBasis(header: string) {
    switch (header) {
      case 'Name':
      case 'Section':
        this.studentData.sort((a, b) => a[header].localeCompare(b[header]));
        break;
      case 'Class':
      case 'Sub1':
      case 'Sub2':
      case 'Sub3':
        this.studentData.sort((a, b) => a[header] - b[header]);
        break;
      default:
        break;
    }
  }

  dscSortOnHeaderBasis(header: string) {
    switch (header) {
      case 'Name':
      case 'Section':
        this.studentData.sort((a, b) => b[header].localeCompare(a[header]));
        break;
      case 'Class':
      case 'Sub1':
      case 'Sub2':
      case 'Sub3':
        this.studentData.sort((a, b) => b[header] - a[header]);
        break;
      default:
        break;
    }
  }
}

interface StudentDataModel {
  Name: string;
  Class: number;
  Section: string;
  Sub1: number;
  Sub2: number;
  Sub3: number;
}

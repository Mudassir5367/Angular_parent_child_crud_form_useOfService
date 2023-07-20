import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IForm } from '../Model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  userData: any[] = [];

  id: any;
  isEdit: boolean = false;
  status: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serviceService: ServiceService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe((params:any)=>{
    //   console.log('params: ', params);
    //   this.formData=(JSON.parse(params.fromTable))
    //   console.log('formDataaaa: ', this.formData);

    // });

    this.userData = JSON.parse(localStorage.getItem('users') || '[]');
  }

  // Template Form

  // Template Form

  formData: IForm = {
    id: 0,
    fname: '',
    lname: '',
  };

  vallidNumber: boolean = true;
  vallidFName: boolean = false;
  vallidLName: boolean = false;

  submit(data: any) {
    // console.log('dataaaa1122: ', data);

    // this.http.get('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe((test) => {
    //     console.log('Get: ', test);
    //   });

    // this.http
    //   .post('https://jsonplaceholder.typicode.com/posts', { value: '123' })
    //   .subscribe((test) => {
    //     console.log('Post: ', test);
    //   });

    // this.http.put('https://jsonplaceholder.typicode.com/posts',this.formData).subscribe(test => this.formData = test.id);

    // this.http.delete('https://jsonplaceholder.typicode.com/posts')
    //      .subscribe(() => this.status = 'Delete successful');

    // update/edit method
    if (this.isEdit) {
      this.userData = this.userData.map((Data: any, index: any) => {
        if (this.id == index) {
          Data = data;
        }
        return Data;
      });
      this.isEdit = false;
    } else {
      this.userData.push(data);
    }
    this.userData.push(data);
    const index = this.userData.findIndex((x) => x.id === data.id);
    if (index != -1) {
      this.userData.splice(index, 1);
    }
    // console.log('this.userData: ', this.userData);

    localStorage.setItem('users', JSON.stringify(this.userData));

    if (this.formData && this.formData.id) {
      this.vallidNumber = false;
    } else if (this.formData && this.formData.id && this.formData.id) {
      this.vallidNumber = true;
    }

    if (this.formData && this.formData.fname === '') {
      this.vallidFName = true;
    } else if (
      this.formData &&
      this.formData.fname &&
      this.formData.fname?.length > 0
    ) {
      this.vallidFName = false;
    }

    if (this.formData && this.formData.lname === '') {
      this.vallidLName = true;
    } else if (
      this.formData &&
      this.formData.lname &&
      this.formData.lname?.length > 0
    ) {
      this.vallidLName = false;
    }
    // params

    // this.router.navigate(['app-table'],{queryParams: {practice: JSON.stringify(this.formData)}});
  }

  update(value: any) {
    console.log('value: ', value);
    console.log(value.id);
    this.id = value.id;
    delete this.id;
    this.isEdit = true;
    this.formData = value;

  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IForm } from '../Model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Output() Item:EventEmitter<string> = new EventEmitter();
  @Input() values: any[] = [];
  storage: any;
  
  constructor(private router:Router,
   private activatedRout:ActivatedRoute,
    ) {}

  ngOnInit(): void {

    // params
    // this.activatedRout.queryParams.subscribe((params:any)=>{
    //   // console.log('params: ', params);
    //   this.values.push(JSON.parse(params.practice))
  
    // });


    // console.log(this.values,'child');

    // this.values = JSON.parse(localStorage.getItem('users') || '[]');
    // console.log(this.values, 'child');
  }

  ngOnChanges(){
    console.log("OK",this.values);
    
  }
  // onSubmit(data: any) {
  //   console.log('Parent:', data);
  //   this.arr.push(data);
  //   localStorage.setItem('users', JSON.stringify(this.arr));
  // }

  // add(user: any , index:any) {

  //   this.arr.push(index);
  // }

  edit(data: any, index: any) {
    // console.log(this.values[index]);
    // console.log(data);
     this.Item.emit({... data, id:index});
    // this.router.navigate(['app-form'],{queryParams:{fromTable:JSON.stringify(this.Item)}})
    
  }

  remove(element: any) {
    this.values.forEach((value, index) => {
      if (value == element) this.values.splice(index, 1);
    });

    if (this.storage === 'local') {
      localStorage.removeItem('users');
    }
    localStorage.setItem('users', JSON.stringify(this.values));
  }

  
 
}



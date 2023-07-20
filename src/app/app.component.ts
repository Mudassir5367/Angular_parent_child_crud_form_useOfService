import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IForm } from './Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  //Two Way Binding
  // Item="" //

  
  // IF Else Statement
  // age = 10;

  // For Loop
  // arr=[1,2,3,4,5]
  ngOnInit(){

    // this.data()
    // this.get()
  }

// IF Else Statement
  // data(){
  //   if(this.age && this.age>=20){
  //     console.log("This boy can ride bike");
      
  //   }
  //   else{
  //     console.log('This is not eligible');
      
  //   }
  // }


  // For Loop
  
//  get(){
//   for(let i=0; i<=4;i++){
//     console.log(this.arr[i]);
    
//   }
//  }


// forEach Loop
// get(){
//   this.arr.forEach(function(value){
//     console.log(value);
    
//   })
// }


// Some Array Method

// arr = [7,4,3]
// get(){
//   this.arr.push(8);
//   this.arr.splice(2,1);
//   this.arr.splice(2,0,15);
//   this.arr.unshift(12);

  // this.arr.map(myFunction);
  // function myFunction(num: number) {
  //   return num * 10;
  // }


//   this.arr.filter(checkAdult)
//   function checkAdult(age: number) {
//     return age >= 18;
//   }
//   console.log('arrrrrr: ', this.arr);
// }
  

// Reactive Form
// profileForm = new FormGroup({
//   firstName: new FormControl(''),
//   lastName: new FormControl(''),
//   address: new FormGroup({
//     street: new FormControl(''),
//     city: new FormControl(''),
//     state: new FormControl(''),
//     zip: new FormControl('')
//   })
// });

// onSubmit() {
//   console.warn(this.profileForm.value);
// }




// // Template Form

// formData:IForm ={
//   id:0,
//   fname:'',
//   lname:'',
// }

// vallidNumber:boolean=true;
// vallidFName:boolean=false;
// vallidLName:boolean=false;


// submit(data: any){
//   console.log('data: ', data);
// if(this.formData && this.formData.id){
// this.vallidNumber = false
// }
// else if(this.formData && this.formData.id && this.formData.id){
// this.vallidNumber= true;
// }

// if(this.formData && this.formData.fname===''){
//   this.vallidFName = true;
//   }
//   else if(this.formData && this.formData.fname && this.formData.fname?.length > 0){
//   this.vallidFName= false;
//   }


//   if(this.formData && this.formData.lname===''){
//     this.vallidLName = true;
//     }
//     else if(this.formData && this.formData.lname && this.formData.lname?.length > 0){
//     this.vallidLName= false;
//     }

// }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signup: FormGroup;
  step:number;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createform();
  }

  createform(){
    this.step=1;
    this.signup= this.fb.group({
      firstname: [null ,Validators.compose([Validators.required,Validators.maxLength(20),Validators.minLength(1),Validators.pattern(/^[A-Za-z]*$/)])],
      lastname: [null ,Validators.compose([Validators.required,Validators.maxLength(20),Validators.minLength(1),Validators.pattern(/^[A-Za-z]*$/)])],
      age: [null ,Validators.compose([Validators.required,Validators.pattern(/^[0-9]*$/)])],
      email: [null ,Validators.compose([Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      file: [null ,Validators.compose([Validators.required])],
    })
  }
  
  click(){
    console.log('cool')
  }

  onSubmit(){
    const fi = (<HTMLInputElement>document.getElementById('audio'))
    if(fi && fi.files.length>0){
      const fsize=(fi.files[0].size);
      const file = Math.round((fsize / 1024));
      console.log(fi.files[0]);
      if(file > 10000){
        this.snackbar.open('File size should be lessthan or equal to 10mb', 'error', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
        this.signup.patchValue({file:''})
        return false;
      }
    }
    const a =parseInt(this.signup.get('age').value);
    if(a <= 17 || a>130){
      this.snackbar.open('age year should be greater than 17 and lessthan 130', 'error', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
      this.signup.patchValue({age:'--'})
      return false;
    }
    else{
      this.snackbar.open('Successfully Sign UP', 'Success', {
        duration: 2000,
        verticalPosition: 'bottom'
      });
      this.step=2;
    }
  }

}

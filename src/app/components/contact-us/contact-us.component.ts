import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  customerform = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),

  })
  constructor() { }
  ngOnInit() {

  }

  onSubmit() {

    if (this.customerform.value.email !== "") {
      console.log(this.customerform.value)

      Swal.fire({
        title: "Sucess",
        text: "Thank you for Contacting us, We will surely Reach you ASAP",
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: 'rgb(153 28 62)',
      })
      
    }
  }
}


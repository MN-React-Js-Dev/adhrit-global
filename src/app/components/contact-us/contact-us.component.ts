import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  customerform = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    message: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email]),
  })


  get email() {
    return this.customerform.get('email')
  }
  constructor(private builder: FormBuilder, private contact: ContactService, private http: HttpClient) { }



  ngOnInit(): void { }
  onSubmit() {
    if (this.customerform.value.email !== "") {
      // console.log(this.customerform.value)
      // console.log(this.customerform, "customerform")
      Swal.fire({
        title: "Sucess", text: "Thank you for Contacting us, We will surely Reach you ASAP",
        icon: 'success',
        showCancelButton: false,
        showConfirmButton: false
        // confirmButtonText: 'OK',
        // confirmButtonColor: 'rgb(153 28 62)',
      })

      let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      const requestOptions = { headers: header };
      this.http.post("https://sheet.best/api/sheets/9013df88-6ea4-48dc-9bc2-3643fe4abe71", this.customerform.value, requestOptions).
        subscribe((res) => {
          console.log(res, "ddfdf")
        })

      // this.http.post("https://mailthis.to/codeninja", this.customerform.value).
      //   subscribe((res) => {
      //     console.log(res, "----")
      //   })
    }
  }
}


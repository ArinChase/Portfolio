import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup

  public showErrorMsg: boolean = false
  public showSuccessMsg: boolean = false
  
  constructor(private formBuilder: FormBuilder, private http:HttpClient) { 
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required]
    })
  }

  ngOnInit() { }

  submit = () => {
    if (this.contactForm.valid) {
      const form = this.contactForm.value
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
      this.http.post('https://formspree.io/f/xwkyvwpj',
        { name: form.name, replyto: form.email, message: form.message },
        { 'headers': headers }).subscribe(
          (response: any) => {
            if(response.ok == true) {
              this.showSuccessMsg = true
            } else this.showErrorMsg = true
          }
        )
    }
  }

}

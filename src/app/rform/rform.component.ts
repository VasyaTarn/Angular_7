import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent {
  form! : FormGroup;

  ngOnInit() : void {
    this.form = new FormGroup({
      userData : new FormGroup({
        name : new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
        email : new FormControl("", [Validators.required, Validators.email]),
        pNumber : new FormControl("+380", [Validators.maxLength(13), Validators.pattern(/^\+380\d{9}$/)])
      }),
      delivery : new FormGroup({
        country : new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
        city : new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
        postcode : new FormControl("", [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(5), Validators.minLength(5)])
      }),
      payment : new FormGroup({
        cardNumber : new FormControl("", [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(16), Validators.minLength(16)])
      })
    })
  } 

  onSubmit()
  {
    alert("Submit");
  }
}

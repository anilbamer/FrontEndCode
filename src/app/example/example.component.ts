import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface CountryStates {
  [key: string]: any[];
}

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  Validations!: FormGroup;
  submitted: boolean = false;
  countryStatesMap: CountryStates = {
    INDIA: ['Delhi', 'Mumbai', 'Kolkata'],
    US: ['New York', 'California', 'Texas']
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.Validations = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
      pincode: ['', [Validators.required,Validators.pattern('[0-9]{5}')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.Validations.invalid) {
      return;
    }

    console.log('Form submitted successfully.');
  }

  onCountryChange() {
    const selectedCountry = this.Validations.get('country')?.value as string; 
    if (selectedCountry && this.countryStatesMap[selectedCountry]) {
      const statesForCountry = this.countryStatesMap[selectedCountry] || [];
      this.Validations.get('state')?.setValue('');
    }
  }

  

getStatesForSelectedCountry(): string[] {
  const selectedCountry = this.Validations.get('country')?.value as string;
  return this.countryStatesMap[selectedCountry] || [];
}

}

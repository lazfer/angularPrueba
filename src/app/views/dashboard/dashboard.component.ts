import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;
  countries:[] = [];
  minDate:Date;
  maxDate:Date;
  constructor(private router: Router,
    private fb: FormBuilder,
    private countriesService: CountriesService) {
      this.countries = [];
     }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      pais: ['', [Validators.required]],
      fechaReserva: ['', [Validators.required]]
    });
    this.countriesService.getCountries().subscribe(
      res => { 
        this.countries = res;
      }
    )
    this.minDate = new Date();
    this.minDate.setMonth(this.minDate.getMonth() - 11);
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 1);
  }
  onSubmit(){
    console.log(this.form.value);
  }

}

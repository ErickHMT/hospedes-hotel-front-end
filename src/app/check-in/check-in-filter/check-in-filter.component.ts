import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-check-in-filter',
  templateUrl: './check-in-filter.component.html',
  styleUrls: ['./check-in-filter.component.sass']
})
export class CheckInFilterComponent implements OnInit {

  checkInFilter = this.fb.group({
    nome: [''],
    documento: [''],
    telefone: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}

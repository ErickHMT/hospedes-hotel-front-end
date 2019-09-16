import { HospedeService } from 'src/app/hospede/hospede.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-check-in-filter',
  templateUrl: './check-in-filter.component.html',
  styleUrls: ['./check-in-filter.component.sass']
})
export class CheckInFilterComponent implements OnInit {

  hospedes = [];

  checkInFilter = this.fb.group({
    nome: [''],
    documento: [''],
    telefone: [''],
    hospedePresente: [true]
  });

  constructor(private fb: FormBuilder,
              private hospedeService: HospedeService) { }

  ngOnInit() {
  }

  filter() {
    const form = this.checkInFilter.value;

    this.hospedeService.findByFiltro(form)
    .subscribe(data => {
      this.hospedes = data;
    });
  }

}

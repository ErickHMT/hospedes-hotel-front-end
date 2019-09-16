import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-check-in-list',
  templateUrl: './check-in-list.component.html',
  styleUrls: ['./check-in-list.component.sass']
})
export class CheckInListComponent implements OnInit {
  filtroCheckInForm = new FormGroup({
    hospedes: new FormControl(''),
    // hospedesPassados: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  filtarResultados() {
    console.warn('filtro: ', this.filtroCheckInForm.value.hospedes);
  }

}

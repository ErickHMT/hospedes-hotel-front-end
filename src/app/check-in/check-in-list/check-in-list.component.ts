import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { HospedeService } from 'src/app/hospede/hospede.service';

@Component({
  selector: 'app-check-in-list',
  templateUrl: './check-in-list.component.html',
  styleUrls: ['./check-in-list.component.sass']
})
export class CheckInListComponent implements OnInit, OnChanges {

  @Input() hospedesList: string[];
  hospedes = [];

  constructor(private hospedeService: HospedeService) { }

  ngOnInit() {
    // Inicialmente filtra por hóspedes presentes
    this.hospedeService.findByFiltro({hospedePresente: true})
    .subscribe(data => {
      this.hospedes = data;
    });
  }

  ngOnChanges() {
    this.hospedes = this.hospedesList;
  }
}

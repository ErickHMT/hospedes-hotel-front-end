import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { HospedeService } from '../hospede.service';
import { Observable } from 'rxjs';
import { Hospede } from '../hospede';

@Component({
  selector: 'app-hospede-list',
  templateUrl: './hospede-list.component.html',
  styleUrls: ['./hospede-list.component.sass']
})
export class HospedeListComponent implements OnInit {

  hospedes = [];
  @Input() events: Observable<void>;

  constructor(private hospedeService: HospedeService) { }

  ngOnInit() {
    this.findAllHospedes();

    this.events.subscribe(() => this.findAllHospedes());
  }

  findAllHospedes() {
    this.hospedeService.findAll().subscribe(data => {
      this.hospedes = data;
    });
  }

  deleteHospede(hospedeId: number) {
    this.hospedeService.delete(hospedeId).subscribe(data => {
      alert('Hospede deletado com sucesso!');
      this.hospedes = this.hospedes.filter(obj => obj.id !== hospedeId);
    });
  }
}

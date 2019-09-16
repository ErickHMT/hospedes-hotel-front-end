import { CheckInService } from './../check-in.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import { ModalService } from 'src/app/_modal';
import { ModalService } from 'src/app/_modal/modal.service';
import { Hospede } from 'src/app/hospede/hospede';
import { HospedeService } from './../../hospede/hospede.service';

@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.component.html',
  styleUrls: ['./check-in-form.component.sass']
})
export class CheckInFormComponent implements OnInit {

  @Output() testeTeste = new EventEmitter<string>();
  bodyText: string;
  submittedHospede = false;
  submitted = false;
  hospedes = [];
  hospedeSelecionado = null;

  checkInForm = this.fb.group({
    id: [''],
    dataEntrada: ['', Validators.required],
    dataSaida: [''],
    adicionalVeiculo: [''],
    hospede: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private modalService: ModalService,
              private router: Router,
              private hospedeService: HospedeService,
              private checkInService: CheckInService
    ) { }

  ngOnInit() {
  }

  get form() { return this.checkInForm.controls; }

  searchHospede(modalHospedeId: string) {
    this.submittedHospede = true;
    if (this.checkInForm.controls.hospede.invalid) {
      return;
    }

    const nomeHospede = this.checkInForm.value.hospede;

    // this.hospedeService.findAll().subscribe(data => {
    this.hospedeService.findByName(nomeHospede).subscribe(data => {
      this.hospedes = data;

      if (this.hospedes.length > 0) {
        this.modalService.open(modalHospedeId);
      } else {
        this.modalService.open('hospede-nao-cadastrado');
      }
    });
  }

  selecionarHospede(hospede: Hospede) {
    console.warn('id do hospede: ', hospede);
    this.hospedeSelecionado = hospede;
    this.closeModal('search-hospede-modal');
  }

  cancelarHospedeSelecionado() {
    this.hospedeSelecionado = null;
  }

  closeModal(idModal: string) {
    this.modalService.close(idModal);
  }

  cadastrarHospede(modalId: string) {
    const nomeHospede = this.checkInForm.value.hospede;

    this.modalService.close(modalId);
    this.testeTeste.emit(nomeHospede);
    this.router.navigateByUrl('/hospedes');
  }

  onSubmit() {
    this.submitted = true;

    if (this.hospedeSelecionado == null) {
      alert('Selecione um hospede!!');
      return;
    }
    if (this.checkInForm.invalid) {
      return;
    }

    let form = this.checkInForm.value;
    form.hospede = {};
    form.hospede.id = this.hospedeSelecionado.id;

    this.checkInService.salvar(form).subscribe(data => {
      alert('Check-in registrado com sucesso');
      this.router.navigateByUrl('/check-in');
    });
  }

}

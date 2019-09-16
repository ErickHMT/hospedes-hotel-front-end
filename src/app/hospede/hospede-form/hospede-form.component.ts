import { HospedeService } from './../hospede.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hospede-form',
  templateUrl: './hospede-form.component.html',
  styleUrls: ['./hospede-form.component.sass']
})
export class HospedeFormComponent implements OnInit {

  submitted = false;

  private atualizarHospedes: Subject<void> = new Subject<void>();

  hospedeForm = this.fb.group({
    id: [''],
    nome: ['', Validators.required],
    documento: ['', Validators.required],
    telefone: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private hospedeService: HospedeService) { }

  ngOnInit() {
  }

  get form() { return this.hospedeForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.hospedeForm.invalid) {
      return;
    }
    this.hospedeService.salvar(this.hospedeForm.value)
      .subscribe(hospede => {
        alert(`Hospede '${hospede.nome}' cadastrado com sucesso`);
        this.atualizarHospedes.next();
        this.resetForm();
    });
  }

  resetForm() {
    this.submitted = false;
    this.hospedeForm.reset();
  }
}

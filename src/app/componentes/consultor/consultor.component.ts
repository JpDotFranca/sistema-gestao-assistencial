import { Component, OnInit } from '@angular/core';
import { ConsultorService } from 'src/app/servicos/consultor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import EnumTipoConsultor from '../../modelos/enums/enum-tipo-consultor';
import UtilitariosEnum from '../../utilitarios/utilitarios-enum';

@Component({
    selector: 'consultor-component',
    templateUrl: 'consultor.component.html',
    styleUrls: ['consultor.component.sass']
})

export class ConsultorComponent implements OnInit {
    tiposConsultor = EnumTipoConsultor;
    formulario: FormGroup;

    constructor(
        private servicoConsultor: ConsultorService,
        private construtorFormulario: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.formulario = this.construtorFormulario.group({
            nome: ['', Validators.required]
        });
    }

    cadastrarConsultor() {

        var consultor = {};

        this.servicoConsultor
            .adicionarConsultor(consultor)
            .subscribe(
                retorno => {
                    console.log(retorno);
                },
                erro => {
                    console.error(erro);
                }
            );
    }

}
import { Pipe, PipeTransform } from "@angular/core";
import UtilitariosEnum from '../utilitarios/utilitarios-enum';

@Pipe({ name: 'enumParaOptions' })
export class FiltroEnumParaOptions implements PipeTransform {
    transform(valor): Object {
        return Object.keys(valor)
            .filter(v => !isNaN(+v))
            .map(opcao => {
                return {
                    id: +opcao,
                    nome: valor[opcao],
                    descricao: UtilitariosEnum.obterDescricao(valor, +opcao)
                }
            })
    }


}
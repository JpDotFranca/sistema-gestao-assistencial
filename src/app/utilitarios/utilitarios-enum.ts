import { Injectable } from '@angular/core';

@Injectable()
class UtilitariosEnum {
    static obterDescricao(e: any, id: number): string {
        return e[e[id].toString() + "_DESCRICAO"];
    }
}

export default UtilitariosEnum;

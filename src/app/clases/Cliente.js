export default class Cliente {
    constructor(nombre, impuesto){
        this._nombre = ()=> {
            return nombre;
        };

        this._impuesto = ()=> {
            return impuesto;
        };
    }

    get nombre(){
        return this._nombre();
    }

    set nombre(value){
        this._nombre = ()=>{
            return value;
        };
    }

    calcularImpuesto(){
        return (`El impuesto total es: ${(this._impuesto()._montoBrutoAnual() - this._impuesto()._deducciones()) * 0.21}`)
    }

}

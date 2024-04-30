export default class Impuesto {
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = ()=>{
            return montoBrutoAnual;
        };
        this._deducciones = ()=>{
            return deducciones;
        };

    }

    get montoBrutoAnual(){
        return this._montoBrutoAnual();
    }
    get deducciones(){
        return this._deducciones();
    }

    set montoBrutoAnual(value){
        this._montoBrutoAnual = ()=>{
            return value;
        }
    }
    set deducciones(value){
        return this._deducciones = ()=>{
            return value;
        }
    }
}

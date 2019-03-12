export class DestinoViaje{
    private selected: boolean;
    constructor(public nombre:string, public imagen:string){ }
    isSelected():boolean{
        return this.selected;
    }
    setSelected(s: boolean){
        this.selected = s; 
    }
}
export class DestinoViaje{
    private selected: boolean;
    public servicios: string[];
    constructor(public nombre:string, public imagen:string){
        this.servicios = ['pileta','desayuno','pisina'];
     }
    isSelected():boolean{
        return this.selected;
    }
    setSelected(s: boolean){
        this.selected = s; 
    }
}
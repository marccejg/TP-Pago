import { iPago } from "./iPago";
export class TarjetaDebito implements iPago {

    private entidad: string;
    private numeroDeTarjeta: number;
    private importe:number
  
    constructor(pNumeroDeTarjeta: number,pImporte:number) {
      this.entidad = "Visa";
      this.numeroDeTarjeta = pNumeroDeTarjeta;
      this.importe=pImporte

    }
    getNumeroDeTarjeta(){
        return this.numeroDeTarjeta

    }
    setNumeroDeTarjeta(pNumeroDeTarjeta:number):void{
         this.numeroDeTarjeta=pNumeroDeTarjeta

    }
    getImporte(){
        return this.importe
    }
    setImporte(pImporte:number):void{
        this.importe=pImporte;
    }
    procesarPago(): void {
      console.log(`La tarjeta de Debito numero ${this.numeroDeTarjeta} pertenece a la entidad ${this.entidad} realizo un pago de $ ${this.importe}`)
    }
  
    cancelarPago(): void {
      console.log("El pago ha sido cancelado")
    }
  
    generarRecibo(): void {
      console.log(`El pago de la tarjeta numero: ${this.numeroDeTarjeta} ha sido exitoso`)
    }
  
  }
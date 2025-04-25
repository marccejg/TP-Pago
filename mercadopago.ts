import { iPago } from "./iPago";
export class Mercadopago implements iPago {
    
    private entidad: string;
    private aliasTitular: string;
    private aliasDestino:string;
    private importe:number;
  
    constructor(pAliasTitular:string ,pAliasDestino: string, pImporte:number) {
      
      this.entidad = "MercadoPago";
      this.aliasTitular= pAliasTitular;
      this.aliasDestino = pAliasDestino;
      this.importe = pImporte
      
    }
  
    procesarPago(): void {
      console.log(`Transferir desde alias: ${this.aliasTitular}  a alias: ${this.aliasDestino} el importe de $${this.importe}`)
    }
  
    cancelarPago(): void {
      console.log("El pago ha sido cancelado")
    }
  
    generarRecibo(): void {
      console.log(`el pago a alias: ${this.aliasDestino} ha sido exitoso`)
    }
  
  }
import { TarjetaCredito } from "./tarjetaCredito";
import { TarjetaDebito } from "./tarjetaDebito";
import { Mercadopago } from "./mercadopago";
let pagoCredito1=new TarjetaCredito(452454124541512);
let pagoDebito1=new TarjetaDebito(500549451455845,5000);
let pagoMercadoPago=new Mercadopago("mouse.monitor","libro.lapiz", 150000);

pagoCredito1.procesarPago();
pagoCredito1.generarRecibo();
pagoCredito1.cancelarPago();
console.log("--------------")
pagoDebito1.procesarPago();
pagoDebito1.generarRecibo();
pagoDebito1.cancelarPago();
console.log("--------------")
pagoMercadoPago.procesarPago();
pagoMercadoPago.generarRecibo();
pagoMercadoPago.cancelarPago();
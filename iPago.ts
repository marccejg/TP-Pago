export interface iPago {
    procesarPago(): void;
    cancelarPago(): void;
    generarRecibo(): void;
  }
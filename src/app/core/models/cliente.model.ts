export class ClienteModel{

    constructor(
        
        public nombre: string,
        public telefono: string,
        public email: string,
        public tipoDocumento: string,
        public noDocumento: string,
        public estado?: boolean,
        public createdAt?: Date,
        public updatedAt?: Date,
        public direccion?: string,
    ){}

}
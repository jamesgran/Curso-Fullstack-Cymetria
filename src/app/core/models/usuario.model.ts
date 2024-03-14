export class UsuarioModel{

    constructor(
        
       public readonly _id :string,
       public nombre :string,
       public mail :string,
       public tipoDocumento :string,
       public noDocumento :number,
       public login :string,
       public password :string,
       public rol :string,
       public estado :boolean,
       public createdAt :Date,
    ){}

}
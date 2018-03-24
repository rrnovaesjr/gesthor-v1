
/**
 * A public model for clients.
 * 
 * @author rodrigo-novaes
 */
export class Cliente {

    public constructor(
        public id?: number, 
        public usuarioId?: string, 
        public nomeRazaoSocial?: string,
        public cpfOuCnpj?: string,
        public endereco?: string,
        public numero?: number,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public pais?: string,
        public cep?: string,
        public telefoneCelular?: string,
        public fax?: string,
        public telefoneComercial?: string,
        public email?: string,
        public descricao?: string
    ) {

    }


}

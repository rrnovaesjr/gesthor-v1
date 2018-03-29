import { Entity } from "../abstract/entity.model";

/**
 * A metamodel that represents a SQL row of a client's entity.
 * 
 * @author rodrigo-novaes
 */
export class _Cliente extends Entity<number> {

    /**
     * A static reference to this table name.
     */
    public static readonly TABLE_NAME: string = `cliente`;

    /**
     * A constructor that injects any of the client's attributes.
     * 
     * @param id 
     * @param usuario_id 
     * @param nome_razaosocial 
     * @param cpf_cnpj 
     * @param endereco 
     * @param numero 
     * @param bairro 
     * @param cidade 
     * @param estado 
     * @param pais 
     * @param cep 
     * @param telefone_comercial 
     * @param fax 
     * @param telefone_celular 
     * @param email 
     * @param descricao 
     */
    public constructor(
        id: number,
        public usuario_id: string,
        public nome_razaosocial: string,
        public cpf_cnpj?: string,
        public endereco?: string,
        public numero?: number,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public pais?: string,
        public cep?: string,
        public telefone_comercial?: string,
        public fax?: string,
        public telefone_celular?: string,
        public email?: string,
        public descricao?: string
    ) {
        super(_Cliente.TABLE_NAME, id);
    }

}
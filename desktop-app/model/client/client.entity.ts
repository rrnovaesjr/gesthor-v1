import { Entity } from "../abstract/entity";

/**
 * A metamodel that represents a SQL row of a client's entity.
 * 
 * @author rodrigo-novaes
 */
export class _Client extends Entity<number> {

    /**
     * A static reference to this table name.
     */
    public static readonly TABLE_NAME: string = `client`;

    /**
     * A constructor that injects any of the client's attributes.
     * 
     * @param id 
     * @param user_id 
     * @param name_socialname 
     * @param cpf_cnpj 
     * @param address 
     * @param number 
     * @param neighborhood 
     * @param city 
     * @param state_province 
     * @param country 
     * @param zip_code 
     * @param phone 
     * @param mobile_phone 
     * @param email 
     * @param notes 
     */
    public constructor(
        id: number,
        public user_id: string,
        public name_socialname: string,
        public cpf_cnpj?: string,
        public address?: string,
        public number?: number,
        public neighborhood?: string,
        public city?: string,
        public state_province?: string,
        public country?: string,
        public zip_code?: string,
        public phone?: string,
        public mobile_phone?: string,
        public email?: string,
        public notes?: string
    ) {
        super(id);
    }

}
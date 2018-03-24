import {RowDataPacket} from 'mysql';

/**
 * A metamodel that represents a SQL row of a client's entity.
 * 
 * @author rodrigo-novaes
 */
export interface _Cliente extends RowDataPacket {
    
    id?: number;

    usuario_id?: string;

    nome_razaosocial?: string;

    cpf_cnpj?: string;

    endereco?: string;

    numero?: number;

    bairro?: string;

    cidade?: string;

    estado?: string;

    pais?: string;

    cep?: string;

    telefone_comercial?: string;

    fax?: string;

    telefone_celular?: string;

    email?: string;

    descricao?: string;
}
import { Cliente, _Cliente } from '../../../commons/model/cliente';

/**
 * A mapper for the Client entity.
 */
class ClienteMapper {

    /**
     * Maps a client entity to a SQL row.
     * 
     * @param cliente A client instance.
     */
    public clientToSQL(cliente: Cliente): _Cliente {
        return {
            constructor: null,
            id: cliente.id,
            usuario_id: cliente.usuarioId,
            bairro: cliente.bairro,
            cep: cliente.cep,
            cidade: cliente.cidade,
            cpf_cnpj: cliente.cpfOuCnpj,
            descricao: cliente.descricao,
            email: cliente.email,
            endereco: cliente.endereco,
            estado: cliente.estado,
            fax: cliente.fax,
            nome_razaosocial: cliente.nomeRazaoSocial,
            numero: cliente.numero,
            pais: cliente.pais,
            telefone_celular: cliente.telefoneCelular,
            telefone_comercial: cliente.telefoneComercial
        };
    }

    /**
     * Maps a SQL row to a client instance.
     * 
     * @param cliente A client's SQL row.
     */
    public sQLToClient(cliente: _Cliente): Cliente {
        return new Cliente(
            cliente.id,
            cliente.usuario_id,
            cliente.nome_razaosocial,
            cliente.cpf_cnpj,
            cliente.endereco,
            cliente.numero,
            cliente.bairro,
            cliente.cidade,
            cliente.estado,
            cliente.pais,
            cliente.cep,
            cliente.telefone_celular,
            cliente.fax,
            cliente.telefone_comercial,
            cliente.email,
            cliente.descricao
        );
    }

    /**
     * Transform multiples SQL rows into clients.
     * 
     * @param clientes Clients as SQL rows.
     */
    public manySQLToClients(clientes: _Cliente[]): Cliente[] {
        let result: Cliente[] = [];
        for(let cliente of clientes) {
            result.push(this.sQLToClient(cliente));
        }
        return result;
    }

}

/**
 * Exports a singleton instance for the client's entity mapper.
 * 
 * @author rodrigo-novaes
 */
export const clienteMapper: ClienteMapper = new ClienteMapper();
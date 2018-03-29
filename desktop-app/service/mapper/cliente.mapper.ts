import { SQLMapper } from './mapper.interface';
import { Cliente, _Cliente } from '../../model/cliente';
import { OkPacket } from 'mysql';

/**
 * A mapper for the Client entity.
 */
class ClienteMapper implements SQLMapper<Cliente, _Cliente> {

    /**
     * Maps a client entity to a SQL row.
     * 
     * @param cliente A client instance.
     */
    public entityToSQL(cliente: Cliente): _Cliente {
        return {
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
    public sQLToEntity(cliente: OkPacket): Cliente {
        const _metamodelCliente: _Cliente = Object.assign<_Cliente, OkPacket>({}, cliente);
        return new Cliente(
            _metamodelCliente.id,
            _metamodelCliente.usuario_id,
            _metamodelCliente.nome_razaosocial,
            _metamodelCliente.cpf_cnpj,
            _metamodelCliente.endereco,
            _metamodelCliente.numero,
            _metamodelCliente.bairro,
            _metamodelCliente.cidade,
            _metamodelCliente.estado,
            _metamodelCliente.pais,
            _metamodelCliente.cep,
            _metamodelCliente.telefone_celular,
            _metamodelCliente.fax,
            _metamodelCliente.telefone_comercial,
            _metamodelCliente.email,
            _metamodelCliente.descricao
        );
    }

    /**
     * Transform multiples SQL rows into clients.
     * 
     * @param clientes Clients as SQL rows.
     */
    public manySQLToEntities(clientes: OkPacket[]): Cliente[] {
        let result: Cliente[] = [];
        for(let cliente of clientes) {
            result.push(this.sQLToEntity(cliente));
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
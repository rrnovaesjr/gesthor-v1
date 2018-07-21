import { SQLMapper } from './mapper.interface';
import { Client, _Client } from '../../model/client';
import { OkPacket } from 'mysql';

/**
 * A mapper for the Client entity.
 */
class ClientMapper implements SQLMapper<Client, _Client> {

    /**
     * Maps a client entity to a SQL row.
     * 
     * @param client A client instance.
     */
    public entityToSQL(client: Client): _Client {
        return {
            id: client.id,
            user_id: client.userId,
            neighborhood: client.neighborhood,
            zip_code: client.zipCode,
            city: client.city,
            cpf_cnpj: client.cpfCnpj,
            notes: client.notes,
            email: client.email,
            address: client.address,
            state_province: client.stateProvince,
            name_socialname: client.nameSocialName,
            number: client.number,
            country: client.country,
            mobile_phone: client.mobilePhone,
            phone: client.phone
        };
    }

    /**
     * Maps a SQL row to a client instance.
     * 
     * @param cliente A client's SQL row.
     */
    public sQLToEntity(client: any): Client {
        const _metamodelClient: _Client = Object.assign({}, client);
        return new Client(
            _metamodelClient.id,
            _metamodelClient.user_id,
            _metamodelClient.name_socialname,
            _metamodelClient.cpf_cnpj,
            _metamodelClient.address,
            _metamodelClient.number,
            _metamodelClient.neighborhood,
            _metamodelClient.city,
            _metamodelClient.state_province,
            _metamodelClient.country,
            _metamodelClient.zip_code,
            _metamodelClient.mobile_phone,
            _metamodelClient.phone,
            _metamodelClient.email,
            _metamodelClient.notes
        );
    }

    /**
     * Transform multiples SQL rows into clients.
     * 
     * @param clientes Clients as SQL rows.
     */
    public manySQLToEntities(clients: OkPacket[]): Client[] {
        let result: Client[] = [];
        for(let client of clients) {
            result.push(this.sQLToEntity(client));
        }
        return result;
    }

}

/**
 * Exports a singleton instance for the client's entity mapper.
 * 
 * @author rodrigo-novaes
 */
export const clientMapper: ClientMapper = new ClientMapper();
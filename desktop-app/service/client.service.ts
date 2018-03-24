import { RestAPIService } from './rest-service.interface';
import { clientRepository } from '../repository/cliente.repository';

class ClientService implements RestAPIService {

    /**
     * Maps all GET functions for clients.
     */
    get = [
        {
            url: '/client',
            callback: (req, res, next) => {
                clientRepository.findAll();
            }
        }
    ];
}

/**
 * A singleton object that implements all of client's services.
 * 
 * @author rodrigo-novaes
 */
export const clientService: ClientService = new ClientService();
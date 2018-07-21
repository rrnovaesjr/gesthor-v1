
/**
 * A public model for clients.
 * 
 * @author rodrigo-novaes
 */
export class Client {

    public constructor(
        public id?: number, 
        public userId?: string, 
        public nameSocialName?: string,
        public cpfCnpj?: string,
        public address?: string,
        public number?: number,
        public neighborhood?: string,
        public city?: string,
        public stateProvince?: string,
        public country?: string,
        public zipCode?: string,
        public phone?: string,
        public mobilePhone?: string,
        public email?: string,
        public notes?: string
    ) {

    }


}

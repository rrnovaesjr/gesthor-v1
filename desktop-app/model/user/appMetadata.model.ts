import { Constants } from "../../service/util/constants";

/**
 * A class to define app's metadata for the application.
 * 
 * @author rodrigo-novaes
 */
export class AppMetadata {

    /**
     * Defines the user's role in the application.
     */
    public userRole: string;

    /**
     * Instantiates a new AppMetadata.
     * 
     * @param userRole The user's role.
     */
    constructor(userRole?: string) {
        if(userRole) {
            this.userRole = userRole;
        } else {
            this.userRole = Constants.ROLE_USER;
        }
    }

}
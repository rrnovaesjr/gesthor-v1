import { Auth0UserProfile, Auth0Identity } from 'auth0-js';
import { Role } from '../role/role.model';

/**
 * An interface to store user's 
 */
export interface UserMetadata {

    organizationName?: string;
}

/**
 * An interface to define the application metadata associated to each User.
 * 
 * @author rodrigo-novaes
 */
export interface AppMetadata {

    /**
     * The user's roles.
     * 
     * Establishes which level of permissions an user has to access determined resource.
     */
    userRoles: string[];

    /**
     * The user's selected language.
     */
    language: string;

}

/**
 * Maps the User Model to an application entity.
 * 
 * @author rodrigo-novaes
 */
export class User implements Auth0UserProfile {

    /**
     * Creates an User instance.
     * 
     * @param sub The user's identifier.
     * @param name The user's name.
     * @param nickname The user's nickname.
     * @param picture The user's picture.
     * @param user_id The user's identifier.
     * @param identities The user's identities.
     * @param clientID The client's ID.
     * @param created_at A string representing the date when the user was created.
     * @param updated_at A string representing the date when the user was last updated.
     * @param username The username.
     * @param given_name The user's given name.
     * @param family_name The user's family name.
     * @param email The user's electronic address.
     * @param email_verified A flag that indicates wether the user's address was verified.
     * @param gender The user's gender.
     * @param locale The user's locale.
     * @param app_metadata A JSON with the constant-application metadata.
     * @param user_metadata A JSON with the user-assigned metadata.
     */
    public constructor(
        public sub: string,
        public name: string,
        public nickname: string,
        public picture: string,
        public user_id: string,
        public identities: Auth0Identity[],
        public clientID: string,
        public created_at: string,
        public updated_at: string,
        public locale: string,
        public app_metadata: AppMetadata = {
            userRoles: Role.default,
            language: locale
        },
        public user_metadata?: UserMetadata,
        public username?: string,
        public given_name?: string,
        public family_name?: string,
        public email?: string,
        public email_verified?: boolean,
        public gender?: string
    ) {

    }

}
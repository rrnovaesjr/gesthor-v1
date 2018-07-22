import { GesthorLogger } from "../util/logger";
import { Entity } from "../../model/abstract/entity";
import { AbstractLoggerService } from "../abstract.service";

export abstract class AbstractBusiness extends AbstractLoggerService {

    public constructor() {
        super();
    }

}
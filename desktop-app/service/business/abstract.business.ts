import { GesthorLogger } from "../util/logger";
import { Entity } from "../../model/abstract/entity";
import { AbstractService } from "../abstract.service";

export abstract class AbstractBusiness extends AbstractService {

    public constructor() {
        super();
    }

}
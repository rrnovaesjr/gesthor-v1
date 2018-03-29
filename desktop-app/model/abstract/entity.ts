
export abstract class Entity<PK> {

    public constructor(public id: number) {

    }
}

export abstract class UserAuditedEntity<PK, FK> extends Entity<PK> {

    public constructor(id: number, public usuario_id: string) {
        super(id);
    }
}
import { ConstantAttribute } from "../abstract/entity";

/**
 * A static representation of YES or NO.
 * 
 * This limitation guarantees that no other values, despite 'yes' or 'no' are
 * used when a single byte is expected.
 * 
 * @author rodrigo-novaes
 */
export class YesNoIndicator extends ConstantAttribute<{ code: 'Y' | 'N', label: 'adm.ynIndicator.yes' | 'adm.ynIndicator.no' }, string> {

    /**
     * Constant-static reference to the value YES.
     */
    public static readonly YES = new YesNoIndicator('Y', 'adm.ynIndicator.yes');

    /**
     * Constant-static reference to the value NO.
     */
    public static readonly NO = new YesNoIndicator('N', 'adm.ynIndicator.no');

    /**
     * The code value.
     */
    public readonly code: 'Y' | 'N';

    /**
     * The label value. This is used to return the i18n label of the value.
     */
    public readonly label: 'adm.ynIndicator.yes' | 'adm.ynIndicator.no';

    /**
     * Creates a new YES or NO indicator instance. Assigns both constant values to the
     * type's attributes.
     * 
     * @param code The persistent value.
     * @param label The label's value.
     */
    private constructor(code: 'Y' | 'N', label: 'adm.ynIndicator.yes' | 'adm.ynIndicator.no') {
        super();
        this.code = code;
        this.label = label;
    }

    /**
     * Allows to return the static values to the superclass.
     */
    public getValues(): YesNoIndicator[] {
        return new Array(YesNoIndicator.YES, YesNoIndicator.NO);
    }

    /**
     * Returns the value to be persisted in the database.
     */
    public getPersistentValue(): string {
        return this.code;
    }

    /**
     * Returns the static value according to the code received as a parameter.
     * 
     * @param code The YES or NO code, i.e., 'Y' | 'N'.
     */
    public static getByCode(code: 'Y' | 'N'): YesNoIndicator {
        if(code.localeCompare(YesNoIndicator.YES.code) == 0) {
            return YesNoIndicator.YES;
        }
        return YesNoIndicator.NO;
    }

};
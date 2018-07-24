import { ConstantPersistentAttribute } from "../abstract/entity";

/**
 * A static representation of YES or NO.
 * 
 * This limitation guarantees that no other values, despite 'yes' or 'no' are
 * used when a single byte is expected.
 * 
 * @author rodrigo-novaes
 */
export class YesNoIndicator implements ConstantPersistentAttribute<'Y' | 'N'> {

    /**
     * Constant-static reference to the value YES.
     */
    public static readonly YES = new YesNoIndicator('Y', 'adm.ynIndicator.yes', true);

    /**
     * Constant-static reference to the value NO.
     */
    public static readonly NO = new YesNoIndicator('N', 'adm.ynIndicator.no', false);

    /**
     * The code value.
     */
    public readonly code: 'Y' | 'N';

    /**
     * The label value. This is used to return the i18n label of the value.
     */
    public readonly label: 'adm.ynIndicator.yes' | 'adm.ynIndicator.no';

    /**
     * A boolean value, where true == 'Y' and false == 'N'.
     */
    public readonly booleanValue: boolean;

    /**
     * Creates a new YES or NO indicator instance. Assigns both constant values to the
     * type's attributes.
     * 
     * @param code The persistent value.
     * @param label The label's value.
     */
    private constructor(code: 'Y' | 'N', label: 'adm.ynIndicator.yes' | 'adm.ynIndicator.no', booleanValue: boolean) {
        this.code = code;
        this.label = label;
        this.booleanValue = booleanValue;
    }

    /**
     * Allows to return the static values to the superclass.
     */
    static get values(): YesNoIndicator[] {
        return new Array(YesNoIndicator.YES, YesNoIndicator.NO);
    }

    /**
     * Returns the value to be persisted in the database.
     */
    public get persistentValue(): 'Y' | 'N' {
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
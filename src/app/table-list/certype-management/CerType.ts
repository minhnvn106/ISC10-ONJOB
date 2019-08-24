export class CerType {

    constructor(id, name, field) {
        this.id = id;
        this.CerType_name = name;
        this.CerType_field = field;
    }

    static certypes: CerType[] = [];
    id: string;
    CerType_name: string;
    CerType_field: String;
}

export class Record {

    constructor(id, name, describe) {
        this.id = id;
        this.RecType_name = name;
        this.RecType_describe = describe;
    }

    static records: Record[] = [];
    id: string;
    RecType_name: string;
    RecType_describe: String;
}

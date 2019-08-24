export class Degree {

    constructor(id, name, describe) {
        this.Deg_id = id;
        this.Deg_name = name;
        this.Deg_describe = describe;
    }

    static degrees: Degree[] = [];
    Deg_id: string;
    Deg_name: string;
    Deg_describe: String;
}

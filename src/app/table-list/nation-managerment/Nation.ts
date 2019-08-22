export class Nation {
    nation_id: string;
    nation_name: string;
    nation_describe: String;

    static nations: Nation[] = [];

    constructor(id, name, describe) {
        this.nation_id = id;
        this.nation_name = name;
        this.nation_describe = describe;
    }

    

}

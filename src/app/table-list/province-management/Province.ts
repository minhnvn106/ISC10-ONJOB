export class Province {

    constructor(id, name, address) {
        this.id = id;
        this.Province_name = name;
        this.Province_address = address;
    }

    static provinces: Province[] = [];
    id: string;
    Province_name: string;
    Province_address: String;



}

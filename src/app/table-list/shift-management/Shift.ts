export class Shift {
    id: string;
    Shift_Type: string;
    Shift_Duration: String;

    static shifts: Shift[] = [];

    constructor(id, type, duration) {
        this.id = id;
        this.Shift_Type = type;
        this.Shift_Duration = duration;
    }
}

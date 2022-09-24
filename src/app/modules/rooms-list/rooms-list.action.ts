
export class SetRoom {
    static readonly type = '[RoomsList] Set current room';
    constructor(public room: string) { }
}
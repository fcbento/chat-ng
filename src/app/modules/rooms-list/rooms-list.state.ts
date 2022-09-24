import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SetRoom } from "./rooms-list.action";
import { RoomsStateModel } from "./rooms-list.model";

@State<RoomsStateModel>({
    name: 'room'
})

@Injectable()
export class RoomState {

    @Selector()
    static room(state: RoomsStateModel) {
        return state.room;
    }

    @Action(SetRoom)
    setRoom(ctx: StateContext<RoomsStateModel>, action: SetRoom) {
        ctx.patchState({ room: action.room })
    }

}

import {TOGGLE_DONE} from "../reducer/reducer";

export let onToggleDoneAction = (id) => ({
    type: TOGGLE_DONE,
    payload: id,
});
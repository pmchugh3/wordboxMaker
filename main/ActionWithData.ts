import {Action} from "redux";

interface ActionWithData extends Action {
    data: any;
}

export default ActionWithData;
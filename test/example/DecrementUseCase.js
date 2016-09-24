// LICENSE : MIT
"use strict";
import {UseCase} from "almin";
export default class DecrementUseCase extends UseCase {
    static get Events() {
        return {decrement: "decrement"};
    }

    execute() {
        this.dispatch({
            type: DecrementUseCase.Events.decrement
        });
    }
}
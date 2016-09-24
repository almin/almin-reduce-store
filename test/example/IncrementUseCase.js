// LICENSE : MIT
"use strict";
import {UseCase} from "almin";
export default class IncrementUseCase extends UseCase {
    static get Events() {
        return {increment: "increment"};
    }

    execute() {
        this.dispatch({
            type: IncrementUseCase.Events.increment
        });
    }
}
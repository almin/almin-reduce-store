// LICENSE : MIT
"use strict";
import {ReduceState} from "../../src/";
import IncrementUseCase from "./IncrementUseCase";
import DecrementUseCase from "./DecrementUseCase";
export default class ExampleState extends ReduceState {
    constructor({
        count = 0 // initial state
    } = {}) {
        super();
        this.count = count;
    }

    reduce(payload) {
        // when can handle payload, should return new state
        switch (payload.type) {
            case IncrementUseCase.Events.increment:
                return new ExampleState(Object.assign({}, this, {
                    count: this.count + 1
                }));
            case DecrementUseCase.Events.decrement:
                return new ExampleState(Object.assign({}, this, {
                    count: this.count - 1
                }));
            default: // when other payload, should return same state
                return this;
        }
    }
}
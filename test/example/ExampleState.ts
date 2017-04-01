// LICENSE : MIT
"use strict";
import { ReduceState } from "../../src/ReduceState";
import { Payload } from "almin";
import { IncrementUseCasePayload } from "./IncrementUseCase";
import { DecrementUseCasePayload } from "./DecrementUseCase";
export default class ExampleState extends ReduceState {
    count: number;

    constructor({
        count = 0 // initial state
    } = {}) {
        super();
        this.count = count;
    }

    reduce(payload: Payload | IncrementUseCasePayload | DecrementUseCasePayload): ExampleState {
        // when can handle payload, should return new state
        if (payload instanceof IncrementUseCasePayload) {
            return new ExampleState(Object.assign({}, this, {
                count: this.count + 1
            }));
        } else if (payload instanceof DecrementUseCasePayload) {
            return new ExampleState(Object.assign({}, this, {
                count: this.count - 1
            }));
        } else {
            return this;
        }
    }
}
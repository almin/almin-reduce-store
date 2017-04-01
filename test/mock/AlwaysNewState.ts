// LICENSE : MIT
"use strict";
import { ReduceState } from "../../src/";
/**
 * Always return new State
 */
export default class AlwaysNewState extends ReduceState {
    count: number;

    constructor({ count = 0 } = {}) {
        super();
        this.count = count;
    }

    reduce() {
        return new AlwaysNewState({
            count: this.count + 1
        });
    }
}
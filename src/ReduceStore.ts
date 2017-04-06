// LICENSE : MIT
"use strict";
const assert = require("assert");
import { Store, Payload } from "almin";
import { ReduceState } from "./ReduceState";
export class ReduceStore<T extends ReduceState> extends Store {
    state: T | null;

    constructor() {
        super();
        this.state = null;
        // Automatically handling onDispatch
        this.onDispatch(this._onDispatch.bind(this));
    }

    /**
     * set `newState` to this `store.state`.
     * If `newState` is the same with `tis.state`, don't set.
     * @param {ReduceState} newState
     */
    setState(newState: T): void {
        if (process.env.NODE_ENV !== "production") {
            assert(this.state !== null, "this.state is null, should be set to this.state in constructor.");
            assert(newState instanceof this.state!.constructor, `newState should be instanceof exist this.state.constructor.
newState: ${newState}
this.state.constructor: ${this.state!.constructor}
`);
        }
        if (this.state!.equals(newState)) {
            return;
        }
        this.state = newState;
        this.emitChange();
    }

    /**
     * Call `State#reduce` and setState
     * @param {Payload} payload
     * @private
     */
    private _onDispatch(payload: Payload): void {
        if (process.env.NODE_ENV !== "production") {
            assert(this.state !== null, "this.state is null, should be set to this.state in constructor.");
            assert(payload !== undefined, `payload is undefined: ${payload}`);
        }
        this.setState(this.state!.reduce<T>(payload));
    }
}

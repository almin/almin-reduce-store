// LICENSE : MIT
"use strict";
import {Store} from "almin";
export default class ReduceStore extends Store {
    constructor() {
        super();
        /**
         * @type {ReduceState}
         **/
        this.state = null;
        // Automatically handling onDispatch
        this.onDispatch(this._onDispatch.bind(this));
    }

    /**
     * set `newState` to this `store.state`.
     * If `newState` is the same with `tis.state`, don't set.
     * @param {ReduceState} newState
     */
    setState(newState) {
        if (this.state.equals(newState)) {
            return;
        }
        this.state = newState;
        this.emitChange();
    }

    /**
     * Call `State#reduce` and setState
     * @param {DispatcherPayload} payload
     * @private
     */
    _onDispatch(payload) {
        this.setState(this.state.reduce(payload));
    }
}

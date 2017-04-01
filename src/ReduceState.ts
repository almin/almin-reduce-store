// LICENSE : MIT
"use strict";
import { Payload } from "almin";
/**
 * ReduceState class is an abstraction class.
 * It provide redux like mechanism.
 * You should override `reduce(payload): ReduceState`.
 */
export class ReduceState {
    /**
     * Compare `this` properties and `targetState` properties
     * If all properties is matched, return true.
     * @param {ReduceState} targetState
     * @returns {boolean}
     */
    equals(targetState: this): boolean {
        if (this === targetState) {
            return true;
        }
        return Object.keys(this).every((key: keyof this) => {
            return this[key] === targetState[key];
        });
    }

    /**
     * It default `reduce` method.
     * The `reduce` method should be override by inherited state.
     * @param {Object} payload
     * @returns {ReduceState}
     */
    reduce(payload: Payload): ReduceState {
        switch (payload.type) {
            default:
                return this;
        }
    }
}

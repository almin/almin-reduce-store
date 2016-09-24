'use strict';
import assert from 'assert';
import ReduceState from '../src/ReduceState';

describe('ReduceState', () => {
    describe('#equals()', () => {
        context('when compare itself', () => {
            it('should return true', () => {
                class TestState extends ReduceState {
                    constructor() {
                        super();
                        this.foo = 'string';
                        this.bar = 0;
                    }
                }
                const testState = new TestState();
                assert(testState.equals(testState));
            });
        });
        context('when every property is equaled that are enumerable', () => {
            it('should return true', () => {
                class TestState extends ReduceState {
                    constructor() {
                        super();
                        this.foo = 'string';
                        this.bar = 0;
                        // non-enumerable property
                        Object.defineProperty(this, 'nonEnumerableProp', {
                            value: 'non-enumerable-prop',
                            writable: true,
                            enumerable: false
                        });
                    }
                }
                const testAState = new TestState();
                const testBState = new TestState();
                testBState.nonEnumerableProp = 'CHANGE_PROPERTY_VALUE';
                assert(testAState.equals(testBState));
            });
        });
        context('when the state has non-equal property', () => {
            it('should return false', () => {
                class TestState extends ReduceState {
                    constructor() {
                        super();
                        this.foo = 'string';
                        this.bar = 0;
                    }
                }
                const testAState = new TestState();
                const testBState = new TestState();
                // Change property
                testBState.foo = 'CHANGE_PROPERTY';
                assert(testAState.equals(testBState) === false);
            });
        });
    });
    describe('#reduce()', () => {
        context('when can not handle payload', () => {
            it('should return itself', () => {
                class TestState extends ReduceState {
                }
                const testState = new TestState();
                const newState = testState.reduce({type: "UNKNOWN"});
                assert(testState === newState);
            });
        });
        context('when can handle payload', () => {
            it('should return true', () => {
                class TestState extends ReduceState {
                    reduce(payload) {
                        switch (payload.type) {
                            case "A":
                                return new TestState();
                            default:
                                return this;
                        }
                    }
                }
                const state = new TestState();
                const newState = state.reduce({type: "A"});
                assert(state !== newState);
            });
        });
    });
});
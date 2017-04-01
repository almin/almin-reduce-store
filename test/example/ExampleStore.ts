// LICENSE : MIT
"use strict";
import ExampleState from "./ExampleState";
import { ReduceStore } from "../../src/";
export default class ExampleStore extends ReduceStore {
    state: ExampleState;

    constructor() {
        super();
        this.state = new ExampleState();
    }

    getState() {
        return {
            example: this.state
        };
    }
}
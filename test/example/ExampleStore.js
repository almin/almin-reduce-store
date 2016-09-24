// LICENSE : MIT
"use strict";
import {ReduceStore} from "../../src/";
import ExampleState from "./ExampleState";
export default class ExampleStore extends ReduceStore {
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
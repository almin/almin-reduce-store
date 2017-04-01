// LICENSE : MIT
"use strict";
const assert = require("assert");
import { ReduceStore } from "../src/";
import AlwaysNewState from "./mock/AlwaysNewState";
import { UseCase } from "almin";
describe("ReduceStore", () => {
    context("when change the state", () => {
        it("should call #onChange handler", (done) => {
            class TestUseCase extends UseCase {
                execute() {
                    this.dispatch({
                        type: "TestUseCase"
                    });
                }
            }
            class TestStore extends ReduceStore {
                state: AlwaysNewState;

                constructor() {
                    super();
                    this.state = new AlwaysNewState();
                }
            }
            const store = new TestStore();
            const useCase = new TestUseCase();
            useCase.pipe(store);
            // then
            store.onChange(() => {
                assert(store.state);
                done();
            });
            // when
            useCase.execute();
        });
    });
    context("when wrong setState", () => {
        it("should throw assertionError", () => {
            class TestStore extends ReduceStore {
                constructor() {
                    super();
                    this.state = new AlwaysNewState();
                }
            }
            const store = new TestStore();
            try {
                const invalidStateShape = {};
                store.setState(invalidStateShape as any);
                throw new Error("SHOULD NOT THROWN ERROR");
            } catch (error) {
                assert(error.name === "AssertionError");
            }
        });
    });
});
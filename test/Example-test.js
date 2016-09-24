// LICENSE : MIT
"use strict";
const assert = require("assert");
import IncrementUseCase from "./example/IncrementUseCase";
import DecrementUseCase from "./example/DecrementUseCase";
import ExampleStore from "./example/ExampleStore";
describe("Example", () => {
    context("when execute IncrementUseCase", () => {
        it("should count + 1", () => {
            const store = new ExampleStore();
            assert(store.getState().example.count === 0);
            const useCase = new IncrementUseCase();
            useCase.pipe(store);
            useCase.execute();
            assert(store.getState().example.count === 1);
        });
    });
    context("when execute DecrementUseCase", () => {
        it("should count - 1", () => {
            const store = new ExampleStore();
            assert(store.getState().example.count === 0);
            const useCase = new DecrementUseCase();
            useCase.pipe(store);
            useCase.execute();
            assert(store.getState().example.count === -1);
        });
    });
});
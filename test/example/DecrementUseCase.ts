// LICENSE : MIT
"use strict";
import { UseCase, Payload } from "almin";
export class DecrementUseCasePayload extends Payload {
    constructor() {
        super({ type: "decrement" });
    }
}
export default class DecrementUseCase extends UseCase {
    execute() {
        this.dispatch(new DecrementUseCasePayload());
    }
}
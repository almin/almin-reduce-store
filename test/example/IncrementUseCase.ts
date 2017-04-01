// LICENSE : MIT
"use strict";
import { UseCase, Payload } from "almin";
export class IncrementUseCasePayload extends Payload {
    constructor() {
        super({ type: "increment" });
    }
}
export default class IncrementUseCase extends UseCase {
    execute() {
        this.dispatch(new IncrementUseCasePayload());
    }
}
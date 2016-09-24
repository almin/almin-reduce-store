# almin-reduce-store [![Build Status](https://travis-ci.org/almin/almin-reduce-store.svg?branch=master)](https://travis-ci.org/almin/almin-reduce-store)

Almin's reduce store library.

It is similar with Facebook flux's [ReduceStore](http://facebook.github.io/flux/docs/flux-utils.html#reducestore-t "ReduceStore").

## Install

Install with [npm](https://www.npmjs.com/):

    npm install almin-reduce-store

## Usage

There are two components - `Store` and `State`.

`ExampleState`:

```js
"use strict";
import {ReduceState} from "almin-reduce-store";
import IncrementUseCase from "./IncrementUseCase";
import DecrementUseCase from "./DecrementUseCase";
export default class ExampleState extends ReduceState {
    constructor({
        count = 0 // initial state
    } = {}) {
        super();
        this.count = count;
    }

    reduce(payload) {
        // when can handle payload, should return new state
        switch (payload.type) {
            case IncrementUseCase.Events.increment:
                return new ExampleState(Object.assign({}, this, {
                    count: this.count + 1
                }));
            case DecrementUseCase.Events.decrement:
                return new ExampleState(Object.assign({}, this, {
                    count: this.count - 1
                }));
            default: // when other payload, should return same state
                return this;
        }
    }
}
```

`ReduceStore`:

```js
// LICENSE : MIT
"use strict";
import {ReduceStore} from "almin-reduce-store";
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
```

When execute [IncrementUseCase](./test/example/IncrementUseCase.js) and `ExampleStore#getState` return new State of `ExampleState`.

See [Example](./test/example) for details.

## Changelog

See [Releases page](https://github.com/almin/almin-reduce-store/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/almin/almin-reduce-store/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu

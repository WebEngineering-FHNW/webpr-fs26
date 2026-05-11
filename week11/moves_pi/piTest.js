import { TestSuite } from "../../src/kolibri/util/test.js";
import {pi}          from "./pi.js";

const suite = TestSuite("pi");

suite.add("nilakantha", assert => {
    assert.is(Math.abs(pi()-Math.PI) < 0.00001, true);
});

suite.run();

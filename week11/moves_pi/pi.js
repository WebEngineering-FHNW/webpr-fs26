import {ALL, Walk} from "../../src/kolibri/sequence/constructors/range/range.js";
import {Seq}       from "../../src/kolibri/sequence/constructors/seq/seq.js";
import {plusOp}   from "../../src/kolibri/sequence/util/helpers.js";
import {fst, snd} from "../../src/kolibri/lambda/church.js";

export { pi }

/*
    https://webengineering-fhnw.github.io/Kolibri/src/examples/sequence/CheatSheet.html
    Nilakantha Series,
    PI: 3. 1415926535 8979323846 2643383279

          4       4       4       4
    3 +  ---  -  ---  +  ---  -  ---     ...
        2*3*4   4*5*6   6*7*8   8*9*10
 */

/** @type { SequenceType<Number> } */
const plusMinus = Seq(1, -1).cycle();

/** @type { (pair:PairType<Number, Number>) => Number} */
const pairMultiply = pair => pair(fst) * pair(snd);

const pi = () => {
    const rest = Walk(2, ALL, 2)
        .map(n => 4 / (n * (n + 1) * (n + 2)))
        .zip(plusMinus)
        .map(pairMultiply)
        .take(29)
        .reduce$(plusOp, 0)
    ;
    return 3 + rest;
};

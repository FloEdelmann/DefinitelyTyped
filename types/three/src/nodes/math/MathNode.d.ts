import { Vector3 } from "../../math/Vector3.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import OperatorNode from "./OperatorNode.js";

export type MathNodeMethod1 =
    | typeof MathNode.RADIANS
    | typeof MathNode.DEGREES
    | typeof MathNode.EXP
    | typeof MathNode.EXP2
    | typeof MathNode.LOG
    | typeof MathNode.LOG2
    | typeof MathNode.SQRT
    | typeof MathNode.INVERSE_SQRT
    | typeof MathNode.FLOOR
    | typeof MathNode.CEIL
    | typeof MathNode.NORMALIZE
    | typeof MathNode.FRACT
    | typeof MathNode.SIN
    | typeof MathNode.COS
    | typeof MathNode.TAN
    | typeof MathNode.ASIN
    | typeof MathNode.ACOS
    | typeof MathNode.ATAN
    | typeof MathNode.ABS
    | typeof MathNode.SIGN
    | typeof MathNode.LENGTH
    | typeof MathNode.NEGATE
    | typeof MathNode.ONE_MINUS
    | typeof MathNode.DFDX
    | typeof MathNode.DFDY
    | typeof MathNode.ROUND
    | typeof MathNode.RECIPROCAL
    | typeof MathNode.TRUNC
    | typeof MathNode.FWIDTH
    | typeof MathNode.BITCAST
    | typeof MathNode.TRANSPOSE;

export type MathNodeMethod2 =
    | typeof MathNode.MIN
    | typeof MathNode.MAX
    | typeof MathNode.STEP
    | typeof MathNode.REFLECT
    | typeof MathNode.DISTANCE
    | typeof MathNode.DOT
    | typeof MathNode.CROSS
    | typeof MathNode.POW
    | typeof MathNode.TRANSFORM_DIRECTION;

export type MathNodeMethod3 =
    | typeof MathNode.MIX
    | typeof MathNode.CLAMP
    | typeof MathNode.REFRACT
    | typeof MathNode.SMOOTHSTEP
    | typeof MathNode.FACEFORWARD;

export type MathNodeMethod = MathNodeMethod1 | MathNodeMethod2 | MathNodeMethod3;

export default class MathNode extends TempNode {
    // 1 input

    static ALL: "all";
    static ANY: "any";
    static EQUALS: "equals";

    static RADIANS: "radians";
    static DEGREES: "degrees";
    static EXP: "exp";
    static EXP2: "exp2";
    static LOG: "log";
    static LOG2: "log2";
    static SQRT: "sqrt";
    static INVERSE_SQRT: "inversesqrt";
    static FLOOR: "floor";
    static CEIL: "ceil";
    static NORMALIZE: "normalize";
    static FRACT: "fract";
    static SIN: "sin";
    static COS: "cos";
    static TAN: "tan";
    static ASIN: "asin";
    static ACOS: "acos";
    static ATAN: "atan";
    static ABS: "abs";
    static SIGN: "sign";
    static LENGTH: "length";
    static NEGATE: "negate";
    static ONE_MINUS: "oneMinus";
    static DFDX: "dFdx";
    static DFDY: "dFdy";
    static ROUND: "round";
    static RECIPROCAL: "reciprocal";
    static TRUNC: "trunc";
    static FWIDTH: "fwidth";
    static BITCAST: "bitcast";
    static TRANSPOSE: "transpose";

    // 2 inputs

    static MIN: "min";
    static MAX: "max";
    static STEP: "step";
    static REFLECT: "reflect";
    static DISTANCE: "distance";
    static DOT: "dot";
    static CROSS: "cross";
    static POW: "pow";
    static TRANSFORM_DIRECTION: "transformDirection";

    // 3 inputs

    static MIX: "mix";
    static CLAMP: "clamp";
    static REFRACT: "refract";
    static SMOOTHSTEP: "smoothstep";
    static FACEFORWARD: "faceforward";

    method: MathNodeMethod;
    aNode: Node;
    bNode: Node | null;
    cNode: Node | null;

    readonly isMathNode: true;

    constructor(method: MathNodeMethod1, aNode: Node);
    constructor(method: MathNodeMethod2, aNode: Node, bNode: Node);
    constructor(method: MathNodeMethod3, aNode: Node, bNode: Node, cNode: Node);
}

export const EPSILON: ShaderNodeObject<Node>;
export const INFINITY: ShaderNodeObject<Node>;
export const PI: ShaderNodeObject<Node>;
export const PI2: ShaderNodeObject<Node>;

type MathNodeParameter = Node | number;

type Unary = (a: MathNodeParameter) => ShaderNodeObject<MathNode>;

export const all: Unary;
export const any: Unary;

/**
 * @deprecated "equals" is deprecated. Use "equal" inside a vector instead, like: "bvec*( equal( ... ) )"
 */
export const equals: Unary;

export const radians: Unary;
export const degrees: Unary;
export const exp: Unary;
export const exp2: Unary;
export const log: Unary;
export const log2: Unary;
export const sqrt: Unary;
export const inverseSqrt: Unary;
export const floor: Unary;
export const ceil: Unary;
export const normalize: (a: Node | Vector3) => ShaderNodeObject<MathNode>;
export const fract: Unary;
export const sin: Unary;
export const cos: Unary;
export const tan: Unary;
export const asin: Unary;
export const acos: Unary;
export const atan: (a: MathNodeParameter, b?: MathNodeParameter) => ShaderNodeObject<MathNode>;
export const abs: Unary;
export const sign: Unary;
export const length: Unary;
export const negate: Unary;
export const oneMinus: Unary;
export const dFdx: Unary;
export const dFdy: Unary;
export const round: Unary;
export const reciprocal: Unary;
export const trunc: Unary;
export const fwidth: Unary;
export const transpose: Unary;

type Binary = (a: MathNodeParameter, b: MathNodeParameter) => ShaderNodeObject<MathNode>;

export const bitcast: Binary;
export const min: (
    x: MathNodeParameter,
    y: MathNodeParameter,
    ...values: MathNodeParameter[]
) => ShaderNodeObject<MathNode>;
export const max: (
    x: MathNodeParameter,
    y: MathNodeParameter,
    ...values: MathNodeParameter[]
) => ShaderNodeObject<MathNode>;
export const step: Binary;
export const reflect: Binary;
export const distance: Binary;
export const difference: Binary;
export const dot: Binary;
export const cross: Binary;
export const pow: Binary;
export const pow2: Unary;
export const pow3: Unary;
export const pow4: Unary;
export const transformDirection: Binary;
export const cbrt: Unary;
export const lengthSq: Unary;

type Ternary = (a: MathNodeParameter, b: MathNodeParameter, c: MathNodeParameter) => ShaderNodeObject<MathNode>;

export const mix: Ternary;
export const clamp: (
    a: MathNodeParameter,
    b?: MathNodeParameter,
    c?: MathNodeParameter,
) => ShaderNodeObject<MathNode>;
export const saturate: Unary;
export const refract: Ternary;
export const smoothstep: Ternary;
export const faceForward: Ternary;

export const rand: (uv: MathNodeParameter) => ShaderNodeObject<OperatorNode>;

export const mixElement: Ternary;
export const smoothstepElement: Ternary;
export const stepElement: Binary;

/**
 * @deprecated
 */
export const atan2: Binary;

// GLSL alias function

export const faceforward: typeof faceForward;
export const inversesqrt: typeof inverseSqrt;

// Method chaining

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        all: typeof all;
        any: typeof any;
        equals: typeof equals;
        radians: typeof radians;
        degrees: typeof degrees;
        exp: typeof exp;
        exp2: typeof exp2;
        log: typeof log;
        log2: typeof log2;
        sqrt: typeof sqrt;
        inverseSqrt: typeof inverseSqrt;
        floor: typeof floor;
        ceil: typeof ceil;
        normalize: typeof normalize;
        fract: typeof fract;
        sin: typeof sin;
        cos: typeof cos;
        tan: typeof tan;
        asin: typeof asin;
        acos: typeof acos;
        atan: typeof atan;
        abs: typeof abs;
        sign: typeof sign;
        length: typeof length;
        lengthSq: typeof lengthSq;
        negate: typeof negate;
        oneMinus: typeof oneMinus;
        dFdx: typeof dFdx;
        dFdy: typeof dFdy;
        round: typeof round;
        reciprocal: typeof reciprocal;
        trunc: typeof trunc;
        fwidth: typeof fwidth;
        atan2: typeof atan2;
        min: typeof min;
        max: typeof max;
        step: typeof stepElement;
        reflect: typeof reflect;
        distance: typeof distance;
        dot: typeof dot;
        cross: typeof cross;
        pow: typeof pow;
        pow2: typeof pow2;
        pow3: typeof pow3;
        pow4: typeof pow4;
        transformDirection: typeof transformDirection;
        mix: typeof mixElement;
        clamp: typeof clamp;
        refract: typeof refract;
        smoothstep: typeof smoothstepElement;
        faceForward: typeof faceForward;
        difference: typeof difference;
        saturate: typeof saturate;
        cbrt: typeof cbrt;
        transpose: typeof transpose;
        rand: typeof rand;
    }
}

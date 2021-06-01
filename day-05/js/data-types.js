
export const dataTypes = {
    primitives: {
        string: 'i am a string',
        number: 1.5,
        boolean: true,
    },
    compound: {
        array: [0, 1, 2, 3, 4, 5, true, undefined, null, [{}]],
        object: {}
    },
    others: {
        null: null,
        undefined: undefined,
        NaN: NaN,
        Infinity: Infinity,
        BigInt: BigInt,
        map: Map,
        set: Set,
        symbol: Symbol
    },

}


export default 1;

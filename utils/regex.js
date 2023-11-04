export const clear = (inputArray) => {
    const result = inputArray.reduce((acc, item) => {
        const { left, right } = item;
        if (left === '' || right === '') return acc;
        // Check if the key (left) already exists in the accumulator object
        if (acc[left] !== undefined) {
            // If it exists, push the right value to the existing array
            acc[left].push(right);
        } else {
            // If it doesn't exist, create a new array with the right value
            acc[left] = [right];
        }

        return acc;
    }, {});
    return result;
};
export const checkGrammar = (grammar, symbol, string) => {
    if (!string && symbol === '') {
        return true;
    }

    if (!string || !symbol) {
        return false;
    }

    if (symbol[0] === string[0]) {
        return checkGrammar(grammar, symbol.slice(1), string.slice(1));
    }

    if (!grammar[symbol[0]]) {
        return false;
    }

    for (const rule of grammar[symbol[0]]) {
        if (checkGrammar(grammar, rule + symbol.slice(1), string)) {
            return true;
        }
    }

    return false;
};

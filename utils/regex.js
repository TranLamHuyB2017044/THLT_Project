export const clear = (inputArray) => {
    const result = inputArray.reduce((acc, item) => {
        const { left, right } = item;
        if (left === '' || right === '') return acc;
        // Check if the key (left) already exists in the accumulator object
        if (acc[left] !== undefined && !acc[left].includes(right)) {
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
export const checkGrammar = (
    grammar,
    symbol,
    string,
    path = [],
    depth = 1,
    curRule = '',
) => {
    console.log(
        '🚀 ~ file: regex.js:19 ~ checkGrammar ~ grammar, symbol, string:',
        {
            symbol,
            string,
        },
    );
    if (depth > 100) return false;
    if (!string && !symbol) {
        return true;
    }

    if (!string || !symbol) {
        return false;
    }

    if (symbol[0] === string[0]) {
        return checkGrammar(
            grammar,
            symbol.slice(1),
            string.slice(1),
            path,
            depth + 1,
            curRule,
        );
    }

    if (!grammar[symbol[0]]) {
        return false;
    }
    for (const rule of grammar[symbol[0]]) {
        if (!curRule) curRule = rule;
        let beforeChange = curRule;
        curRule = curRule.replace(symbol[0], rule);
        path.push(beforeChange + ' -> ' + curRule);
        if (
            checkGrammar(
                grammar,
                rule + symbol.slice(1),
                string,
                path,
                depth + 1,
                curRule,
            )
        ) {
            return true;
        }
        path.pop();
    }

    return false;
};

export const filterLowercase = (grammar) => {
    // Create a copy of the original grammar
    const filteredGrammar = { ...grammar };
    const result = [];
    // Iterate through the keys (non-terminal symbols) in the grammar
    for (const [key, value] of Object.entries(filteredGrammar)) {
        value.forEach((char) => {
            let listChar = char.split('');
            listChar.forEach((c) => {
                if (
                    (('a' <= c && c <= 'z') || ('0' <= c && c <= '9')) &&
                    !result.includes(c)
                ) {
                    result.push(c);
                }
            });
        });
    }

    return result;
};

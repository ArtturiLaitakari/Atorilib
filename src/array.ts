export class ArrayHelp {
    chunk(input, size) {
        return input.reduce((arr, item, idx) => {
            return idx % size === 0
                ? [...arr, [item]]
                : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
        }, []);
    };
    difference(a, b) {
        const arrays = a.concat(b)
        arrays.reduce((a, b) => a.filter(
            c => !b.includes(c))
        );
    }
    fromPairs(arr) {
        return arr.reduce(function (accumulator, value) {
            accumulator[value[0]] = value[1];
            return accumulator;
        }, {})
    }
    pull(arr, ...removeList) {
        var removeSet = new Set(removeList)
        return arr.filter(function (el) {
            return !removeSet.has(el)
        })
    }
    unionBy(...arrays) {
        const iteratee = (arrays).pop();

        if (Array.isArray(iteratee)) {
            return []; // return empty if iteratee is missing
        }

        return [...arrays].flat().filter(
            (set => (o) => set.has(iteratee(o)) ? false : set.add(iteratee(o)))(new Set()),
        );
    }
}
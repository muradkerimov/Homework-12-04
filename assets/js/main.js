function MyLastIndexOf(array, search_Value) {
    for (let i = array.length - 1; i >= 0; i--) {
        const value = array[i];

        if (value === search_Value) {
            return i;
        }
    }

    return false;
}

function MyIndexOf(array, search_Value) {
    for (let i = 0; i < array.length; i++) {
        const value = array[i];

        if (value === search_Value) {
            return i;
        }
    }

    return false;
}

function MyIncludes(array, search_Value) {
    let result = false;

    for (const item of array) {
        if (item == search_Value) {
            result = true;
            break;
        }
    }
    return result;
}

function MySome(array, callback) {
    let result = false;

    for (const item of array) {
        if (callback(item) == true) {
            result = true;
            break;
        }
    }
    return result;
}

function MyMap(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result[i] = callback(array[i], i);
    }

    return result;
}

function MyFilter(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        // let value = array[i];

        if (callback(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

function MyJoin(array, separator) {
    let result = '';
    for (const item of array) {
        result = result + item + separator
    }
    return result.substring(0, result.length - 3);
}


let MyArr1 = [11, 20, 41, 7, 15, 41, 21, 33];
let MyArr = ["Murad", "Hamlet", "Ferid", "Agha"];
// console.log(MyFilter(MyArr1, elem=>elem<35));
// console.log(MyJoin(MyArr, ',, '))
class CustomArray {
    constructor() {
        this.elements = arguments;
    }


    MyLastIndexOf(search_Value) {
        for (let i = this.length - 1; i >= 0; i--) {
            const value = this.elements[i];

            if (value === search_Value) {
                return i;
            }
        }

        return false;
    }

    MyIndexOf(search_Value) {
        for (let i = 0; i < this.length; i++) {
            const value = this.elements[i];

            if (value === search_Value) {
                return i;
            }
        }

        return false;
    }

    MyIncludes(search_Value) {
        let result = false;

        for (const item of this.elements) {
            if (item == search_Value) {
                result = true;
                break;
            }
        }
        return result;
    }

    MySome(callback) {
        let result = false;

        for (const item of this.elements) {
            if (callback(item) == true) {
                result = true;
            }
        }
        return result;
    }

    MyMap(callback) {
        const result = [];

        for (let i = 0; i < this.length; i++) {
            if (callback(this.elements[i])) {
                
                result[i] = callback(this.elements[i]);
            }
        }

        return result;
    }

    MyFilter(callback) {
        const result = [];

        for (let i = 0; i < this.length; i++) {
            // let value = array[i];

            if (callback(this.elements[i])) {
                result.push(this.elements[i]);
            }
        }

        return result;
    }

    MyJoin(separator) {
        let result = '';
        for (const item of this.elements) {
            result = result + item + separator
        }
        return result.substring(0, result.length - 3);
    }
}

let MyArr1 = new CustomArray(11, 20, 41, 7, 15, 41, 21, 33);
let MyArr2 = new CustomArray("Murad", "Hamlet", "Ferid", "Agha");
// console.log(MyArr1.MyIncludes(41));
// console.log(MyArr1.MySome(elem=>elem>5));
// console.log(MyArr2.MyJoin(',, '))
// console.log(MyArr1.MyMap(elem=>elem55));


class Math{
    sum(a, b){
        return a + b;
    }

    filterArray(arrParam){
        const filteredArray = arrParam.filter(function(elem, index, arr) {
            return arr.indexOf(elem) === index;
        })

        return filteredArray;
    }
}

module.exports = Math;
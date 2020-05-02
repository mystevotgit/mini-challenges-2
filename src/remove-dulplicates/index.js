function removeDuplicates(obj) {

    let keys = Object.keys(obj);
    let sorted = keys.sort((a, b) => a - b);
    let values = Object.values(obj);
    control = [];
    
    for (let i = values.length-1; i > -1; i--){
        
        let temp = [];
        let uniqArr = [...new Set(values[i])];
        values[i] = uniqArr;
        let len = values[i].length;
        for (let j = 0; j < len; j++){

            let validatestring = control.includes(values[i][j]);
            if (validatestring === false){
                temp.push(values[i][j]);
            }

        }

        values[i] = temp;
        for (let x = 0; x < temp.length; x++){
            control.push(temp[x]);
        }

    }
    
    let result = {};
    for (let i = 0; i < values.length; i++){
        result[sorted[i]] = values[i];
    }

    return result;
}

module.exports = removeDuplicates;

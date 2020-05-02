function isolateDuplicates(text) {
    if (typeof(text) != "string"){
        throw Error("Please enter a valid string");
    }

    let splittedString = text.split('');
    let frequency = 0;
    let insertions = 0;
    for (let i = 0; i < splittedString.length; i++){
        let letter1 = splittedString[i];
        const string1 = letter1.toLowerCase();
        let string2 = "";
        if (i === splittedString.length-1){
            string2 = ' ';
        }
        else{
            let letter2 = splittedString[i + 1];
            string2 = letter2.toLowerCase();
        }
        if (string1 === string2){
            frequency++;
            if (frequency == 2){
                splittedString.splice(i + 1, 0, '[');
                frequency++;
                i++;
                insertions++
            }
            
        } 
        else if (frequency > 2 ){
            if (string1 != string2){
                splittedString.splice(i + 1, 0, ']');
                i++;
                insertions++
                frequency = 0;
            }
        }
        else {
            frequency = 0;
        }
    }
    let result = [splittedString.join(''), insertions /2]
    return result;
}


module.exports = isolateDuplicates;

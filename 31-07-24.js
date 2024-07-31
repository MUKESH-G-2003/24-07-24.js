function isEqual() {
    let a = [1, 2, 3, 5];
    let b = [1, 2, 3, 5];

    if (a.length != b.length)
        return "False";
    else {
        for (let i = 0; i < a.length; i++)
            if (a[i] != b[i])
                return "False";
        return "True";
    }
}
let v = isEqual();

// console.log(v);

function getIntersection(set1, set2) { 
    const ans = new Set(); 
    for (let i of set2) { 
        if (set1.has(i)) { 
            ans.add(i); 
        } 
    } 
    return ans; 
} 
const set1 = new Set([1, 2, 3, 8, 11]); 
const set2 = new Set([1, 2, 5, 8]); 
  
const result = getIntersection(set1, set2); 
// console.log(result);

function Remove(){
    const array = [2, 5, 9];
    console.log(array);
    const index = array.indexOf(5);
    if (index > -1) {
    array.splice(index, 1); 
    }
    console.log(array); 
}
// Remove();

function LongestString() {
    var arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
    ];
    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
    }
    }
    console.log(longest);
}
// LongestString();

function Mapping() {
    const numbers = [65, 44, 12, 4];
    const newArr = numbers.map(myFunction)

    function myFunction(num) {
    return num * 10;
    }
    console.log(newArr);
}
// Mapping();
// Array creation and initialization

function arrCreation() {
    let arr = [5];
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    arr[3] = 4;
    arr[4] = 5;
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
// arrCreation();

// Array manipulation add, push, shift, remove, pop, shift

function ArrManipulation() {
    let arr = [1, 2, 3, 4, 5, 6];
    // arr.push(7);              //add element at last
    // arr.shift(2);             //delete first element
    // arr.pop();                //delete last element
    // arr.unshift(8);           //add at bigining
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

// ArrManipulation();

//array filtering based on condition

function ArrFiltering() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}

// ArrFiltering();

//Array Mapping

function ArrMapping() {
    let arr = [1, 2, 3, 4, 5, 6];

    let res = arr.map(function(x){
        return x * 2;
    });
    for (let i = 0; i < res.length; i++){
        console.log(res[i]);
    }
}

// ArrMapping();

//Array Sorting

function ArrSorting() {
    let arr = [8, 2, 3, 4, 5, 6, 7];
    arr.sort();
    arr.reverse();
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

// ArrSorting();
//concat()

function concat() {
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];

    const myChildren = myGirls.concat(myBoys);
}
// concat();

//slice()

function slice() {
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1, 3);
}

// slice();

/*
function discountPrices(prices, discount){
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < prices.length; i++){
        const discountedPrice = prices[i] * (1- discount);
        discounted.push(discountedPrice);
    }

    // console.log(i);
    console.log(length);

    return discounted;
}

console.log(discountPrices([100, 200, 300], 0.5));
*/
/*
let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(student["courseLoad"][0]);
*/
function modifyArray(array, callback){
    const newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr.push(callback(array[i]));
    }
    return newArr
}

function doSomething(num) {
    return num * 2;
}

console.log(modifyArray([1,2,3],doSomething));
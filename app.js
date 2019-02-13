//example 1 

let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('foo');
    }, 300);
});

promise1.then(function (value) {
    console.log(value);
    // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]



//example 2

let calculate = function (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 1);
        }, 0);
    });
};

calculate(1)
    .then(calculate)
    .then(result => result + 1)
    .then(calculate)
    .then(verify);

function verify(result) {
    expect(result).toBe(5);
    done();
};








//below is not working.  need to update still.


/*

function getWordOfTheDay() {
}

function tellFriend(){

}

let word = "Whatever!";

let response = "Yeah!";


getWordOfTheDay()
    .then((word) => {
        console.log(`The word of the day is ${word}.`);
        console.log('Sending to my friend.');
        return tellFriend(word);

    }).then((response) => {
        console.log('Friend responded:');
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });

    */
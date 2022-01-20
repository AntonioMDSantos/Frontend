const arr = ["fizz", "buzz", "foo", "", null, 2, 9, undefined];
console.log("".length == 0);

var correto = arr.filter(function(i) {
    return i;
});

console.log(correto);
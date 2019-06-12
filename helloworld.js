"use strict";
exports.__esModule = true;
var greeter_1 = require("./ts_lib/greeter");
//console.log("truthy falsy ===");
console.clear();
var a = "aa";
var b = undefined;
var oldbillAcc = { id: 1, name: "jason" };
var billAcc = { id: 2, name: "codders" };
var listBillAcc = [];
listBillAcc.push(oldbillAcc);
listBillAcc.push(billAcc);
var greeter = new greeter_1.Greeter("Greeter");
console.log(greeter.greet());
//remove rom end of array and assign it to a new variable
//let removedBillAcc: billingaccount = listBillAcc.pop();
//get element(s) of array
var slicedBillAcc = listBillAcc.slice(0, 1);
//delete element(s) from array
listBillAcc.splice(0, 1);
printList(slicedBillAcc);
printList(listBillAcc);
if (listBillAcc.length === 1) {
    console.log("listBillAcc.length === 1");
}
if (a) {
    //    console.log("a is true");
}
if (b) {
    //  console.log("b is true")
}
if (a === b) {
    //console.log("a === b")
}
function printList(billingAccounts) {
    billingAccounts.forEach(function (x) {
        console.log("id: " + x.id);
        console.log("name: " + x.name);
    });
}

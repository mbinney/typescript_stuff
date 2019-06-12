import { billingaccount } from "./ts_lib/billingaccount";
import { Greeter } from "./ts_lib/greeter";

//console.log("truthy falsy ===");
console.clear();    
let a: string = "aa";
let b: string = undefined;
let oldbillAcc: billingaccount = {id: 1, name: "jason"};
let billAcc: billingaccount = { id: 2, name: "codders"};

let listBillAcc: Array<billingaccount> = [];

listBillAcc.push(oldbillAcc);
listBillAcc.push(billAcc);


let greeter = new Greeter("Greeter");
console.log(greeter.greet());

//remove rom end of array and assign it to a new variable
//let removedBillAcc: billingaccount = listBillAcc.pop();

//get element(s) of array
let slicedBillAcc: Array<billingaccount> = listBillAcc.slice(0,1);

//delete element(s) from array
listBillAcc.splice(0,1)

printList(slicedBillAcc);

printList(listBillAcc);

if (listBillAcc.length === 1)
{
    console.log("listBillAcc.length === 1")
}

if(a)
{
//    console.log("a is true");
}

if (b)
{
  //  console.log("b is true")
}

if (a === b)
{
    //console.log("a === b")
}

function printList(billingAccounts: Array<billingaccount>)
{
    billingAccounts.forEach(x =>
    {
        console.log("id: " + x.id);
        console.log("name: " + x.name);
    });
}


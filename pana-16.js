let callFrens = ["Awais", "Shahnoor", "Samad"];
let notInTheCity = "Shahnoor";

function callFriends () {
    callFrens.forEach((name, i)=> {
        if (name === notInTheCity) {
            callFrens[i] = "Ayan";
            console.log(`Hi${name} i would like ot dinner wih you thats why i'm inviting you`)
        } else {
            console.log(`Hi${name} i would like to dinner with you thats why i'm inviting you`)
        }
    })
}

callFriends();
console.log("Hello Guy's i would like to do a bigger dinner with you");
callFrens.unshift("Ahmed");
callFrens.splice(2, 0, "Murtaza");
callFrens.push("Ibrahim");

callFriends()
console.log(callFriends);

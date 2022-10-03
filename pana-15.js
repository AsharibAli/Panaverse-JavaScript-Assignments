let invitedFrens = ["Awais", "Shahnoor", "Samad"];
let notInTheCity = "Awais";

invitedFrens.forEach((name, [i] ) `=> {
    if (name === notInTheCity) {
        invitedFrens[i] = "Ayan"`
        console.log(`Hi ${name} i would like to dinner with you thats why i'm inviting you`)
    } else {
        console.log(`Hi ${name} i would like to dinner with you thats why i'm inviting you`)
    }
});

console.log(invitedFrens);

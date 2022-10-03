var invitedFrens = ["Awais", "Shahnoor", "Samad"];
var notInTheCity = "Shahnoor"

function inviteFriends() {
    invitedFrens.forEach((name, i) => {
        if (name === notInTheCity) {
            invitedFrens[i] = "Ayan"
            console.log(`Hi ${name} i would like to dinner with you thats why i'm inviting you`)
        } else {
            console.log(`Hi ${name} i would like to dinner with you thats why i'm inviting you`)}
    })
}
inviteFriends()
console.log("Hello frens i would like to do a biger dinner");

invitedFrens.unshift("Ahmed");
invitedFrens.splice(2, 0, "Murtaza");
invitedFrens.push("Ibrahim");

inviteFriends()
console.log(invitedFrens);

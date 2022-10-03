var users = ["admin", "user2", "user3", "user4", "user5"];
    users.forEach((user) => {
        if (user === "admin") {
            console.log(`Hello ${user}, would you like to see a status report?`)
        } else {
            console.log(`Hello ${user}, thank you for logging in again`)}
    })
if (!users.length) {
    console.log(`We need to find some users!`)
};

let items = ["tomato", "cheese", "kabab"];
function getSummary(...items) {
    console.log("Summary: " + items.join(", "))
}

getSummary(...items);
getSummary(...items, "souce");
getSummary(...items, "souce", "chili");

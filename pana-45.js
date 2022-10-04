let items = ["tomato", "cheese", "kabab"];
function getCar(manufacturer, model, keywords, color, feature = "automatic",) {
    return {
        manufacturer,
        model,
        color,
        feature,
        keywords
    }
}

console.log(getCar("honda", 2022, ["black", "fast"], "black", "automatic"));

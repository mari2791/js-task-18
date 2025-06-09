let array = ["HeLLo","World", "APPLE"];

for (let item of array) {
    if (typeof item === "string") {
        console.log(item.toLowerCase());
    }
}

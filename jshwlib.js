function helloWorld()
{
    console.log("Hello, world!");
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = helloWorld;
}

"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express_graphql_1 = require("express-graphql");
//express initialization
var app = express_1["default"]();
//PORT
var PORT = 4000;
app.get("/", function (req, res) {
    res.send("Hello World!");
});
//graphql playground setup code
app.use("/graphql", express_graphql_1.graphqlHTTP({
    graphiql: true
}));
//localhost setup
app.listen(PORT, function () {
    console.log("Graphql server now up at port " + PORT);
});

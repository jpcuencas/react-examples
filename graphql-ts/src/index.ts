import express from "express";
import { graphqlHTTP } from "express-graphql";
//express initialization
const app = express();

//PORT
const PORT = 4000;

app.get("/", (req:any, res:any) => {
    res.send("Hello World!");
});

//graphql playground setup code
app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
    })
  );

//localhost setup
app.listen(PORT, () => {
  console.log("Graphql server now up at port " + PORT);
});
"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)(); // rutes

app.use('/', (req, res) => {
  res.json({
    page: 'Main Page'
  });
}); // middleware graphql

const schema = {}; //buildSchema();

app.use('/graphql', (0, _expressGraphql.graphqlHTTP)({
  graphiql: true,
  schema: schema
}));
app.listen(3000, () => console.log('Init server, port: 3000'));
//# sourceMappingURL=index.js.map
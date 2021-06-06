import express from 'express';
import { graphqlHTTP } from 'express-graphql'; 
import {buildSchema} from 'graphql';
import schema from './graphql/schema';
import { connect } from './database';
// arrancar server
const app = express();
//conectar con base de datos
connect();
// rutes
/**
app.use('/', (req, res) => {
    res.json({page:'Main Page'});
});
/**/
// middleware graphql
//const schema = {};//buildSchema();
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
})
);
//install types
//@types/express @types/express-graphql @types/graphql @types/node


app.listen(3000, () => console.log('Init server, port: 3000'));

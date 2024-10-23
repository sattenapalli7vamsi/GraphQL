const express  = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');

const app =express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
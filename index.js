const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
app.use( bodyParser.json() );

const route = require( './api/pauline' );
app.use( '/api/pauline', route );



const port = process.env.PORT || 3500;
app.listen( port, () => console.log( `Listening on port ${ port }` ) )
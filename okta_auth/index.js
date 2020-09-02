require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware')
const app = express();
const port = 3000;

// session support is required to use ExpressOIDC

app.use(session({
    secret: process.env.RANDOM_SECRET_WORD,
    resave: true,
    saveUninitialized: false
}));
const oidc = new ExpressOIDC({
    issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
    client_id: process.env.OKTA_CLIENT_ID,
    client_secret: process.env.OKTA_CLIENT_SECRET,
    redirect_uri: `${process.env.REDIRECT_URL}/authorization-code/callback`,
    scope: 'openid profile',
})




// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);
app.use(cors());
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send('<h1>WELCOM@!!</h1>');
});

app.get('/home', (req, res) => {
    res.send('<h1>Welcome!!</div><a href="/login">Login</a>');
});
app.get('/admin', (req, res) => {
    res.send('ADMIN PAGE')
})

app.listen(port, () => console.log(`my app listening on port ${port}!`))
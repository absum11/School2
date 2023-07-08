const express = require('express')
const helmet = require('helmet')
const { removeXPoweredBy } = require('./middlewares/headers.middleware')
const versionRouter = require('./routes')

const app = express()

// middlewares

// please refer https://docs.bearer.com/reference/rules/javascript_express_reduce_fingerprint/
/*
It can help to provide an extra layer of security to reduce server fingerprinting. Though not a security issue itself, a method to improve the overall posture of a web server is to take measures to reduce the ability to fingerprint the software being used on the server. Server software can be fingerprinted by quirks in how they respond to specific requests.

By default, Express.js sends the X-Powered-By response header banner. This can be disabled using the app.disable() method:
*/

app.use(removeXPoweredBy)
// please refer https://docs.bearer.com/reference/rules/javascript_express_helmet_missing/
// Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
app.use(helmet())
app.use('/', versionRouter)

module.exports = app

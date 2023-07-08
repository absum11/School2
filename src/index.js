require('dotenv').config()
const app = require('./app')

app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log(`Failed to listen at port : ${process.env.PORT}`)
		return
	}
	console.log(`server started listenig at port: ${process.env.PORT}`)
})

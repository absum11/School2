const { v4: uuidv4 } = require('uuid')

const addLogId = (req, res, next) => {
	res.locals = uuidv4()
	next()
}

module.exports = addLogId

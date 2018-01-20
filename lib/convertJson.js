'use strict'
const getFile = require('./s3/getFile')

// Convert a file from CSV format to JSON
module.exports = (event, context, callback) => {
  console.log('Received event: ', JSON.stringify(event, null, 2))
}

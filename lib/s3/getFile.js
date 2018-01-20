const aws = require('aws-sdk')
const s3 = new aws.s3({apiVersion: '2006-03-01'})

module.exports = function getFile(bucketName, fileName){
  const params = {
    Bucket: bucketName,
    Key: fileName,
  }
  return s3.getObject(params).promise()
}

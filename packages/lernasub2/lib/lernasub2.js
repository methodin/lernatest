'use strict';

const AWS = require('aws-sdk');
const s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-east-1'});

async function test() {
 console.log('dad');
 try {
  return await s3.listBuckets({}).promise();
 } catch (e) {
 }
}

module.exports = {
  test
};

'use strict';

const pack = require('@methodin/lernasub2');

async function work() {
  console.log('WORK');
  const response = await pack.test();
  console.dir(response);
}

module.exports = work;

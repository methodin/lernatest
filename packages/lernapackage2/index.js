const pack = require('lernapackage1');

async function work() {
  const response = await pack.test();
  console.dir(response);
}

work();

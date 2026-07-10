async function getStatusCode() {
  return 200;
}

async function runTest() {
  const statusCode = await getStatusCode();

  console.log(statusCode);
}

runTest();

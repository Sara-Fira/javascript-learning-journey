async function getToken() {
  return 'abc123';
}

async function runTest() {
  const token = await getToken();

  console.log(token !== '');
}

runTest();

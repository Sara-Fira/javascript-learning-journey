async function getLoginResult() {
  return 'success';
}

async function runTest() {
  const loginResult = await getLoginResult();

  console.log(loginResult === 'success');
}

runTest();

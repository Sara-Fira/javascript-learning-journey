async function getLoginResponse() {
  return {
    status: 200,
    body: {
      token: 'abc123'
    }
  };
}

async function runTest() {
  const response = await getLoginResponse();

  console.log(response.status === 200);
  console.log(response.body.token !== '');
}

runTest();

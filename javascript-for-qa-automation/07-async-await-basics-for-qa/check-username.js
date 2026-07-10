async function getUsername() {
  return 'standard_user';
}

async function runTest() {
  const username = await getUsername();

  console.log(username === 'standard_user');
}

runTest();

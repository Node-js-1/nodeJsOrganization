

// The wait Function

function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

 
// The performTask Async Function

async function performTask() {
  console.log('Task started...');
  await wait(2000); // Wait for 2 seconds
  console.log('Task completed after 2 seconds');
}

performTask();
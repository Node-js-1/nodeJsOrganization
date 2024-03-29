function wait(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}

async function performTask() {
  await wait(5000);
  console.log("my task run after 5 seconds");
}

performTask();

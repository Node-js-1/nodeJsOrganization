function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
      console.log(resolve);
    });
  }
  
  async function performTask() {
    console.log('Task started...');
    await wait(2000);
    console.log('Task completed after 2 seconds');
}
  
  performTask();
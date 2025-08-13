const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 1 resolved'), 500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Promise 2 rejected'), 200);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 3 resolved'), 1000);
});

Promise.race([promise1, promise2, promise3])
  .then(value => {
    console.log('Resolved:', value); // This will not be reached in this example
  })
  .catch(reason => {
    console.log('Rejected:', reason); // Output: Rejected: Promise 2 rejected
  });

// Task 3
function fetchWithTimeout(promise, timeout) {
    const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject('Timeout exceeded'), timeout)
  );
  
  return Promise.race([promise, timeoutPromise]);
}

function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve('Data fetched'), 3000));
}

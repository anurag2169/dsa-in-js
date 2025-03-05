const apiEndPoint = "https://jsonplaceholder.typicode.com/todos";

// Apporach One

fetch(apiEndPoint)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => {
    throw new Error("api Failed", err);
  });

//   Approach 2

async function getApiData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data; //it returns a Promise, not the actual data.
  } catch (error) {
    throw new Error("API Failed", error);
  }
}

// const apiData = getApiData(apiEndPoint);
// console.log(apiData);  //   calling it immediately returns a Promise, which is still in a pending state. --> Promise { <pending> }

// correct way to get data
let myArray = [];
getApiData(apiEndPoint)
  .then((data) => {
    myArray.push(...data);
    // console.log(myArray);
  })
  .catch((err) => {
    throw new Error("Data Loading failed", err);
  });

//   <-------------------------------Primise.all and promise.allSettled method with fecth------------------------------>

const todoList = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typi.com/todos/INvaild",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
];

const fetchTodoList = async (urls) => {
  try {
    //Fails everything if one fails (e.g., network error)
    // const responseList = await Promise.all(urls.map((url) => fetch(url)));

    // Continues fetching other APIs even if one fails
    const responseList = await Promise.allSettled(
      urls.map((url) => fetch(url))
    );
    // console.log(responseList);

    const dataList = await Promise.all(
      responseList.map(async (result) => {
        if (result.status === "fulfilled") {
          const response = result.value;

          //Always check response.ok before using .json().
          if (!response.ok) {
            console.error(
              `Failed to fetch: ${response.url}, Status: ${response.status}`
            );
            return null;
          }
          return response.json();
        } else {
          //   console.error("Fetch failed:", result.reason);
          return null; // Return null for network errors
        }
      })
    );

    console.log(dataList);
  } catch (error) {
    throw new Error("API FAILED in Promise All", error);
  }
};
fetchTodoList(todoList);

// Response from Promise.allSettled
// [
//     {
//       status: 'fulfilled',
//       value: Response {
//         [Symbol(realm)]: null,
//         [Symbol(state)]: [Object],
//         [Symbol(headers)]: [HeadersList]
//       }
//     },
//     {
//       status: 'fulfilled',
//       value: Response {
//         [Symbol(realm)]: null,
//         [Symbol(state)]: [Object],
//         [Symbol(headers)]: [HeadersList]
//       }
//     },
//     {
//       status: 'rejected',
//       reason: TypeError: fetch failed
//           at node:internal/deps/undici/undici:12618:11
//           at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
//           at async Promise.allSettled (index 2)
//           at async fetchTodoList (G:\dsa-js\interview-question\fetch.js:54:26) {
//         cause: [Error]
//       }
//     },
//     {
//       status: 'fulfilled',
//       value: Response {
//         [Symbol(realm)]: null,
//         [Symbol(state)]: [Object],
//         [Symbol(headers)]: [HeadersList]
//       }
//     },
//     {
//       status: 'fulfilled',
//       value: Response {
//         [Symbol(realm)]: null,
//         [Symbol(state)]: [Object],
//         [Symbol(headers)]: [HeadersList]
//       }
//     }
//   ]

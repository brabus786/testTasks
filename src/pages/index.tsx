"use client";

import HomeTemplate from "@/Templates/HomeTemplate";

const tasks = [
  {
    title: "Weather",
    description: "Test task/React (USENSE Company)",
    finishedAt: "2024-10-29",
    url: "/weather",
  },
  {
    title: "Star Wars",
    description: "Test task/React (STARNAVI)",
    finishedAt: "2024-11-08",
    url: "/star-wars",
  },
];

const executePromise = async () => {
  return await new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Success >>>");
    } else {
      reject("Failure <<<");
    }
  });
};

await executePromise()
  .then((v) => {
    console.log("Promise executed", v);
  })
  .catch((e) => {
    console.error("Promise failed", e);
  })
  .finally(() => {
    console.log("Promise settled");
  });

console.log("step 1");

[...Array(5)].forEach(async (_, i) => {
  if (i === 4) {
    console.log("last iteration", i);
  }
});

console.log("step 2");

const Home = () => {
  return <HomeTemplate tasks={tasks} />;
};

export default Home;

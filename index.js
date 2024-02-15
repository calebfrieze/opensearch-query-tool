import { runQuery } from "./lib";

function main() {
  runQuery("_search").then((data) => {
    console.log(JSON.stringify(data, null, 2));
  });
}

main();

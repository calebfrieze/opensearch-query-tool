import { runQuery } from "./lib";

const query = {
  query: {
    match_all: {},
  },
};

runQuery("_search", query).then((data) => {
  console.log(JSON.stringify(data, null, 2));
});

import { runQuery } from "./lib";
const query = {
  query: {
    match_all: {},
  },
};

runQuery("_delete_by_query", query).then((data) => {
  console.log(JSON.stringify(data, null, 2));
});

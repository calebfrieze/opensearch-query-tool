import { runQuery } from "./lib";

const query = {
  size: 100,
  query: {
    bool: {
      must: [
        {
          match: {
            state: "AZ",
          },
        },
        { match: { "is_visible": true}}
      ],
    },
  },
};
runQuery("_search", query).then((data) => {
  console.log(JSON.stringify(data, null, 2));
});

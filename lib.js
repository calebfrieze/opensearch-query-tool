const btoa = require("btoa");
const username = process.env.AWS_OPENSEARCH_USERNAME;
const password = process.env.AWS_OPENSEARCH_PASSWORD;
const headers = new Headers();
headers.append("Authorization", "Basic " + btoa(username + ":" + password));
headers.append("Content-Type", "application/json");
const url = (path) =>
  `${process.env.SEARCH_INDEX_URL}/${process.env.SEARCH_INDEX_NAME}-${process.env.SEARCH_INDEX_STAGE}/${path}`;

// Run open search query and return results
export async function runQuery(path, query) {
  const response = await fetch(url(path), {
    method: "POST",
    headers: headers,
    body: JSON.stringify(query),
  });
  return response.json();
}

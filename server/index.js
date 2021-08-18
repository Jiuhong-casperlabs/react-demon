const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const { CasperServiceByJsonRPC } = require("casper-js-sdk");
const client = new CasperServiceByJsonRPC("http://3.136.227.9:7777/rpc");

app.get("/", async (req, res) => {
  // A known deploy hash in base16.
  const _DEPLOY_HASH =
    "6c4048f8ebd40a160e9df47e73680eda8ae8430309a9566655bb357a5967276b";

  client.getDeployInfo(_DEPLOY_HASH).then((result) => {
    console.log(result);
    res.status(200).json(result);
  });

  //   res.status(200).json(result);
});

app.listen(9000, () => console.log("running on port 9000..."));

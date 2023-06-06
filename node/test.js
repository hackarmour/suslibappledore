import { AppleDoreClient } from "./index.js";

const client = new AppleDoreClient({ host: "localhost", port: 6379 });
await client.connect(() => {
  console.log("Connected to Redis");
});

const setKeyResponse = await client.sendCommand(
  "set",
  "mykey",
  JSON.stringify({
    message: "segs",
  })
);

const pingResponse = await client.sendCommand("ping");

const getKeyResponse = await client.sendCommand("get", "mykey");

const echoResponse = await client.sendCommand("echo", "hello world");

const deleteKeyResponse = await client.sendCommand("del", "mykey");
console.log({
  set: setKeyResponse,
  ping: pingResponse,
  get: JSON.parse(getKeyResponse),
  echo: echoResponse,
  del: deleteKeyResponse,
});

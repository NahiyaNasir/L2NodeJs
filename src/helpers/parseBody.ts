
import { IncomingMessage } from "http";

async function parseBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // convert buffer to string
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err: any) {
        reject(err);
      }
    });

    req.on("error", reject);
  });
}

export default parseBody;



//? | Step               | Meaning                 |
//? | ------------------ | ----------------------- |
//? | `req.on("data")`   | Read request chunks     |
//? | `req.on("end")`    | All chunks received     |
//? | `JSON.parse(body)` | Convert string → object |
//? | `resolve()`        | Return parsed data      |
//? | `reject()`         | If JSON is invalid      |

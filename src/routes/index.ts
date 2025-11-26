import { readUsers, writeUsers } from "../helpers/fillDb";
import parseBody from "../helpers/parseBody";
import addRoutes from "../helpers/RouteHandler";
import sendJson from "../helpers/sendJson";

addRoutes("GET", "/", (req, res) => {
  sendJson(res, 200, {
    message: "Hello from node js with typescript...",
    path: req.url,
  });
});

addRoutes("GET", "/api", (req, res) => {
  sendJson(res, 200, {
    message: "Health status ok",
    path: req.url,
  });
});

addRoutes("POST", "/api/users", async (req, res) => {
  const body = await parseBody(req);

  // user json read
  const users = readUsers();

  const newUser = {
    ...body,
  };

  users?.push(newUser);

  writeUsers(users);

  sendJson(res, 201, { success: true, data: body });
});

addRoutes("PUT", "/api/users/:id", async (req, res) => {
  const { id } = (req as any).params;
  const body = await parseBody(req);

  const users = readUsers();

  const index = users.findIndex((user: any) => user.id == id);

  if (index === -1) {
    sendJson(res, 404, {
      success: false,
      message: "user not found",
    });
  }

  users[index] = {
    ...users[index],
    ...body,
  };

  writeUsers(users);

  sendJson(res, 202, {
    success: true,
    message: `id ${id} user updated`,
    data: users[index],
  });
});

addRoutes("DELETE", "/api/users/:id", async (req, res) => {
  const { id } = (req as any).params;

  const users = readUsers();
  const index = users.findIndex((user: any) => user.id == id);

  if (index === -1) {
    sendJson(res, 404, {
      success: false,
      message: "user not found",
    });
  }

  const deletedUser = users.splice(index, 1)[0];

  writeUsers(users);

  sendJson(res, 202, {
    success: true,
    message: `User with id ${id} deleted`,
    data: deletedUser,
  });
});


//? ✔ Step 1 — Remove the user from array

//? users.splice(1, 1) removes 1 element at index 1.

//? users = [
//?   { id: 1, name: "Esha" },
//?   { id: 3, name: "Sadia" }
// ];


//? Step 2 — Splice returns an array

//? It returns:

// ?[
//?   { id: 2, name: "Nahia" }
//? ]

// ?Step 3 — [0] gets the first element

//  ?That is:

//?? deletedUser = { id: 2, name: "Nahia" };
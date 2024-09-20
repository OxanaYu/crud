const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    server.use(middlewares);
    server.use(router);
    server.listen(5000, () => {
      resolve({
        statusCode: 200,
        body: JSON.stringify({ message: "JSON Server is running" }),
      });
    });
  });
};

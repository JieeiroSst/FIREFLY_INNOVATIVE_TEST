const koa = require("koa");
const bodyParser = require("koa-bodyparser");

const router = require("./internal/router");

const app = new koa();

app.use(bodyParser());

app.use(router.routes());

const port =  1234;
app.listen(port, () => {
  console.log(`server running port ${port}`);
});
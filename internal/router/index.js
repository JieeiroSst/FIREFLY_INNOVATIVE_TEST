const Koa_router = require("koa-router");

const usecase = require("../usecase");

const router = new Koa_router();

router.post("/user/add", async (ctx) => {
  const { firstname, lastname, age } = ctx.request.body;
  try {
    const user = await usecase.createUser(firstname, lastname, age);
    ctx.body = {
      success: true,
      data: user,
      error: null,
    };
  } catch (error) {
    ctx.body = {
      success: false,
      data: null,
      error: error,
    };
  }
});

router.get("/user/read/:id", async (ctx) => {
  const { id } = ctx.params;
  try {
    const user = await usecase.getUserById(id);
    ctx.body = {
      success: true,
      data: user,
      error: null,
    };
  } catch (error) {
    ctx.body = {
      success: false,
      data: null,
      error: error,
    };
  }
});

router.get("/user/search", async (ctx) => {
  const { name } = ctx.query;
  try {
    const user = await usecase.serachUser(name);
    ctx.body = {
      success: true,
      data: user,
      error: null,
    };
  } catch (error) {
    ctx.body = {
      success: false,
      data: null,
      error: error,
    };
  }
});

router.put("/user/edit/:id", async (ctx) => {
  const { id } = ctx.params;
  const { firstname, lastname, age } = ctx.request.body;
  try {
    const entity = {
      firstname,
      lastname,
      age,
    };
    const user = await usecase.updateUser(id, entity);
    ctx.body = {
      success: true,
      data: user,
      error: null,
    };
  } catch (error) {
    ctx.body = {
      success: false,
      data: null,
      error: error,
    };
  }
});

router.delete("/user/edit/:id", async (ctx) => {
  const { id } = ctx.params;
  try {
    const user = await usecase.deleteUser(id);
    ctx.body = {
      success: true,
      data: user,
      error: null,
    };
  } catch (error) {
    ctx.body = {
      success: false,
      data: null,
      error: error,
    };
  }
});

module.exports = router;

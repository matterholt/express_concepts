//say we want to get all the model details
app.get("/models", (req, res) => {
  return res.send(Object.values(models));
});

// Params property on request
app.get("/models/:name", (req, res) => {
  return res.send(models[req.params.name]);
});

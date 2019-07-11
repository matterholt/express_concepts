import { Router } from "express";
import uuidv4 from "uuid/v4";
const router = Router();

router.get("messages", (req, res) => {});

export default router;
//

/*
app.get("/messages", (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});

app.get("/messages/:messagesId", (req, res) => {
  // return res.send(messages[req.params.messagesId]);
  return res.send(req.context.models.messages[req.params.messagesId]);
});
app.post("/messages", (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id
  };
  req.context.models.messages[id] = message;
  return res.send(message);
});

// ***************************
app.delete("/messages/:messagesId", (req, res) => {
  const {
    [req.params.messagesId]: message,
    ...otherMessages
  } = req.context.models.messages;
  req.context.models.messages = otherMessages;

  return res.send(message);
});

app.delete("/users/:userId", (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource \n`
  );
});
*/

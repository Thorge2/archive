import express from "express";
import mongoose from "mongoose";

(async () => {
  await mongoose.connect("mongodb://mongo/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const Document = new mongoose.Schema({
    body: String,
  });

  const testModel = mongoose.model("doc", Document);

  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    testModel.find((err, docs) => res.json(docs.map((d) => d.body)));
  });

  app.post("/", (req, res) => {
    const instance = new testModel();
    console.log(req.body);
    instance.body = req.body.body;
    instance.save((err) => {
      if (err) console.log(err);
    });
    res.json(req.body);
  });

  app.listen(5000, () => console.log("Server running on port 5000"));
})();

const router = require("express").Router();
const Stocks = require("../models/stock.js");


router.post("/api/stockss", (req, res) => {
  Stocks.create({})
    .then(dbstocks => {
      res.json(dbstocks);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/stocks", (req, res) => {
  Stocks.find()
    .then(dbstocks => {
      res.json(dbstocks);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//update by id call the Stocks- use the specific function with params and body, alter the Stocks body with a push
//if validators are true then re.json the database if everything is all wrong catch the error please
router.put("/api/stocks/:id", ({ body, params }, res) => {
  Stocks.findByIdAndUpdate(
    params.id,
    { $push: { stocks: body } },
    { new: true, runValidators: true }
  ).then(dbstocks => {
    res.json(dbstocks);
  })
    .catch(err => {
      res.status(400).json(err);
    });
})

//we are limiting to 7 because we have been told to (only really measuring the week and not beyond)
router.get("/api/workouts/range", (req, res) => {
  Stocks.find().limit(7)
    .then(dbstocks => {
      res.json(dbstocks);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//get rid of it

router.delete("/api/stocks", ({ body }, res) => {
  Stocks.findByIdAndDelete(
    body.id
  ).then(() => {
    res.json(true);
  })
    .catch(err => {
      res.status(400).json(err);
    });
})

module.exports = router;

var express = require('express');
var router = express.Router();
const QuoterContext = require('../quoter/quoterContext');
const LocalStrategy = require('../quoter/localStrategy');
const LocalWithTaxStrategy = require('../quoter/localWithTaxStrategy');
const gain = 1.3;
const IVA = 0.16;

router.get('/local', function(req, res, next){
    const quoter = new QuoterContext(new LocalStrategy(), gain);
    const amount = req.query.amount;
    const total = quoter.quote(amount);

    res.json(total);
});

router.get('/localWithTax', function(req, res, next){
    const quoter = new QuoterContext(new LocalWithTaxStrategy(IVA), gain);
    const amount = req.query.amount;
    const total = quoter.quote(amount);

    res.json(total);
});

module.exports = router;
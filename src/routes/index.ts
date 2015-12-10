import express = require('express');

var router = express.Router();

router.use('/', function(req: any, res: any, next: any) {
	res.end('heyo');
});

export = router;

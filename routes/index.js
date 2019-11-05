var express = require('express');
var router = express.Router();
var path = require('path');



router.get('/api/health', function(req, res, next) {
  res.json({
  	app: 'project-3',
  	health: 200
  });
});

/* GET - React Application */
router.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = router;

var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World')
});


router.get('/payload', function(req, res, next) {

 // console.log('saa asa ASas', req.body)
  res.send('index datat atastastccta ');







});


router.post('/teamwork_task', function(req, res, next) {

  console.log('saa asa ASas', req.body)
  //res.send('index');


  var data = JSON.stringify({
    "title": req.body.task.name
  });
  
  var config = {
    method: 'post',
    url: 'https://api.github.com/repos/deepuRai/testRepo/issues',
    headers: { 
      'Accept': 'application/vnd.github.v3+json', 
      'Authorization': 'token  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', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  


});

module.exports = router;

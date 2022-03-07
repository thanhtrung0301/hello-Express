var express = require('express');
var router = express.Router();

function checkError(first_num, second_num, calculation) {
  if(calculation === undefined)
        return 'Vui lòng chọn phép tính trước khi tính toán';
  else if(first_num === '' && second_num === '')
            return 'Vui lòng nhập cả hai số';
        else if(first_num === '')
                return 'Vui lòng nhập số thứ nhất';
            else if(second_num === '')
                    return 'Vui lòng nhập số thứ hai';
                else
                    return 'Thành công';
}


/* GET home page. */
router.get('/', function(req, res, next) {
  let rslt;
  let ntf = checkError(req.query.first_num, req.query.second_num, req.query.calculation);

  switch (req.query.calculation) 
  {
    case '+': rslt = parseFloat(req.query.first_num) + parseFloat(req.query.second_num);
              break;
    case '-': rslt = parseFloat(req.query.first_num) - parseFloat(req.query.second_num);
              break;
    case '*': rslt = parseFloat(req.query.first_num) * parseFloat(req.query.second_num);
              break;
    case '/': rslt = parseFloat(req.query.first_num) / parseFloat(req.query.second_num);
              break;
  }

  const data = {...req.query, result: rslt, notification: ntf};
  res.render('index', data);
});

module.exports = router;

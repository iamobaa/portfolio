var express = require('express');
var router = express.Router();

/* GET Resume. */
router.get('/', function(req, res, next) {
    res.render('pages/resume', { title: 'My Resume' });
});

/* GET Resume DOWNLOAD in PDF. */
router.get('/download', function(req, res, next) {
    const file = `${__dirname}/../public/files/Bolu_Agbana_Resume.pdf`;
    res.download(file); // Set disposition and send it.
});

module.exports = router;
    // res.setHeader('Content-disposition', 'attachment; filename=Bolu_Agbana_Resume.pdf');

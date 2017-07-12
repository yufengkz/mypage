var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: '语风'})
})
router.post('/', function(req, res, next) {
    let data = {
        err: 0,
        msg: '数据请求成功',
        nav: [
            {home: 'Home'},
            {blog: 'Blog'},
            {comment: 'Comment'},
            {andout: 'AboutMe'}
        ]
    }
    res.send(data)
});

module.exports = router

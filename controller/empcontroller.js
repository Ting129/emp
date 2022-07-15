var empmodel = require('../model/empmodel');


exports.queryall = (req,res) => {
    empmodel.queryall().then((data) => {
        data = JSON.parse(data);
        res.render('./emp/queryall',{emps:data});
    }).catch((err) => {
        console.log("Erroe: " + err);
    });

};




exports.queryone = (req,res) => {
    empmodel.queryone(req.params.empno).then((data) => {
        data = JSON.parse(data);
        res.render('./emp/queryone',{emps:data});
    }).catch((err) => {
        console.log("Erroe: " + err);
        res.send('查無此資料');
    });

};


exports.queryadd = (req,res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            var params = new URLSearchParams(body);
            var empno = params.get('empno')
            var ename = params.get('ename')
            var hiredate = params.get('hiredate')
            var salary = params.get('salary')
            var deptno = params.get('deptno')
            var title = params.get('title')
            empmodel.queryadd(empno,ename,hiredate,salary,deptno,title).then((data) => {
                data = JSON.parse(data);
                res.render('./emp/queryadd',{emps:data});
            }).catch((err) => {
            console.log("Erroe: " + err);
            });
        });
        }};

            
exports.querydel = (req,res) => {
    empmodel.querydel(req.query.empno).then((data) => {
    data = JSON.parse(data);
    res.send('已刪除此資料')
        // res.render('./emp/querydel',{emps:data});
        }).catch((err) => {
//         console.log("Erroe: " + err);
        res.send('查無此資料');
        });     
};


exports.queryupdate = (req,res) => {
    empmodel.queryupdate(req.query.empno).then((data) => {
    data = JSON.parse(data);
        res.render('./emp/queryupdate',{emps:data});
        }).catch((err) => {
        console.log("Erroe: " + err);
        res.send('查無此資料');
        });     
};



exports.queryupdate1 = (req,res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            var params = new URLSearchParams(body);
            var empno = params.get('empno')
            var ename = params.get('ename')
            var hiredate = params.get('hiredate')
            var salary = params.get('salary')
            var deptno = params.get('deptno')
            var title = params.get('title')
            empmodel.queryupdate1(empno,ename,hiredate,salary,deptno,title).then((data) => {
                data = JSON.parse(data);
                res.render('./emp/queryupdate1',{emps:data});
            }).catch((err) => {
            console.log("Erroe: " + err);
            });
        });
        }};





var express = require('express');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'nodejs',
    password:'Passw0rd0000',
    database:'db01'
});


//http://localhost:8181/employee/queryall
exports.queryall = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT * FROM employee';
    conn.query(sql,(err,result) => {
        if(err)reject (err);
        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};



//http://localhost:8181/employee/queryone/1001
exports.queryone = (empno) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = 'SELECT * FROM employee WHERE empno = ?';
    conn.query(sql,[empno],(err,result) => {
        if(err)reject (err);
        if(result.length == 0) reject ('查無此資料');
        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};



//http://localhost:8181/employee/insert
exports.queryadd = (empno,ename,hiredate,salary,deptno,title) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = 'INSERT INTO employee VALUES(?,?,?,?,?,?)';
    var params = [empno, ename, hiredate, salary, deptno, title];
    var sql1 = 'SELECT * FROM employee WHERE empno = ?';
    var params1 = [empno];
    conn.query(sql, params, (err, ) => {
        if(err)reject (err);
        else
        conn.query(sql1, params1, (err, result) => {
        if(err)reject (err);
        else 
        resolve(JSON.stringify(result));
    });
    });
    });
    return promise;
};


//http://localhost:8181/employee/delete?empno=1001
exports.querydel = (empno) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = 'SELECT * FROM employee WHERE empno = ?';
    var sql1 = 'DELETE FROM employee WHERE empno = ?';
    conn.query(sql,[empno],(err,result) => {
        if(err)reject (err);
        if(result.length == 0) reject ('查無此資料');
        else
    conn.query(sql1,[empno],(err,) => {
        if(err)reject (err);
        else         
        resolve(JSON.stringify(result));
    });
    });
    });
    return promise;
};

//http://localhost:8181/employee/update?empno=1001
exports.queryupdate = (empno) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = 'SELECT * FROM employee WHERE empno = ?';
    conn.query(sql,[empno],(err,result) => {
        if(err)reject (err);
        if(result.length == 0) reject ('查無此資料');
        else         
        resolve(JSON.stringify(result));
    });
    });
return promise;
};




//http://localhost:8181/employee/update1
exports.queryupdate1 = (empno,ename,hiredate,salary,deptno,title) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = 'UPDATE employee SET ename = ? , hiredate = ? , salary = ? , deptno = ? , title = ? WHERE empno = ?';
    var params = [ename, hiredate, salary, deptno, title, empno];
    var sql1 = 'SELECT * FROM employee WHERE empno = ?';
    var params1 = [empno];
    conn.query(sql, params, (err, ) => {
        if(err)reject (err);
        else
        conn.query(sql1, params1, (err, result) => {
        if(err)reject (err);
        else 
        resolve(JSON.stringify(result));
    });
    });
    });
    return promise;
};




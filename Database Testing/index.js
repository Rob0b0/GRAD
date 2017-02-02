var cassandra = require('cassandra-driver');
var async = require('async');

var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'grad'});


const query = 'INSERT INTO courses (department, number, description, prereqs) VALUES (?,?,?,?)';
const params = [
    ["CSE", "100", "stuffs", [["CSE 30"], ["CSE 21"]]],
    ["CSE", "30", "stuffs", [["CSE 12"]]],
    ["CSE", "12", "stuffs", [["CSE 11"]]],
    ["CSE", "11", "stuffs", []],
    ["CSE", "21", "stuffs", [["CSE 20"]]],
    ["CSE", "20", "stuffs", []],
];

const param2 = [
    ["MATH", "20B", "stuffs", [["MATH 20A"]]],
    ["MATH", "20A", "stuffs", []],
    ["PHYS", "4A", "stuffs", []],
    ["PHYS", "4B", "stuffs", [["PHYS 4A"]]],
    ["ECE", "35", "stuffs", []],
    ["MUS", "15", "stuffs", []],
];

for(var param of param2) {
    console.log(param);
  client.execute(query, param, function(err) {
    //assert.ifError(err);
    if(err) console.log(err);
    else console.log("inserted" + param[1]);
  })
}


/*
const query2 = "SELECT * FROM courses WHERE department = ? AND number = ?";
const params = ['CSE', '100'];
client.execute(query2, params, function(err, result) {
  console.log(result);
  console.log(result['rows'][0]);
});*/

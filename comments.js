//Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var dbUrl = 'mongodb://localhost:27017/';
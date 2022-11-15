<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');

header('Content-type: json/application');

$file = fopen("../practiceFront/password.txt", 'r');
$password = fgets($file);

$conect = mysqli_connect("localhost", 'root', $password, 'bookshoppractice');

$method = $_SERVER['REQUEST_METHOD'];
$q = explode('/', $_GET['q']);
$type = $q[0];
if (isset($q[1])) {
    $id = $q[1];
}

require 'functions.php';

if ($method === "GET") {
    if ($type === "posts") {
        getPost($conect);
    }
}

if ($method === "POST") {
    if ($type === "posts") {
        addPost($conect, $_POST, $_FILES);
    } elseif($type === "patch") {
        updatePost($conect, $id, $_POST, $_FILES);
    }
}

if($method === "DELETE"){
    if($type === "posts"){
        deletePost($conect, $id, $data);
    }
}

<?php
   
    header('Content-type: json/application');


    $conect = mysqli_connect("localhost","root","root","tablelink");

    $line = "SELECT book.id AS 'id', author.name AS 'author', book.Genre AS 'genre', book.name AS 'title', book.price AS 'price', book.cover AS 'cover' FROM author_book LEFT JOIN author ON (author.id = author_book.id_author) LEFT JOIN book ON (book.id = author_book.id_book)";


    $resp = mysqli_query($conect, $line);

    $arr = [];

    while($entry = mysqli_fetch_assoc($resp)){
        $arr[] = $entry;  
    }
    sort($arr);

    echo json_encode($arr);
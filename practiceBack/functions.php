<?php
function getPost($conect)
{

    $line = "SELECT a_b.id AS id, books.title AS 'title', authors.name AS 'author', books.cover AS 'cover', books.description AS 'description', books.year AS 'year', books.genre AS 'genre' FROM a_b LEFT JOIN authors ON (authors.id = a_b.id_author) LEFT JOIN books ON (books.id = a_b.id_book)";

    $resp = mysqli_query($conect, $line);

    $arr = [];

    while ($entry = mysqli_fetch_assoc($resp)) {
        $arr[] = $entry;
    }
    sort($arr);

    echo json_encode($arr);
}

function addPost($conect, $data, $img)
{
    $name = $data['author'];
    $name = explode(',', $name);
    $cover = $img['cover'];
    $cover_name = $cover['name'];
    $title = $data['title'];
    $description = $data['description'];
    $year = $data['year'];
    $genre = $data['genre'];

    move_uploaded_file($cover['tmp_name'],'../practicefront/covers/'.$cover_name);

    $counter = count($name);
   

    for($i = 0; $i < $counter; $i++){
        $name[$i] = trim($name[$i]);
        $line = "SELECT * FROM `authors` WHERE `name` = '$name[$i]'";

        $resp = mysqli_query($conect, $line);

        if (mysqli_num_rows($resp) == 0) {
            $line = "INSERT INTO `authors` (`id`, `name`) VALUES (NULL, '$name[$i]')";
            mysqli_query($conect, $line);
            $line = "SELECT * FROM `authors` WHERE `name` = '$name[$i]'";
    
            $resp = mysqli_query($conect, $line);
        }

        $res = mysqli_fetch_assoc($resp);
        $idA = $res['id'];

        

        $respBook = mysqli_query($conect, "SELECT * FROM `books` WHERE `title` = '$title'");

        if(mysqli_num_rows($respBook) == 0){
            $sql = "INSERT INTO `books` (`id`, `title`, `cover`, `description`, `year`, `genre`) VALUES (NULL, '$title', '$cover_name', '$description', '$year', '$genre')";
            mysqli_query($conect, $sql);
        }
        $respBook = mysqli_query($conect, "SELECT * FROM `books` WHERE `title` = '$title'");

        $res = mysqli_fetch_assoc($respBook);
        $idB = $res['id'];
        $line = "INSERT INTO `a_b` (`id`, `id_author`, `id_book`) VALUES (NULL, '$idA', '$idB')";
        mysqli_query($conect, $line);
    }

    

    
}

function updatePost($conect, $id, $data, $img){

    $title = $data['title'];
    $description = $data['description'];
    $year = $data['year'];
    $genre = $data['genre'];
    $author = $data['author'];
    $author = explode(',', $author);


    $res = mysqli_fetch_assoc(mysqli_query($conect, "SELECT * FROM `a_b` WHERE `id` = '$id'"));
    $idbook = $res['id_book'];
    $res = mysqli_fetch_assoc(mysqli_query($conect, "SELECT * FROM `books` WHERE `id` = '$idbook'"));
    $origCover = $res['cover'];
    

    if(isset($img['cover'])){
        $cover = $img['cover'];
        $cover_name = $cover['name'];
        move_uploaded_file($cover['tmp_name'], '../practicefront/covers/'.$cover_name);

        $resp = mysqli_query($conect, "SELECT * FROM `books` WHERE `cover` = '$origCover'");

        if($cover_name != $origCover && mysqli_num_rows($resp) == 0){
            unlink('../practicefront/covers/'.$res['cover']);
        } 
    } else {
        $cover_name = $res['cover'];
    }
    mysqli_query($conect, "UPDATE `books` SET `title` = '$title', `cover` = '$cover_name', `description` = '$description', `year` = '$year', `genre` = '$genre' WHERE `books`.`id` = '$idbook'");

    $resp = mysqli_query($conect, "SELECT * FROM `a_b` WHERE `id_book` = '$idbook'");
    while($res = mysqli_fetch_assoc($resp)){
        $id_res = $res['id'];
        $id_author = $res['id_author'];
        mysqli_query($conect, "DELETE FROM a_b WHERE `a_b`.`id` = '$id_res'");
        if(mysqli_num_rows(mysqli_query($conect, "SELECT * FROM `a_b` WHERE `id_author` = '$id_author'")) == 0){
            mysqli_query($conect, "DELETE FROM authors WHERE `authors`.`id` = '$id_author'");
        }
    }

    $counter = count($author);

    for($i = 0; $i < $counter; $i += 1){
        $author[$i] = trim($author[$i]);
        if(mysqli_num_rows(mysqli_query($conect, "SELECT * FROM `authors` WHERE `name` = '$author[$i]'")) == 0){
            mysqli_query($conect, "INSERT INTO `authors` (`id`, `name`) VALUES (NULL, '$author[$i]')");
        }
        $res = mysqli_fetch_assoc(mysqli_query($conect, "SELECT * FROM `authors` WHERE `name` = '$author[$i]'"));
        $idauthor = $res['id'];

        mysqli_query($conect, "INSERT INTO `a_b` (`id`, `id_author`, `id_book`) VALUES (NULL, '$idauthor', '$idbook')");
    }

}
    



function deletePost($conect, $id){

   $res = mysqli_fetch_assoc(mysqli_query($conect, "SELECT * FROM `a_b` WHERE `id` = '$id'"));

   $idbook = $res['id_book'];

   $resp = mysqli_query($conect, "SELECT * FROM `a_b` WHERE `id_book` = '$idbook'");

   $imgr = mysqli_fetch_assoc(mysqli_query($conect, "SELECT * FROM books WHERE `books`.`id` = '$idbook'"));
   $imgCover = $imgr['cover'];

   if(mysqli_num_rows(mysqli_query($conect, "SELECT * FROM books WHERE `cover` = '$imgCover'")) == 0){
        unlink('../practicefront/covers/'.$imgr['cover']);
   }

        $arr = [];
        while($post = mysqli_fetch_assoc($resp)){
            $arr[] = $post['id_author'];
            mysqli_query($conect, "DELETE FROM a_b WHERE `a_b`.`id_book` = '$idbook'");
        }

   mysqli_query($conect, "DELETE FROM books WHERE `books`.`id` = '$idbook'");

    $counter = count($arr);

        for($i = 0; $i < $counter; $i += 1){
            $resp = mysqli_query($conect, "SELECT * FROM `a_b` WHERE `id_author` = '$arr[$i]'");

            if(mysqli_num_rows($resp) == 0){
                mysqli_query($conect, "DELETE FROM authors WHERE `authors`.`id` = '$arr[$i]'");
            }
        }
    

    

   

}


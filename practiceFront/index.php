<?php
    session_start();

    if(!isset($_SESSION['status'])){
        $_SESSION['status'] = 'user';
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <style>
        
    </style>
</head>

<body>
    <section id="moreInfo">
        <button onclick="returnFunction()"></button>
        <div id="blackscreen" onclick="returnFunction()"></div>
    </section>
<header>
        <div id="head">
        <form class="adapt" action="adminLogin.php">
            <button type="submit"><?php if($_SESSION['status'] == 'user'){echo "Admin";}else{echo "Выйти";}?></button>
        </form>
        <div>
            <img src="imgs/kisspng-vector-graphics-computer-icons-portable-network-gr-education-svg-png-icon-free-download-15128-o-5cdaabb00566b5.1137909515578346720221.png" alt="">
            <input type="text" placeholder="Введите название книги или слово из названия" id='search' onkeydown="searchBar(event)">
            <button type="submit" onclick="search()">Искать</button>
        </div>    
        <form class="nonAdapt" action="adminLogin.php">
            <button class='pesant' type="submit"><?php if($_SESSION['status'] == 'user'){echo "Admin";}else{echo "Выйти";}?></button>
        </form>

        
</div>
    
</header>
<section id="genreSort">
    <h1>Ищите книгу определённого жанра?</h1>
    <p class="nonAdapt">У нас есть:</p>
    <p class="adapt">Выбрать</p>
    <div id="sorter" onclick="green()"></div>
</section>

    <div id="container">

    </div>

    <section id="backSpace"></section>

    <section></section>
    <?php
    if($_SESSION['status'] == "user"){
        echo '<script src="userJS.js"></script>';
    } else {
        require 'adminform.html';
        
    }

?>
    
    <footer>
        <p>
        Суворина О. В. РП-31

        </p>
    </footer>

</body>




</html>
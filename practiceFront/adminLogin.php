<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleAdmin.css">

    <title>Document</title>
</head>
<body>
    <div>
    <h1>Перейти в административный режим:</h1>

<form action="adminLogin.php" method='post'>
    <input class="input" type="text" name='login' placeholder='Логин'><br><br>
    <input class="input" type="password" name='pass' placeholder='Пароль'><br><br>

    <input type="submit" value="Войти">
</form>
<p>Логин: admin; Пароль: password</p>
    </div>

</body>
</html>


<?php 
    session_start();
    

    if($_SESSION['status'] == 'user'){
        if(isset($_POST['login']) && isset($_POST['pass'])){
            $file = fopen("password.txt", 'r');
            $password = fgets($file);

            $conect = mysqli_connect("localhost", 'root', $password, 'bookshoppractice');

            $res = mysqli_fetch_assoc(mysqli_query($conect, "SELECT * FROM `admin`"));

            if($_POST['login'] == $res['login'] && md5($_POST['pass']) == $res['password']){
                
                $_SESSION['status'] = 'admin';

                header('Location: index.php');
            } else {
                echo "<h1>Login или Пароль не верные!</h1>";
            }
        }
    } else {
        echo $_SESSION['status'];
        session_destroy();
        header('Location: index.php');

    }
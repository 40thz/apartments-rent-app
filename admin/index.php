
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div class="container">
        <div class="admin__form">
            <div class="admin__form__title">
                Админ панель
            </div>
            <form action="check.php">
                <div class="admin__login">
                    <input type="text" name="adminLogin" placeholder="Логин">
                </div>
                <div class="admin__password">
                    <input type="password" name="adminPass" placeholder="Пароль">
                </div>
                <input type="submit" name="sub">
            </form>
        </div>
    </div>
</body>
</html>
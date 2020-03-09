<?php
    /*ПОМЕЩАЕМ ДАННЫЕ ИЗ ПОЛЕЙ В ПЕРЕМЕННЫЕ*/
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $text_comment = $_POST["text_comment"];

    /*ЗДЕСЬ ПРОВЕРЯЕМ ЕСЛИ ХОТЯ БЫ ОДНО ИЗ ПОЛЕЙ НЕ ЗАПОЛНЕНО МЫ ВОЗВРАЩАЕМ СООБЩЕНИЕ*/
    if($name=="" or $email=="" or $phone=="" or $text_comment==""){ 
        echo "Заповнiть усi поля";
    }

    else{
        /*ЕСЛИ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ НАЧИНАЕМ СОБИРАТЬ ДАННЫЕ ДЛЯ ОТПРАВКИ*/
        $to = "iney17@gmail.com"; /* Адрес, куда отправляем письма*/
        $subject = "Письмо с обратной связи"; /*Тема письма*/
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: <no-reply@mrpl-city.hostenko.net>\r\n";/*ОТ КОГО (!!!Изминить!!!)*/

        /*ВО ВНУТРЬ ПЕРЕМЕННОЙ $message ЗАПИСЫВАЕМ ДАННЫЕ ИЗ ПОЛЕЙ */
        $message .= "Имя пользователя: ".$name."<br>";
        $message .= "Почта: ".$email."<br>";
        $message .= "Телефон: ".$phone."<br>";
        $message .= "Сообщение: ".$text_comment."<br>";

        /*ДЛЯ ОТЛАДКИ ВЫ МОЖЕТЕ ПРОВЕРИТЬ ПРАВИЛЬНО ЛИ ЗАПИСАЛИCM ДАННЫЕ ИЗ ПОЛЕЙ*/

        $send = mail($to, $subject, $message, $headers);

        /*ЕСЛИ ПИСЬМО ОТПРАВЛЕНО УСПЕШНО ВЫВОДИМ СООБЩЕНИЕ*/
        if ($send == "true")
        {
            echo "Ваше повiдомлення вiдправлено. Ми зв'яжемося з Вами найближчим часом.\r\n";
        }
        /*ЕСЛИ ПИСЬМО НЕ УДАЛОСЬ ОТПРАВИТЬ ВЫВОДИМ СООБЩЕНИЕ ОБ ОШИБКЕ*/
        else
        {
            echo "Не вдалося надiслати листа, спопробуй ще!";
        }
    }

?>
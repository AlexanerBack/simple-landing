# Настройка отправки формы обратной связи

Форма обратной связи настроена для отправки писем на **salalaiko1557@gmail.com**.

## Варианты настройки отправки:

### Вариант 1: EmailJS (Рекомендуется - бесплатно)

1. Зарегистрируйтесь на https://www.emailjs.com/
2. Создайте Email Service (Gmail)
3. Создайте Email Template со следующими переменными:
   - `{{from_name}}` - имя отправителя
   - `{{phone}}` - телефон
   - `{{service}}` - выбранная услуга
   - `{{message}}` - сообщение
   - `{{to_email}}` - salalaiko1557@gmail.com
4. Получите:
   - Public Key
   - Service ID
   - Template ID
5. В файле `index.html` раскомментируйте строки перед закрывающим тегом `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>
       (function(){
           emailjs.init("YOUR_PUBLIC_KEY");
       })();
   </script>
   ```
6. В файле `script.js` найдите функцию `sendEmail()` и раскомментируйте блок Option 1, заменив:
   - `YOUR_SERVICE_ID` на ваш Service ID
   - `YOUR_TEMPLATE_ID` на ваш Template ID
   - `YOUR_PUBLIC_KEY` на ваш Public Key

### Вариант 2: Formspree (Альтернатива - бесплатно)

1. Зарегистрируйтесь на https://formspree.io/
2. Создайте новую форму
3. Получите endpoint URL (например: `https://formspree.io/f/YOUR_FORM_ID`)
4. В файле `script.js` найдите функцию `sendEmail()` и раскомментируйте блок Option 4
5. Замените `YOUR_FORM_ID` на ваш Form ID

### Вариант 3: Собственный Backend API

1. Создайте API endpoint на вашем сервере
2. В файле `script.js` найдите функцию `sendEmail()` и раскомментируйте блок Option 2
3. Замените `/api/contact` на URL вашего API
4. Настройте сервер для отправки писем на salalaiko1557@gmail.com

## Текущее состояние

Сейчас форма работает в режиме симуляции - данные логируются в консоль браузера. Для реальной отправки писем необходимо настроить один из вариантов выше.

## Тестирование

После настройки:
1. Откройте консоль браузера (F12)
2. Заполните и отправьте форму
3. Проверьте консоль на наличие ошибок
4. Проверьте почту salalaiko1557@gmail.com


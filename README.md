Подготовка
Установить:
https://nodejs.org/uk/  - LTS версию
Затем выполнить в консоле npm install -g json-server
Создайте в папке с заданием:
Создайте папку db
Создайте в папке db json файл с именем db.json. В который поместите содержимое c https://gist.github.com/OlegRovenskyi/e39cd96baa9f3d4555eceaca5e91b33c. Должны получить следующую структуру: db/db.json
Чтобы запустить сервер нужно в консоли или терминале зайти в папку с файлом db.json и запустить команд: json-server --watch db.json --port 3004. Данная команда запустить сервер на дополнительном порту, чтобы когда будете запускать React app порты не конфликтовали.
чтобы остановить сервер нажмите вместе комбинацию клавиш в консоли: CTRL C
Переведите ваше todo на React. Для запуска сервера json-server в папке db нужно использовать команду json-server --watch db.json --port 3004 (https://github.com/typicode/json-server#alternative-port).
Используйте React Components.
Используйте props для передачи данных.
Используйте state для управление состоянием компонента.
Используйте обработчики для обработки click и submit событий.
 
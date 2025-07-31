### 🚀 Запуск проекта локально 

1. Клонируйте репозиторий:  
   `git clone https://github.com/Olga-Ryzhova/inline.git`

2. Перейдите в папку с проектом:  
   `cd inline`

3. Установите зависимости (режим development):
   `npm install`

4. Запустите проект:  
   `npm start`

5. Откройте в браузере:  
   `http://localhost:3000`
   
6. Соберите проект в режиме production (в папку dist/):
   `npm run build`

7. Развернуть проект на GitHub Pages (ветка gh-pages):
   `npm run deploy`

### 📁 Структура проекта

```
src/
├── css/                              # Скомпилированные CSS-файлы (сжатые и карта стилей)
│   ├── fonts.css
│   ├── style.min.css
│   └── style.min.map
├── fonts/                            # Шрифты, используемые в проекте
├── icons/                            # Иконки проекта
├── img/                              # Изображения
├── js/                               # JavaScript-файлы проекта
│   ├── script.js                     # Главный файл со всеми импортами и инициализациями
│   ├── initActiveMenu.js             # Логика активного меню
│   ├── toggleSlider.js               # Логика для включения и выключения слайдера
├──scss/                              # Исходные SCSS-файлы проекта
├── blocks/                           # Отдельные блоки и компоненты (по БЭМ)
│   ├── _contacts.scss
│   └── ...                            
│   ├── _variables.scss               # Переменные проекта (цвета)
│   └── style.scss                    # Главный SCSS-файл, в который импортируются все остальные
└── index.html                        # Главная HTML-страница проекта

.gitignore                            # Файл игнорирования для Git
package.json                          # Конфигурация npm-пакетов и скриптов
package-lock.json                     # Автоматически сгенерированный файл зависимостей
webpack.config.js                     # Конфигурация сборки Webpack
```
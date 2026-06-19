# Косынка — тематический PWA-пасьянс

Полностью локальная HTML/PWA-игра без серверов, CDN и интеграций. Подходит для GitHub Pages, Windows/macOS браузеров и добавления на главный экран iPhone через Safari.

## Что работает

- новая случайная раздача;
- перезапуск текущей раздачи кнопкой «Заново»;
- отмена хода;
- счетчик ходов;
- таймер;
- локальный рекорд в `localStorage`;
- подсказки с подсветкой возможного хода;
- drag & drop на компьютере;
- tap-to-move на телефоне;
- экран `You won` при победе;
- экран `Game over`, когда ходов больше нет;
- PWA manifest, service worker и иконки для iOS/Windows/macOS.

## Темы

1. Дефолтная
2. Светлая
3. Темная
4. Minecraft style
5. Halloween
6. Hello Kitty style
7. Чернобыль
8. Губка-боб style

Все изображения карт сделаны локально средствами HTML/CSS/SVG. Внешние картинки и сервисы не используются.

## Как выложить на GitHub Pages

1. Создай репозиторий на GitHub.
2. Скопируй в корень репозитория все файлы из архива.
3. Открой `Settings` → `Pages`.
4. В `Build and deployment` выбери `Deploy from a branch`.
5. Branch: `main`, folder: `/root`.
6. Сохрани настройки и подожди публикации.

## Как добавить на iPhone

1. Открой опубликованный сайт в Safari.
2. Нажми «Поделиться».
3. Выбери «На экран Домой».
4. Нажми «Добавить».

## Структура

```text
index.html
manifest.webmanifest
sw.js
assets/icons/favicon-32.png
assets/icons/apple-touch-icon.png
assets/icons/icon-192.png
assets/icons/icon-512.png
```

`index.html` содержит всю игровую логику, стили и разметку, поэтому игра не ломается из-за отсутствующих JS/CSS-файлов.

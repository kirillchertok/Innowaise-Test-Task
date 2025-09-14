# Innowise Test Task — Simple Calculator

**Simple Calculator** — фронтенд-приложение-калькулятор, выполненное в рамках тестового задания Innowise Lab (Level 0).

**Ссылка на задание:**  
https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0

---

## Краткое описание

Это простое приложение для выполнения базовых арифметических операций (сложение, вычитание, умножение, деление). README содержит инструкции по установке, запуску, сборке и краткое описание структуры проекта, а также чек‑лист перед сдачей задания.

---

## Требования

- Node.js v16+ (рекомендуется v18+)
- npm v8+ (или yarn)

---

## Установка

1. Клонируйте репозиторий и перейдите в каталог проекта:

```bash
git clone https://github.com/kirillchertok/Innowaise-Test-Task.git
git checkout develop
cd Innowaise-Test-Task
```

2. Установите зависимости:

```bash
npm install
```

или, если вы используете yarn:

```bash
yarn
```

---

## Запуск приложения

### В режиме разработки

```bash
npm start
```

После запуска откройте в браузере `http://localhost:3000`.

### Сборка для продакшена

```bash
npm run build
```

Сборка поместится в директорию `dist/`.

---

## Доступные npm-скрипты

- `start` — запуск dev-server
- `build` — сборка проекта
- `lint` — проверка ESLint

---

## Структура проекта

```
.
├─ .github/                # GitHub Actions (CI) (если есть)
├─ .husky/                 # git hooks (pre-commit и т.п.)
├─ src/                    # исходный код приложения
│  ├─ js/                  # файлы JS с логикой и инициализацией
│  ├─ styles/              # CSS
│  ├─ index.html           # стартовый HTML
│  └─ index.js             # точка входа
├─ package.json
├─ webpack.config.cjs      # конфигурация сборки
├─ eslint.config.cjs
├─ commitlint.config.cjs
├─ .prettierrc
└─ README.md
```

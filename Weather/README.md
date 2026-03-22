# Weather App

Приложение для просмотра погоды с возможностью поиска городов и выбора дня недели. Построено на стеке Next.js с использованием TypeScript, Zustand и React Query, с упором на высокую производительность и удобство тестирования.

---

## 🛠 Стек технологий

- **Фреймворк:** Next.js 16 (App Router, серверные и клиентские компоненты)
- **Язык:** TypeScript
- **Состояние:** Zustand
- **API:**
  - Серверное API для получения погоды по выбранному городу
  - Клиентское API для поиска городов (`getCities`) с обработкой ошибок
- **UI:**
  - CSS Modules с функциями: `@container`, `@layer`, `:has()`, `clamp()`
  - Skeleton для всех загружаемых компонентов
  - Lazy loading компонентов через `dynamic()`
  - Управляемые компоненты (`useState`) и мемоизация (`useMemo`, `memo`)
  - Debounce для поиска через `useEffect` + `useState`
- **Оптимизация:**
  - React Query с кешированием, placeholderData и staleTime
  - PPR (pure prop render) для снижения лишних рендеров

---

## ⚡ Функциональность

- **Поиск города:**
  - Подсветка красным при вводе <3 символов
  - Вызов API городов после debounce
  - Передача выбранного города через `searchParams` на сервер для запроса погоды

- **Выбор дня недели:**
  - Dropdown с выбором дня
  - Состояние выбранного дня хранится в Zustand

- **Skeleton и загрузка:**
  - Skeleton показывается при загрузке данных
  - Lazy loading компонентов для оптимизации рендеринга

---

## 🧪 Тестирование

- **Unit и Integration:** Vitest + React Testing Library
- **E2E:** Playwright
- Покрытие тестами:
  - Управляемые input’ы (SearchForm)
  - Dropdown выбор дня (SelectDay)
  - Skeleton и lazy-loaded компоненты
  - API вызовы и debounce
  - Проверка визуальной логики через классы и data-testid

---

## 🚀 Установка и запуск

1. Клонируем репозиторий:

```bash
git clone https://github.com/Git-Hub-Dmitriy/Portfolio.git
cd Weather
```

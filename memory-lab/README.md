# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Memory Lab

  Edukacyjny projekt React + TypeScript + Tailwind CSS z organizacją komponentów według Atomic Design.

  ## Uruchomienie

  ```bash
  npm install
  npm run dev
  ```

  ## Struktura Atomic Design

  ```text
  src/
  ├── components/
  │   ├── atoms/       # najmniejsze elementy: Button, Badge, Heading
  │   ├── molecules/   # grupy atomów: FeatureCard, StatItem
  │   ├── organisms/   # większe sekcje: TopBar, MemoryOverview
  │   └── templates/   # układ strony: DashboardTemplate
  ├── pages/           # konkretne widoki: HomePage
  ├── App.tsx          # punkt wejścia aplikacji
  └── main.tsx         # montowanie Reacta w DOM
  ```

  ## Skrypty

  - `npm run dev` - serwer deweloperski z HMR
  - `npm run build` - sprawdzenie TypeScript i build produkcyjny
  - `npm run lint` - sprawdzenie kodu przez ESLint
  - `npm run preview` - podgląd buildu
import reactX from 'eslint-plugin-react-x'

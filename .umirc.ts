import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    {
      name: 'plate',
      path: '/plate',
      component: '../app/editor/page.tsx',
    },
  ],
  npmClient: 'npm',
});

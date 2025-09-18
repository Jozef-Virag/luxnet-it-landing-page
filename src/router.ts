import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'

const views = import.meta.glob('./views/*.vue')

const routes = Object.keys(views).map(filePath => {
    const route = filePath.match(/\.\/views(.*)\.vue$/)?.[1] ?? "";
    return {
        path: route === '/HomeView' ? '/' : route,
        component: views[filePath],
    }
})

export function createRouter() {
    return _createRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes,
    })
}

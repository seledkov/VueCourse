import { createApp } from 'vue';

import App from './App.vue';

const app = createApp(App);

app.mount('#app');

// Task 1:
// Add two components to the app:
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component

// Задание 1:
// Добавляем в приложение два компонента:
// Компонент ActiveUser и компонент UserData
// ActiveUser должен вывести имя пользователя (h2) и возраст (h3)
// UserData должен вывести два поля ввода => для имени и возраста
// Необязательно: добавьте стиль по вашему выбору

// Задача 2: вывести оба компонента рядом в основной шаблон приложения

// Задача 3: Добавьте данные пользователя и убедитесь, что они содержат имя и возраст
// Пользовательские данные должны выводиться в ActiveUser
// Он должен быть обновлен через компонент UserData

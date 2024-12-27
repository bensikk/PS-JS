<template>
  <div id="app">
    <!-- Хедер -->
    <header class="app-header">
      <h1>Мій сайт</h1>
      <nav class="nav-links">
        <a href="#">Головна</a>
        <a href="#">Про нас</a>
        <a href="#">Контакти</a>
      </nav>
    </header>

    <div class="app-container">
      <!-- Вступна секція -->
      <section class="intro">
        <h2>Ласкаво просимо на наш сайт!</h2>
        <p>Ми раді запропонувати вам найкращі рішення для ваших потреб. Тут ви можете заповнити контактну форму, щоб зв'язатися з нами, або дізнатися більше про наші послуги.</p>
      </section>

      <!-- Секція послуг -->
      <section class="services">
        <h2>Наші послуги</h2>
        <ul>
          <li>Консультування</li>
          <li>Розробка</li>
          <li>Підтримка клієнтів</li>
        </ul>
      </section>

      <!-- Контактна форма -->
      <section class="contact-form">
        <h2>Зв'язатися з нами</h2>
        <form @submit.prevent="submitForm">
          <input v-model="name" type="text" placeholder="Ваше ім'я" required />
          <input v-model="email" type="email" placeholder="Ваш email" required />
          <textarea v-model="message" placeholder="Ваше повідомлення" required></textarea>
          <button type="submit">Відправити</button>
        </form>
      </section>
    </div>

    <!-- Підвал -->
    <footer class="footer">
      <p>&copy; 2024 Мій сайт. Всі права захищені.</p>
      <div class="social-links">
        <a href="#">Facebook</a> |
        <a href="#">Twitter</a> |
        <a href="#">Instagram</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      alert("Форма відправлена!");
      // Тут можна додати логіку відправки даних форми
    },
  },
};
</script>

<style scoped>
/* Загальні стилі */
#app {
  font-family: Arial, sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  min-height: 100vh;
  background-color: #f4f7fc;
  text-align: center;
}

/* Хедер */
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  z-index: 10;
}

.nav-links {
  margin-top: 10px;
}

.nav-links a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* Секція введення */
.intro {
  text-align: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
  width: 80%;
  margin-top: 100px;
}

.intro h2 {
  font-size: 30px;
  color: #333;
}

.intro p {
  font-size: 18px;
  color: #555;
}

/* Секція послуг */
.services {
  text-align: center;
  padding: 40px 20px;
  width: 80%;
  background-color: #e0e0e0;
}

.services h2 {
  font-size: 30px;
  color: #333;
}

.services ul {
  list-style-type: none;
  padding: 0;
}

.services ul li {
  font-size: 20px;
  color: #555;
  margin: 10px 0;
}

/* Контактна форма */
.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  width: 80%;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 40px;
}

.contact-form h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.contact-form form {
  width: 100%;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.contact-form button {
  padding: 12px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #45a049;
}

/* Підвал */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer .social-links a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

.footer .social-links a:hover {
  text-decoration: underline;
}
</style>

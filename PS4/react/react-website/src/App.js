import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    alert('Форма відправлена!');
    // Тут можна додати логіку для відправки даних форми
  };

  return (
    <div className="App">
      {/* Хедер */}
      <header className="app-header">
        <h1>Мій сайт</h1>
        <nav className="nav-links">
          <a href="#">Головна</a>
          <a href="#">Про нас</a>
          <a href="#">Контакти</a>
        </nav>
      </header>

      <div className="app-container">
        {/* Вступна секція */}
        <section className="intro">
          <h2>Ласкаво просимо на наш сайт!</h2>
          <p>Ми раді запропонувати вам найкращі рішення для ваших потреб. Тут ви можете заповнити контактну форму, щоб зв'язатися з нами, або дізнатися більше про наші послуги.</p>
        </section>

        {/* Секція послуг */}
        <section className="services">
          <h2>Наші послуги</h2>
          <ul>
            <li>Консультування</li>
            <li>Розробка</li>
            <li>Підтримка клієнтів</li>
          </ul>
        </section>

        {/* Контактна форма */}
        <section className="contact-form">
          <h2>Зв'язатися з нами</h2>
          <form onSubmit={submitForm}>
            <input 
              type="text" 
              placeholder="Ваше ім'я" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />
            <input 
              type="email" 
              placeholder="Ваш email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <textarea 
              placeholder="Ваше повідомлення" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
            ></textarea>
            <button type="submit">Відправити</button>
          </form>
        </section>
      </div>

      {/* Футер */}
      <footer className="footer">
        <p>&copy; 2024 Мій сайт. Всі права захищені.</p>
        <div className="social-links">
          <a href="#">Facebook</a> |
          <a href="#">Twitter</a> |
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

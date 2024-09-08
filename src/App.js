import logo from "./logo.svg";
import "./App.css";
import myImage from "./img/statue_of_liberty_PNG5.png";

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <ul>
            <li>
              <a href="#about">Обо мне</a>
            </li>
            <li>
              <a href="#programs">Программы</a>
            </li>
            <li>
              <a href="#reviews">Отзывы</a>
            </li>
            <li>
              <a href="#faq">Записаться на занятия</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="banner">
          <div className="banner-image">
            <img src={myImage} alt="Online English Lessons" />
          </div>
          <div className="banner-text">
            <h1>Уроки английского онлайн</h1>
            <p className="p-main">
              Запишись на первый бесплатный урок, чтобы узнать{" "}
              <span className="break-after"></span> свой уровень английского
            </p>
            <button className="cta-button">Записаться на консультацию </button>
          </div>
        </section>

        <section className="info-block">
          <div className="info-part">
            <div className="circle">01</div>
            <p className="circle-text">Индивидуальные занятия</p>
          </div>
          <div className="info-part">
            <div className="circle">02</div>
            <p className="circle-text">Удобное время занятий</p>
          </div>
          <div className="info-part">
            <div className="circle">03</div>
            <p className="circle-text">Первое занятие бесплатно</p>
          </div>
        </section>

        <section className="about-me">
          <div className="about-me-content">
            <div className="about-me-text">
              <h2>Обо мне</h2>
              <p className="about-me-title">
                Привет! Меня зовут Мари и я твой личный помощник в изучении
                английского
              </p>
              <p className="about-me-p">Я квалифицированный преподаватель</p>
              <p className="about-me-title">Образование:</p>
              <p className="about-me-p">Я квалифицированный преподаватель</p>
              <p className="about-me-title">Опыт работы:</p>
              <ul className="about-me-list">
                <li>3 года опыта преподавания английского языка</li>
                <li>Работа с различными возрастными группами</li>
                <li>Индивидуальные и групповые занятия</li>
              </ul>
              <p className="about-me-ps">With Love, Mari</p>
            </div>
            <div className="about-me-image"></div>
          </div>
        </section>

        <section className="opinie">
          <h2 className="how-classes">Как проходят занятия?</h2>
          <div className="circle-container">
            <div className="circle-box">
              <div className="circle-review">01</div>
              <p className="circle-description">
                Step 1: Description for step 1.
              </p>
            </div>
            <div className="arrow">&#10230;</div>{" "}
            {/* Unicode for rightward arrow */}
            <div className="circle-box">
              <div className="circle-review">02</div>
              <p className="circle-description">
                Step 2: Description for step 2.
              </p>
            </div>
            <div className="arrow">&#10230;</div>
            <div className="circle-box">
              <div className="circle-review">03</div>
              <p className="circle-description">
                Step 3: Description for step 3.
              </p>
            </div>
            <div className="arrow">&#10230;</div>
            <div className="circle-box">
              <div className="circle-review">04</div>
              <p className="circle-description">
                Step 4: Description for step 4.
              </p>
            </div>
          </div>
        </section>

        <section className="pricing">
          <h2 className="how-classes-title">Программы</h2>
          <div className="pricing-cards">
            <div className="pricing-block">
              <h2 className="pricing-title">Базовый</h2>
              <p className="pricing-description">1 месяц 2 занятия в неделю</p>
              <p className="pricing-description">
                Длительность занятий 60 минут
              </p>
              <p className="pricing-description">
                Предоставляются все учебные материалы
              </p>
              <button className="pricing-button">Подробнее</button>
            </div>
            <div className="pricing-block">
              <h2 className="pricing-title">Английский для IT</h2>
              <p className="pricing-description">1 месяц 3 занятия в неделю</p>
              <p className="pricing-description">
                Длительность занятий 60 минут
              </p>
              <p className="pricing-description">
                Предоставляются все учебные материалы
              </p>
              <button className="pricing-button">Подробнее</button>
            </div>
            <div className="pricing-block">
              <h2 className="pricing-title">Интенсив</h2>
              <p className="pricing-description">1 месяц 4 занятия в неделю</p>
              <p className="pricing-description">
                Длительность занятий 60 минут
              </p>
              <p className="pricing-description">
                Предоставляются все учебные материалы
              </p>
              <button className="pricing-button">Подробнее</button>
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="form-container">
            <h2 className="form-title">Попробуй сейчас!</h2>
            <form className="consultation-form">
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ваше имя"
                required
              />

              <label htmlFor="email">Почта</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ваш email"
                required
              />

              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ваш телефон"
                required
              />

              <label htmlFor="comments">Можете оставить комментарии</label>
              <textarea
                id="comments"
                name="comments"
                placeholder="Ваши комментарии"
                rows="4"
              ></textarea>

              <button type="submit" className="submit-button">
                Зарегистрироваться на консультацию
              </button>
            </form>
          </div>
          <div className="image-container">
            <div className="image-circle">
              <img src="your-image-path.jpg" alt="Your description" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section contact-info">
            <h4>Контакты</h4>
            <p>Телефон: +123 456 789</p>
            <p>Email: info@example.com</p>
          </div>

          <div className="footer-section social-media">
            <h4>Следите за нами</h4>
            <ul>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section copyright">
            <p>&copy; 2024 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

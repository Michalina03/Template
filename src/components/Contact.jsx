import React from 'react'

function Contact() {
  return (
    <>
      {/* 1. Hero z tłem */}
      <section className="contact-hero section">
        <div className="contact-hero__overlay"></div>
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Get in Touch</h1>
          <p className="contact-hero__text">
            We would love to hear from you! Reach out or drop by.
          </p>
          <button className="contact-hero__btn">Contact Us</button>
        </div>
      </section>

      {/* 2. Kafelki kontaktowe */}
      <section className="contact-cards section">
        <div className="contact-cards__item">
          <h3>Email</h3>
          <p>hello@coffeeshop.com</p>
        </div>
        <div className="contact-cards__item">
          <h3>Phone</h3>
          <p>+123 456 789</p>
        </div>
        <div className="contact-cards__item">
          <h3>Address</h3>
          <p>123 Coffee St, Brewtown</p>
        </div>
      </section>

      {/* 3. Formularz kontaktowy */}
      <section className="contact-form section">
        <h2 className="contact-form__title">Send us a message</h2>
        <form className="contact-form__form">
          <input type="text" placeholder="Your Name" className="contact-form__input" />
          <input type="email" placeholder="Your Email" className="contact-form__input" />
          <textarea placeholder="Your Message" className="contact-form__textarea"></textarea>
          <button className="contact-form__btn">Send Message</button>
        </form>
      </section>

      {/* 4. CTA / Dodatkowe info */}
      <section className="contact-cta section">
        <h2 className="contact-cta__title">Follow Us for Updates</h2>
        <div className="contact-cta__buttons">
          <button>Instagram</button>
          <button>Facebook</button>
          <button>Twitter</button>
        </div>
      </section>

      {/* 5. Mapa */}
      <section className="contact-map section">
        <h2 className="contact-map__title">Our Location</h2>
        <div className="contact-map__map">
          <iframe
            title="Coffee Shop Location"
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default Contact
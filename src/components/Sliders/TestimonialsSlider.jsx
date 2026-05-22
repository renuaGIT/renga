'use client';
import "./sliders.css"
import { useState, useRef } from 'react';

const TestimonialsSlider = ({additionalClass = '', testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  return (
    <div className={`slider-container ${additionalClass}`}>
      <header className="slider-container__header">
        <button onClick={prev} className="slider-btn prev">←</button>
        <button onClick={next} className="slider-btn next">→</button>
      </header>

      <div
        className="slider-track"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="slider-slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-card__text">{item.text}</p>
              <div className="testimonial-card__author">
                <strong>{item.author}</strong>
                <span>{item.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-dots">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;

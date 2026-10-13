'use client';

import { useState } from 'react';
import { answerBagQuestion } from './agent';

export default function ShoppingAssistant() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setAnswer(answerBagQuestion(message));
  }

  return (
    <section className="assistant" aria-labelledby="assistant-title">
      <div>
        <p className="eyebrow">BAG GUIDE</p>
        <h2 id="assistant-title">The right bag changes the rhythm of a day.</h2>
        <p>Tell us where you are headed and we’ll point you toward a fitting piece.</p>
      </div>
      <form onSubmit={handleSubmit} className="assistant-form">
        <label htmlFor="bag-question">What are you looking for?</label>
        <div className="assistant-controls">
          <input
            id="bag-question"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="For work, travel, or everyday use"
          />
          <button type="submit">Suggest a bag</button>
        </div>
        {answer && <p className="assistant-answer" role="status">{answer}</p>}
      </form>
    </section>
  );
}

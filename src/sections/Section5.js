import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function Section5() {
  const [state, handleSubmit] = useForm("moqypbve");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <section className="sctn_five">
        <div className="contactcontainer">
      <form className="contactform" onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
    </section>
  );
}

export default Section5
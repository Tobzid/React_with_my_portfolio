import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useState } from "react";

// Use live server URL in production, or localhost during development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function Contacts() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'info', text: 'Sending your message...' });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', text: 'Thank you! Your message has been sent to my inbox.' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error(data.message || 'Failed to send message.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({ type: 'error', text: 'Server error. Could not send message.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contactSection" id="contact">
      <div className="ContactConDiv" id="contacts">
        <div className="firstPartDiv">
          <h3>Find Me</h3>
          <div className="withEmail">
            <MdOutlineMailOutline className="contactIcon" />
            <p>Tobzid2013@gmail.com</p>
          </div>
          <div className="withCall">
            <IoMdCall className="contactIcon" />
            <p>Text +15857171210</p>
          </div>
        </div>

        <div className="secondPartDiv">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              required
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />

            <input 
              type="email" 
              name="email" 
              required
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email"
            />

            <textarea 
              name="message" 
              rows={5} 
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status.text && (
              <p className={`statusMessage ${status.type}`}>
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
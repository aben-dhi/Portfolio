import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/mlddawry">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            required 
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            email
          </label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            placeholder="E-mail" 
            required
          />
        </div>
		<div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
           	id="message" 
            name="message" 
            placeholder="Message" 
            required>
          </textarea>
        </div>
		<input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
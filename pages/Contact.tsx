import React from "react";
import styles from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <>
      <div className={styles.container1}>
        <div className={styles.container1Text}>
          <h1> Contacts</h1>

          <p>
            Let’s build some
            <br /> future together.
          </p>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.container2form}>
          <h1>Contact Form</h1>

          <div className={styles.subContainer}>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Name*"
              autoComplete="off"
              required
              className={styles.subContainerInput}
            />
            <input
              type="text"
              placeholder="Surname*"
              className={styles.subContainerInput}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.subContainer}>
            <input
              type="text"
              placeholder="Email*"
              className={styles.subContainerInput}
              autoComplete="off"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              className={styles.subContainerInput}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.subContainer}>
            <input
              type="text"
              placeholder="Bussiness"
              className={styles.subContainerInput}
              autoComplete="off"
              required
            />
            <input
              type="text"
              placeholder="Role"
              className={styles.subContainerInput}
              autoComplete="off"
              required
            />
          </div>

          <div className={styles.subContainer1}>
            <input
              type="text"
              placeholder="Message"
              autoComplete="off"
              className={styles.subContainer1Input}
            />
          </div>

          <div className={styles.MainBox}>
            <div className={styles.checkboxs}>
              <input type="checkbox" className="form-check-input" />
              <label style={{ color: "white" }}>
                Lorem ipsum dolor sit amet
              </label>
              <br />
              <input type="checkbox" className="form-check-input" />
              <label style={{ color: "white" }}>
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </div>
          <button className={styles.button}>Submit</button>
        </div>
      </div>

      <div className={styles.container3}>
        <div className={styles.subContainer3}>
          <h3>We are Gytworkz</h3>
          <h2>
            We re-define <br />
            experiences <br />
            through
            <br /> design and <br />
            technology.
          </h2>
          <div className={styles.borderBottom}></div>
        </div>
      </div>
    </>
  );
};

export default Contact;

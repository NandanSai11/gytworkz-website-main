import React from "react";
import style from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={`${style.aboutContainer1}`}>
        <div className={`${style.aboutContainer1Text} col-sm-6  mt-5 px-3`}>
          <p className={style.p1}> About us</p>

          <h1> We are Gytworkz.</h1>

          <p className={style.p2}>
            {" "}
            We build innovation working at the intersection of technology and
            design.
          </p>
        </div>
      </div>
      <div className={style.aboutContainer2}>
        <div className={`${style.aboutContainer2Text}`}>
          <p className="col-sm-6 mx-auto w-100 ">
            We re-define experiences through design and technology, driving
            corporates towards their communicative and business goals.
          </p>
        </div>
      </div>
      <div className={style.aboutContainer3}>
        <div className={style.aboutContainer3Text}>
          <h1>Embracing</h1>
          <h1>the Change. </h1>
          <p>
            Future-Driven. Ready to embrace every change, both technological and
            methodological, as an opportunity to learn and to deliver value in
            form of innovation and ideas.{" "}
          </p>
          <p>
            {" "}
            Ready to listen, to understand and to answer. Ready to explore, to
            discover and to share. Driven by and to a tomorrow where technology
            and design shape new experiences of choice and freedom for us all.
          </p>
        </div>
      </div>
      <div className={style.aboutContainer4}>
        <div className={style.aboutContainer4Text}>
          <h1 className={style.aboutContainer4Heading}>Our Values</h1>
          <div className={style.Innovation}>
            <p>
              <h1> Innovation</h1> We build and promote a true culture of
              innovation based on dynamism, fluid processes and ideas. We strive
              for excellence and newness: the ever-changing technological and
              methodological landscape is the perfect playground for our
              creativity, skills and accountability. We work to capture and
              create value in new, thrilling ways.
            </p>
            <div className={style.InnovationBorder}></div>
          </div>
          <div className={style.positiveImpact}>
            <p>
              <h1>Positive Impact </h1>
              We are here to make a difference. We are committed to the
              environmental, social and economic development of the territory we
              live in. We work to create and sustain a tangible, positive value
              proposition for each and every stakeholder, direct or indirect,
              from our employees to those who come in contact with our business
              and its purpose. We undertake to promote a culture of meritocracy,
              openness, equal opportunities, kindness and respect in our own
              organization and in the society at large.
            </p>
            <div className={style.positiveImpactBorder}></div>
          </div>
          <div className={style.Tailoring}>
            <p>
              <h1> Tailoring</h1> Our Italian heritage is made of inventiveness,
              excellence, passion and eye for detail. We are partners to our
              clients and their customers. We build long-lasting relations based
              on trust, transparency and dialogue, operating with complete
              integrity to turn every project into a meaningful experience of
              quality, closeness and success.
            </p>
            <div className={style.TailoringBorder}></div>
          </div>
        </div>
      </div>
      <div className={style.aboutContainer5}>
        <div className={style.subContainer5}>
          <div className={style.subContainer}>
            <h3>We are Gytworkz</h3>
            <h2>
              We re-define <br />
              experiences through
              <br /> design and <br />
              technology.
            </h2>
            <div className={style.borderBottom}></div>
          </div>
        </div>
      </div>
      <div className={`${style.aboutContainer6}`}>
        <div className={style.aboutcontainer6form}>
          <p className={style.aboutContainer6H1}>
            Let’s build some <br />
            future together.
          </p>
          <h1>Contact Us</h1>
          <div className={style.aboutsubContainer6}>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Name*"
              autoComplete="off"
              required
              className={style.aboutsubContainer6Input}
            />
            <input
              type="text"
              placeholder="Surname*"
              className={style.aboutsubContainer6Input}
              autoComplete="off"
              required
            />
          </div>
          <div className={style.aboutsubContainer6}>
            <input
              type="text"
              placeholder="Email*"
              className={style.aboutsubContainer6Input}
              autoComplete="off"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              className={style.aboutsubContainer6Input}
              autoComplete="off"
              required
            />
          </div>
          <div className={style.aboutsubContainer6}>
            <input
              type="text"
              placeholder="Bussiness"
              className={style.aboutsubContainer6Input}
              autoComplete="off"
              required
            />
            <input
              type="text"
              placeholder="Role"
              className={style.aboutsubContainer6Input}
              autoComplete="off"
              required
            />
          </div>

          <div className={style.subContainer1}>
            <input
              type="text"
              placeholder="Message"
              autoComplete="off"
              className={style.subContainer1Input}
            />
          </div>

          <div className={style.MainBox}>
            <div className={style.checkboxs}>
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
          <button className={style.button}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default About;

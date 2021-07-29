import React from 'react';
import styled from 'styled-components';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import ContactItem from '../Components/ContactItem';

function Contactpage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get in Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="text" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject*</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  name="text-area"
                  id="text-area"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field">
                <PrimaryButton title={'Submit'} />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              icon={phone}
              title={'Phone'}
              contact1={'+91-878-968-0086'}
            />
            <ContactItem
              icon={email}
              title={'Email'}
              contact1={'skiran017@gmail.com'}
            />
            <ContactItem
              icon={location}
              title={'Location'}
              contact1={'Hyderabad, India'}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;

    .right-content {
      display: flex;
      flex-direction: column;
    }

    .contact-title {
      h4 {
        color: var(--white-color);
        padding-bottom: 1rem;
        font-size: 1.8rem;
      }
    }

    .form {
      width: 100%;

      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;

        label {
          position: absolute;
          left: 20px;
          top: -22px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 2.8rem;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default Contactpage;

import React, { useState } from 'react';
import styled from 'styled-components';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import ContactItem from '../Components/ContactItem';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Contactpage() {
  const [emailadd, setEmailAdd] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: name,
        email: emailadd,
        subject: subject,
        message: message,
      });
      alert('Message has been sent.');
      // console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }

    setName('');
    setEmailAdd('');
    setSubject('');
    setMessage('');
  };
  return (
    <MainLayout>
      <Title title={'Contact'} span={'Contact'} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input
                  type="email"
                  id="email"
                  value={emailadd}
                  onChange={(e) => setEmailAdd(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your Message*</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {/* <div className="form-field f-button"> */}
              <ButtonWrapper
                disabled={
                  name.length === 0 ||
                  emailadd.length === 0 ||
                  message.length === 0
                    ? true
                    : false
                }
              >
                <PrimaryButton title={'Send Message'} />
              </ButtonWrapper>
              {/* </div> */}
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

const ButtonWrapper = styled.button`
  margin-top: 2rem;
  disable: {true};
  @media screen and (max-width: 978px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
    position: relative;
    margin-left: 9rem;
    /* width: 98%; */
  }
  @media screen and (max-width: 400px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
    position: relative;
    margin-left: 4rem;
    /* width: 98%; */
  }
`;

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    
    @media screen and (max-width: 978px) {
       grid-template-columns: repeat(1, 1fr);       
     }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 100%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 98%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
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

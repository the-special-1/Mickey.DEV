import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactSection = styled.section`
  padding: 5rem 1rem; /* py-20 px-4 */
  background-color: #1e293b; /* bg-slate-800 */
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700; /* font-bold */
  text-align: center;
  margin-bottom: 3rem; /* mb-12 */
`;

const ContactForm = styled(motion.form)`
  max-width: 42rem; /* max-w-xl */
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem; /* mb-4 */
`;

const Label = styled.label`
  display: block;
  color: #d1d5db; /* text-gray-300 */
  margin-bottom: 0.5rem; /* mb-2 */
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem; /* px-4 py-3 */
  background-color: #334155; /* bg-slate-700 */
  border: 1px solid #475569; /* border-slate-600 */
  border-radius: 0.5rem; /* rounded-lg */
  color: #f8fafc;
  &:focus {
    outline: none;
    border-color: #3b82f6; /* focus:ring-blue-500 */
    box-shadow: 0 0 0 2px #3b82f6;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem; /* px-4 py-3 */
  background-color: #334155; /* bg-slate-700 */
  border: 1px solid #475569; /* border-slate-600 */
  border-radius: 0.5rem; /* rounded-lg */
  color: #f8fafc;
  &:focus {
    outline: none;
    border-color: #3b82f6; /* focus:ring-blue-500 */
    box-shadow: 0 0 0 2px #3b82f6;
  }
`;

const SubmitButton = styled.button`
  background-color: #2563eb; /* bg-blue-600 */
  color: #ffffff; /* text-white */
  font-weight: 700; /* font-bold */
  padding: 0.75rem 2rem; /* py-3 px-8 */
  border-radius: 9999px; /* rounded-full */
  font-size: 1.125rem; /* text-lg */
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8; /* hover:bg-blue-700 */
  }
`;

const SubmittedMessage = styled.div`
  text-align: center;
  h2 {
    font-size: 1.875rem; /* text-3xl */
    font-weight: 700; /* font-bold */
    color: #ffffff; /* text-white */
  }
  p {
    font-size: 1.125rem; /* text-lg */
    color: #d1d5db; /* text-gray-300 */
    margin-top: 0.5rem; /* mt-2 */
  }
`;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ContactSection id="contact">
      <Container>
        {submitted ? (
          <SubmittedMessage>
            <h2>Thank you!</h2>
            <p>Your message has been sent.</p>
          </SubmittedMessage>
        ) : (
          <>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Get In Touch
            </SectionTitle>
            <ContactForm
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows="5" required />
              </FormGroup>
              <div style={{ textAlign: 'center' }}>
                <SubmitButton type="submit">Send Message</SubmitButton>
              </div>
            </ContactForm>
          </>
        )}
      </Container>
    </ContactSection>
  );
};

export default Contact;

import ContactForm from './ContactForm';
import './App.css';
import { SunIcon } from '@heroicons/react/24/outline';

export default function App() {
  return (
    <div className="App">
      <SunIcon className='icon' />
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}
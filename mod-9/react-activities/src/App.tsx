import './App.css'; // Import styles

import Button from './components/Button';

// In App.tsx, use the Section component to wrap different content areas 
// (e.g., wrap the buttons from Activity 1, wrap some plain text).

import Section from './components/Section';
 
export default function App() {

  const handlePrimaryClick = () => {
    alert('Primary button clicked!');
  };
 
  return (
      <div>
        <h1>Button Examples</h1>
        <Section title="Examples">
          <Button text='Click Me' />
          <Button text='Submit' disabled={true} />
          <Button text='Another One' onClick={handlePrimaryClick} />
        </Section>
        <Section title="Other">
            Hello World!
        </Section>
      </div>
  );
}


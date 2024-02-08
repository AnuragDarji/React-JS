import { RecoilRoot } from 'recoil';
import './App.css';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import FormSummary from './FormSummary';
import CharacterCounter from './CharacterCounter';

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
      <h1>Recoil Complex State Management</h1>
      <NameInput/>
      <EmailInput/>
      <CharacterCounter/>
      <FormSummary/>
      </div>
    </RecoilRoot>
  );
}

export default App;


import './App.css';
import Headder from './hedder';
import MemberList from './memberlist';
import { AboutUs } from './aboutus';
import "./App.css";
import Section from './section';
function App() {
  return (
  <div>
 
    <Headder/>
    <div className="center-screen">

      <Section title="About Us"> 
          <AboutUs/>
      </Section>
      <Section title="Members">
        <MemberList/>
      </Section>
    </div>
  </div>
  );
}

export default App;

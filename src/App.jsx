import {useState} from 'react';
import Lottie from 'lottie-react';
import Celebrate from './assets/happy.json';
const App = () => {

  const [showBirthday, setShowBirthday] = useState(false)

  return (
    <section className="container">
    <button onClick={() => setShowBirthday(true)}  className="showBirthday" >Click to Find Out</button>
    {showBirthday &&  
    <div className="birthday-container" >
      <section className="birthday-message">
        <div className="birthday-header">
          <Lottie animationData={Celebrate} loop={true} autoplay={true} style={{ width: '200px', height: '200px' }} />
          <h1 className="message-title">Happy Birthday Stephen Vizzusi</h1>
        </div>

        <p className="message-paragraph">Dear Stephen,</p>
        <br />
        <p className="message-paragraph">As you celebrate your birthday today, October 12, 2023, I want to take this moment to not just celebrate your birthday but to appreciate you for the incredible person you are.</p>

        <p className="message-paragraph">I remember meeting you on discord, and I never thought you'd turn out to be someone I look up to in terms of discipline, consistency, and personal values.</p>
        <br />
        <p className="message-paragraph">As you add another year to your journey today, I hope it's filled with boundless joy, a new GIRLFRIEND, haha, lol, a new software engineering job at any company you like, and so many other fulfilling new journeys. You deserve every bit of happiness and kindness in the world.</p>
        <br />
        <p className="message-paragraph">I also want to appreciate you for everything you've done for me so far! I will forever be grateful for it all!!!!</p>
        <br />
        <p className="message-paragraph">Happy birthday to you, Stephen!!! <strong>🎈🎉 🎁 CHEERS TO MORE LIFE!</strong></p>
        <br />
        <p className="message-sender">With gratitude and love,</p>
        <p className="message-sender">David Bilson</p>
        <br />
        <br />
        <button onClick={() => setShowBirthday(false)}  className="closeBirthday" >Thank you David</button>
      </section>
    </div>
    }
    </section>
  );
};

export default App;

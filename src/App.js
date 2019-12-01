import React, {Component} from 'react';
import Projects from './Projects';
import SocialMedia from './SocialMedia';
import profile from './assets/profile.png';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio= () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){
        return(
        <div>
            <img src={profile} alt='profile' className='profile'></img>
            <h1>Hello</h1>
            <p>My name is Bri.  I am a software developer.</p>
            <p>I always look forward to working on meaningful projects.</p>
            {
                this.state.displayBio ? (           
                <div>
                    <p>I live in Denver and I code almost everyday.</p>
                    <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                    <p>Besides coding, I love music and exploring my new hometown.</p>
                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                </div>
                ) : (
                    <div>
                        <button onClick ={this.toggleDisplayBio}>Read More</button>
                    </div>
                )
            }
            <hr />
            <Projects />
            <hr />
            <SocialMedia />
        </div>
        )
    }
}

export default App;
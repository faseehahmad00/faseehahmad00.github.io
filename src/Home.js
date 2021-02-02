import './App.css';
import projects from './projects';
import Footer from './Footer';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="Body">
            <h1 style={{ marginLeft: '2%', textAlign: 'left', marginBottom: '0px', color: 'white' }}>PROJECTS</h1>
            <hr style={{ width: '96%' }} />
            <div className="projects">
                {projects.map((a) => {
                    return (
                        <Link to={'/details/'+a.id} className="branch" key={a.id}>
                            <h3 style={{marginTop:'0px',flex:2}}>{a.name}</h3>
                            <p style={{flex:7}}>{a.description}</p>
                            <ul style={{flex:1}}>
                                {
                                    a.techs.map(tech => {
                                        return <li key={tech.id}>{tech.lang}</li>
                                    })
                                }
                            </ul>
                        </Link>
                    );
                })}
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
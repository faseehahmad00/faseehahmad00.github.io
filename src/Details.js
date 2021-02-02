import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import projects from './projects';
import logo from '../src/home.svg'

const Details = () => {
    let [err, seterr] = useState(false);
    const { id } = useParams();
    let det = projects.filter(a => a.id === id);
    if (det.length === 0) {
        seterr(true)
    }
    return (
        <div className="details">
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <h1 style={{ flex: 9.5, textAlign: 'left', marginBottom: '0px', color: 'white' }}>{det[0].name}</h1>
                <Link style={{ flex: 0.5, alignSelf: 'flex-end', display: 'flex' }} to="/">
                    <img style={{ flex: 1, height: '40px', width: '40px', alignSelf: 'flex-end' }} src={logo} alt='.' />
                </Link>
            </div>
            <hr />
            <h2 style={{ color: 'yellow' }}>Description :</h2>
            <p> {det[0].description}</p>
            <h2 style={{ color: 'yellow', marginTop: '30px' }}>Languages :</h2>
            <ul>
                {
                    det[0].techs.map(tech => {
                        return <li key={tech.id}>{tech.lang}</li>
                    })
                }
            </ul>
            <h2 style={{ color: 'yellow' }}>Github :</h2>
            <a href={det[0].link} target='_blank' rel="noreferrer"> {det[0].name}</a>

        </div>
    );
}

export default Details;
import '../styles/Banner.css';
import logo from '../assets/logo.png';

export default function Banner(){
    const titre = 'La maison jungle';
    return (
        <div className='lmj-banner'>
            <img className='lmj-logo' src={logo} />
            <h1 className='lmj-title'>{titre}</h1>
        </div>
    )
}
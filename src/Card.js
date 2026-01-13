import './App.css';
import { Link } from 'react-router-dom';

export function Card ({ to, children }){

    return (
        <Link to={to} className="card">
            {children}
        </Link>
    )
}
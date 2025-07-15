import './App.css';
export function Member({name, city}) {
    return (
    <div className="member-card">
        <h2>{name}</h2>
        <p className='member-subhedding'>{city}</p>
    </div>
    );
}
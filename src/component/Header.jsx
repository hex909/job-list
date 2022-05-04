export default function Header({filter, setFilter}) {
    return (
        <header className="header">
            {filter.length != 0 && <div className="filter__by">
                <ul className="filter__items">
                    {filter.map((item, index) => (
                        <li className="filter__item" key={index}>{item} <span className="clear__this" onClick={() => setFilter(i => i.filter(v => v != item))}></span></li>
                    ))}

                </ul>    
                <button className="clear__all" onClick={() => setFilter([])}>Clear</button>
            </div>}
        </header>
    )
}
import React from 'react'

function Card({data, filterAndSet}) {

    return (
    <section className="cards">
    {data.map(item => (
        <div className="card" key={item.id}>

            <div className="card__info">
                <div className="card__logo">
                    <img src={`${item.logo}`}  alt={`${item.company}`}/>
                </div>


                <div className="card__details">
                    <div className="card__top">
                        <h3 className="card__top__company">{item.company}</h3>
                        {item.new && <span className="card__top__pill card__top__new">new!</span>}
                        {item.featured && <span className="card__top__pill card__top__featured">featured</span>}
                    </div>

                    <div className="card__middle">
                        <h1 className="card__middle__title">{item.position}</h1>
                    </div>

                    <div className="card__bottom">
                        <p className="card__bottom__postedAt">{item.postedAt}</p>
                        <span className="dot__spliter"></span>
                        <p className="card__bottom__contract">{item.contract}</p>
                        <span className="dot__spliter"></span>
                        <p className="card__bottom__location">{item.location}</p>
                    </div>
                </div>

            </div>

            <div className="card__filter">
                <button className="btn btn__filter" data-role={item.role} onClick={(e) => {filterAndSet(e.target, 'role')}}>{item.role}</button>
                <button className="btn btn__filter" data-level={item.level} onClick={(e) => {filterAndSet(e.target, 'level')}} >{item.level}</button>
                {item.languages.map((b, i) => <button key={i} className="btn btn__filter" data-languages={b} onClick={(e) => {filterAndSet(e.target, 'languages')}} >{b}</button>)}
                {     item.tools.map((b,i) => <button key={i} className="btn btn__filter" data-tools={b} onClick={(e) => {filterAndSet(e.target, 'tools')}} >{b}</button>)}
            </div>

        </div>
    ))}
        
    </section>
  )
}

export default Card
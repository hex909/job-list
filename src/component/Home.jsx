import React, { useEffect, useState } from 'react'
import Card from './Card'

function Home({ filterAndSet, filter }) {
  const [data, setData] = useState([])
  const [net, setNet] = useState({isLoading: true, msg: 'Loading...'})

  useEffect(() => {
    fetch('data/data.json').then(res => res.json()).then(d => {
        setNet({...net, isLoading: !net.isLoading})
        setData(d);
    }).catch(err => setNet({...net, msg: <p>Some thing went <span className="err__wrong">wrong</span> please try again after some time....</p>}))
  }, [])

  return (
    <main>
      {
        net.isLoading ? <Loading className={`${net.msg === 'Loading...' ? 'load': "err__load"}`} msg={net.msg}/> :
        
        <Card data={data.filter(i => {
          let { role, level, languages, tools } = i
          const filterLookUp = [role, level, ...languages, ...tools]
          return filter.every(v => filterLookUp.includes(v))
        })} filterAndSet={filterAndSet} />
      
      }
      
    </main>
  )
}

function Loading({msg, className}) {
  return (
    <h1 className={className}>{msg}</h1>
  )
}

export default Home
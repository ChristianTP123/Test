import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { Break } from './funcs';
import { Cat } from './funcs';
import { Site } from './funcs';
import { Coin } from './funcs';
import { cur } from './funcs';


function App() {

  const [pageNum, setPageNum] = useState(1);
  const [coinList, setCoinList] = useState([])
  
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pageNum}&sparkline=false&price_change_percentage=24h`)
      .then(response => {
        return response.json();
      }) 
      .then(json => {
        setCoinList([...coinList, ...json]);
      })
    console.log(coinList) 
  }, [pageNum])

  function add() {
    if (pageNum < 6) {
      return <button onClick={() => {setPageNum(pageNum+1)}} type="button" class="btn btn-secondary">Add 100 more</button>
    }
    else {
      return <h6>Max coins loaded</h6>
    }
  }

  return (
    <div class="App background">
      <header className="App-header">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </header>

      <br></br>
      <br></br>
      <div class="row">
        <Break />
        <Site link="./" text="Home" />
        <Site link="./about" text="About" />
        <Break />
      </div>
      <div class="box">
        <div class="row">
          <div class="col">
            <h3><bold>Top coins</bold></h3>
          </div>
          
          </div>
        
        <br></br>
        <div class="row">
          <div class="col-1">
            <h6><b>Logo</b></h6>
          </div>
          <Cat text="Name" />
          <Cat text="Price" />
          <Cat text="Marketcap" />
          <Cat text="daily % change" />

        </div>

        {coinList.map(coin => {
          return (
            <Coin logo={coin["image"]} name={coin["name"]} price={coin["current_price"]} market={coin["market_cap"]} change={coin["price_change_percentage_24h"].toFixed(2)} id={coin["id"]}/>
          )
        })}
        
        {function add() {
          console.log("hejs")
          if (pageNum < 6) {
            return <button onClick={() => {setPageNum(pageNum+1)}} type="button" class="btn btn-secondary">Add 100 more</button>
          }
          else {
            return <h6>Max coins loaded</h6>
          }
        }}
        {add()}
      </div>



    </div>
  );
}

export default App;



// Add currency change
// Make a loader
// make individual coin pages
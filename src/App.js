import Header from "./Header"
import React, { useState } from "react"
import itemlist from "./itemlist"


function App() {
  const [items, setItems] = React.useState([])

  const handleClick = (event) => {
    const newItem = event.target.innerText;
    setItems([...items, newItem])
  }

  const buttons = [];
  const buttonCreator = () => {
    for(const categorie in itemlist){
      buttons.push(<h2>{categorie}</h2>)
      for(let i = 0; i < itemlist[categorie].length; i++){
        buttons.push(<button onClick={handleClick}>{itemlist[categorie][i]}</button>)
      }
    }
    return buttons;
  }

  return (
    <>
      <Header></Header>
      <ul>
        {items.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
      {buttonCreator()}
    </>
  );
}

export default App;

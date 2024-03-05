import Header from "./Header"
import React, { useState } from "react"
import itemlist from "./itemlist"
import DownloadButton from "./DownloadButton"
import styles from "./style.module.css"
import { type } from "@testing-library/user-event/dist/type"


function App() {
  const [items, setItems] = React.useState([])

  const handleClick = (event) => {
    const newItem = event.target.innerText;
    setItems([...items, newItem])
  }
  const handleAddition = (event) => {
    event.preventDefault();
    const newItem = document.getElementById("addition").value;
    setItems([...items, newItem])
  }

  const buttons = [];
  const buttonCreator = () => {
    for(const categorie in itemlist){
      buttons.push(<h2 className={styles.h3}>{categorie}</h2>)
      for(let i = 0; i < itemlist[categorie].length; i++){
        buttons.push(<button onClick={handleClick} className={styles.h3}>{itemlist[categorie][i]}</button>)
      }
    }
    return buttons;
  }

  const deleteItem = (event) => {
    setItems([])
    const newList = []
    for(const item of items){
      console.log(item)
      if(item === event.target.innerText){
        continue
      }
      else{
        newList.push(item)
      }    
    }
    setItems(newList)
  }

  const downloadList = () => {

    var result = []

    for(const item of items){
      result.push(`set newReminder to make new reminder with properties {name: "${item}"}\n`)
    }
    result.unshift(`tell application "Reminders"\n`)
    result.push("end tell")
    console.log(result)
    
    const file = new Blob(result, {type: "text/plain"})

    const element = document.createElement("a")
    element.href = URL.createObjectURL(file)
    element.download = "shoppingcart.scpt"

    document.body.appendChild(element)
    element.click();
  }


  return (
    <>
      <Header></Header>
      <ul>
        {items.map((item, index) => (<li key={index} id={index} onClick={deleteItem} className={styles.li}>{item}</li>))}
      </ul>
      {buttonCreator()}
      <br></br>
      <button className={styles.downloadButton} onClick={downloadList}>Download shoppinglist</button>
      <form>
        <h3 className={styles.h3}>Add new Item</h3>
        <input type="text" placeholder="Type to add item to list" id="addition"></input>
        <button type="submit" onClick={handleAddition}>Add</button>
      </form>
    </>
  );
}

export default App;

import React from "react";
import styles from "./style.module.css"

function DownloadButton(props){
    return(
        <button className={styles.downloadButton} onClick={props.download}>Download Shoppinglist</button>
    )
}
export default DownloadButton;
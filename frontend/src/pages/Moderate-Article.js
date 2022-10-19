import React, {useEffect, useState} from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";

const ModerateArticles = () => {
    const [articles, setArticles] = useState([{
        title: "",
        authors: "",
        source: "",
        pubyear: "",
        doi: "",
    }])
    
    useEffect(() => {
        fetch("https://speedgroup3-53.herokuapp.com/ModerateArticles").then(res => res.json())
        .then(jsonRes => setArticles(jsonRes))
        .catch(function(error){
            console.log(error)
        })
    })

    return (
      <div>
        <h2>Moderate Articles</h2>
        <Dropdown/>
        <Styles>
          <Table
            data={articles}
            columns={tablecolumns}
          />
        </Styles> 
      </div>
    );
}
export default ModerateArticles;  


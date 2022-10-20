import React, {useEffect, useState, useRef} from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/moderatorTable.js";
import tablecolumns from "../components/tablecolumnsModerator.js";
import Dropdown from "../components/Dropdown.js";

const ModerateArticles = () => {
    const axios = require('axios').default;
    const [articles, setArticles] = useState([{
        title: "",
        authors: "",
        source: "",
        pubyear: "",
        doi: "",
    }])

    const [selectedRows, setSelectedRows] = useState([]);

    const handleDenyClick = () =>{
        const arr = []
        Object.keys(selectedRows)
        .forEach(key => 
            arr.push({
                name: key, value: selectedRows[key]
            }))

        axios.delete("http://localhost:5000/ModerateArticles/"+arr[0].value._id)
    }

    const handleAcceptClick = () =>{
        const arr = []
        Object.keys(selectedRows)
        .forEach(key => 
            arr.push({
                name: key, value: selectedRows[key]
            }))
        
        const selectedArticle = {
            title: arr[0].value.title,
            authors: arr[0].value.authors,
            source: arr[0].value.source,
            pubyear: arr[0].value.pubyear,
            doi: arr[0].value.doi,
        }

        axios.post("http://localhost:5000/ModerateArticles", selectedArticle)
        axios.delete("http://localhost:5000/ModerateArticles/"+arr[0].value._id)
    }

    var check = useRef(false);    

    useEffect(() => {
        fetch("https://speedgroup3-53.herokuapp.com/ModerateArticles")
        .then(res => res.json())
        .then(jsonRes => setArticles(jsonRes))
        .catch(function(error){
            console.log(error)
        })

        if(selectedRows.length === 0){
            check.current = true
        }else{
            check.current = false
        }
    })

    return (
      <div>
        <h2>Moderate Articles</h2>
        <Dropdown/>
        <Styles>
          <Table
            data={articles}
            columns={tablecolumns}
            setSelectedRows={setSelectedRows}
          />
        </Styles>
            <button 
            type="button" 
            disabled = {check.current}
            onClick = {handleAcceptClick}
            >
                Accept
            </button> 
            <button 
            type="button" 
            disabled = {check.current}
            onClick = {handleDenyClick}
            >
                Deny
            </button> 
            {}
      </div>
    );
}
export default ModerateArticles;  


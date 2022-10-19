import React, {useEffect, useState, useRef} from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/moderatorTable.js";
import tablecolumns from "../components/tablecolumnsModerator.js";
import Dropdown from "../components/Dropdown.js";

const ModerateArticles = () => {
    const [articles, setArticles] = useState([{
        title: "",
        authors: "",
        source: "",
        pubyear: "",
        doi: "",
    }])

    const [selectedArticle, setSelectedArticles] = useState([{
        title: "",
        authors: "",
        source: "",
        pubyear: "",
        doi: "",
    }])

    const [selectedRows, setSelectedRows] = useState([]);

    const handleClick = () =>{
        console.log(JSON.parse(selectedRows))
    }

    var check = useRef(false);    

    useEffect(() => {
        fetch("https://speedgroup3-53.herokuapp.com/ModerateArticles").then(res => res.json())
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
        <p>{JSON.stringify(selectedRows)}</p>
            <button 
            type="button" 
            disabled = {check.current}
            >
                Accept
            </button> 
            <button 
            type="button" 
            disabled = {check.current}
            onClick = {handleClick}
            >
                Deny
            </button> 
      </div>
    );
}
export default ModerateArticles;  


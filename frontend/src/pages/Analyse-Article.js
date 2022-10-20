import React, {useEffect, useState, useRef} from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/moderatorTable.js";
import tablecolumns from "../components/tablecolumnsModerator.js";
import Dropdown from "../components/Dropdown.js";

const AnalyseArticles = () => {
    //const axios = require('axios').default;
    const [articles, setArticles] = useState([{
        title: "",
        authors: "",
        source: "",
        pubyear: "",
        doi: "",
    }])

    const [selectedRows, setSelectedRows] = useState([]);

    var check = useRef(false);    

    useEffect(() => {
        fetch("https://speedgroup3-53.herokuapp.com/AnalyseArticles")
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
        <h2>Analyse Articles</h2>
        <p>This page will allow analysts to analyse articles</p>
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
            >
                Accept
            </button> 
            <button 
            type="button" 
            disabled = {check.current}
            >
                Deny
            </button> 
            {}
      </div>
    );
}
export default AnalyseArticles;  


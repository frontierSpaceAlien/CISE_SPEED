import React, {useEffect, useState} from "react";
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

    const [selectedRows, setSelectedRows] = useState([]);

    
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
            setSelectedRows={setSelectedRows}
          />
        </Styles>
        <pre>
        <code>
          {JSON.stringify(
            {
              selectedRows
            },
            null,
            2
          )}
        </code>
      </pre>
            <button type="button">
                Accept
            </button> 
            <button type="button">
                Deny
            </button> 
      </div>
    );
}
export default ModerateArticles;  


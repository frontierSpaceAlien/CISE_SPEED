import React from "react";
import SubmissionForm from "../components/SubmissionForm";
 
const SubmitArticle = () =>  {
     return (
      <div>
        <h2>Submit Article</h2>
            <p>This will be a form to allow submitters to submit an article for possible inclusion in our SEED repo.</p>
            <p>Also the display table of evidence levels for different claims will show here for the SE practice selected</p>
            <SubmissionForm/>
        </div>
    );
}
 
export default SubmitArticle;

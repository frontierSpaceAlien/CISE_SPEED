import React, { useState } from "react";
import { useForm } from "react-hook-form";


const SubmissionForm = () => {
  const axios = require('axios').default;
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState({
    title: '',
    authors:'',
    source:'',
    publishedYear:'',
    doi:''
  });
  
  function onChange(e){
    const {name, value} = e.target
    setResult(result => {
      return {
        ...result, 
        [name]: value
      }
    })
    console.log(result)
  }

  function onSubmit(e){
    console.log(result)
    const newArticle ={
      title: result.title,
      authors: result.authors,
      source: result.source,
      publishedYear: result.publishedYear,
      doi: result.doi
    }

    axios.post('https://speedgroup3-53.herokuapp.com/SubmitArticle', newArticle)
  }  
  return (
      
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input name = "title" placeholder="Title" onChange={onChange}/>
      <p><input name = "authors" placeholder="Authors" onChange={onChange}/></p>
      <p><input name = "source" placeholder="Source" onChange={onChange} /></p> 
      <p><input name = "publishedYear" placeholder="Publication Year" onChange={onChange}/></p>
      <p><input name = "doi" placeholder="DOI" onChange={onChange}/></p>
     
      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
      </select>

      <p></p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;

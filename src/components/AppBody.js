import React, { useState } from "react";
import ProcessFile from "./ProcessFile";
import UnauthenticatedProcessFile from "./UnauthenticatedProcessFile";
import {keyActions} from "../actions/keyActions";
import {CSSTransition} from "react-transition-group";

function AppBody() {

    var [apiKey, setApiKey] = useState("")
    var [validKey, setvalidKey] = useState(false)
    var [validationErrors, setValidationErrors] = useState("")

    var handleChange = event => {
        setApiKey(event.target.value);
    }
    
    var handleSubmit = event => {
        keyActions.validKey(apiKey).then(result => {
            if (result.ValidKey === true){
                setvalidKey(true)
              return;
            }
    
            setValidationErrors(result.Message);
            return;
        })
        event.preventDefault();
    } 

    if (validKey === true){
        return (
            <CSSTransition in={validKey} timeout={{enter: 500, exit: 500}} classNames="results">
                <ProcessFile apiKey={apiKey}/>
            </CSSTransition>
        )
    }
  
    return (       
        <> 
            <UnauthenticatedProcessFile/>
            <div className="api-key-input">
                <h1>Please enter a valid API Key:</h1>  
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Api Key" onChange={handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div className="validationErrors">
                <p>{validationErrors}</p>
            </div>
        </>
    )
}

export default AppBody;

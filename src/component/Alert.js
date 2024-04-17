import React from "react";

function alert(props){
    const capatlize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatlize(props.alert.type)}</strong> : {props.alert.meg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
}

export default alert
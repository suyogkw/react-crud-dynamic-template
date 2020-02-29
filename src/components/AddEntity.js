import React from 'react';

// props {columnDetails,handleOnSubmit,onSubmitText}

const createInsertFormField=(columnDetail)=>{
    return (
        <input
            key={columnDetail.id}
            type={columnDetail.type}
        ></input>)
}

export default (props) => (
    <div>
    <p>Insert new {props.entityDetails.id}</p>
    {props.entityDetails.columns.map((columnDetail)=>createInsertFormField(columnDetail))}
    <button className="btn-submit" onClick={props.handleOnSubmit}>{props.onSubmitText || 'Submit'}</button>
    <button className="btn-cancel" onClick={props.handleOnCancel}>{props.onCancelText || 'Cancel'}</button>
    </div>
    );
import React from 'react';

// props {entityDetails,EntityData,handleOnSubmit,onSubmitText}

const createDeleteFormField=(columnDetail, entityData)=>{
    return (
        <input
            key={columnDetail.id}
            type={columnDetail.type}
            text={entityData[columnDetail.id]}
        ></input>)
}

export default (props) => (
    <div>
    <p>Insert new {props.entityDetails.id}</p>
    {props.entityDetails.columns.map((columnDetail)=>createDeleteFormField(columnDetail,props.entityData))}
    <button className="btn-submit" onClick={props.handleOnSubmit}>{props.onSubmitText || 'Delete'}</button>
    <button className="btn-cancel" onClick={props.handleOnCancel}>{props.onCancelText || 'Cancel'}</button>
    </div>
    );
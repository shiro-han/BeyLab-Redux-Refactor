import React from 'react';
import {connect} from 'react-redux'

function CreateForm(props) {

    const changeAction = (e) => {
        return {
            type: 'FORM_CHANGE',
            name: e.target.name,
            value: e.target.value
        }
    }

    const changeHandler = (e) => {
        console.log(changeAction(e))
        props.dispatch(changeAction(e))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // if (state.name && state.img){
        //     props.addBey(state);
        // }
        // else {
        //     window.alert("Fill out both fields of the form")
        // }
    }

    console.log(props.addFormValues)

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <input onChange={changeHandler} type="text" name="name" placeholder="name" value={props.addFormValues.name}/>
                <input onChange={changeHandler} type="text" name="img" placeholder="image url" value={props.addFormValues.img}/>
                <input type="submit" value="Add Bey"/>
            </form>
        </div>
    )
}

const msp = (state) => {
    return {
        addFormValues: state.addFormValues
    }
}

export default connect(msp)(CreateForm);
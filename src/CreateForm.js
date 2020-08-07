import React from 'react';

class CreateForm extends React.Component {
    state = {
        name: "",
        img: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.img){
            this.props.addBey(this.state);
        }
        else {
            window.alert("Fill out both fields of the form")
        }
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} type="text" name="name" placeholder="name" value={this.state.name}/>
                    <input onChange={this.changeHandler} type="text" name="img" placeholder="image url" value={this.state.img}/>
                    <input type="submit" value="Add Bey"/>
                </form>
            </div>
        )
    }
}

export default CreateForm;
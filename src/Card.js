import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            name: '',
            userImage: ''
        }
    }

    checkUserID = (value) => {
        if(!isNaN(value)) {
            this.setState({userId: value})
        }
    }

    fetchUserDetail = () => {
        const userId = this.state.userId;
        if(userId) {
            fetch("https://reqres.in/api/users/"+userId)
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.data) {
                        this.setState({
                            name: result.data.first_name+' '+result.data.last_name,
                            userImage: result.data.avatar
                        })
                    }
                    else {
                        this.setState({userId: '', name: '', userImage: ''})
                        alert('Please enter a valid User ID');
                    }     
                },
                (error) => {
                    console.log(error)
                }
            )
        }
        else {
            alert('Please enter a userId')
        }
    }

    render() {
        return (
            <Fabric>
                <div className='main-card-container'>
                    <TextField className='txtfield-userid' placeholder='Enter User ID' onChanged={this.checkUserID}/>
                    <DefaultButton text='Get Details' className='btn-get-details' onClick={this.fetchUserDetail}/>
                    <div className='card'>
                        <div className='image-container'>
                            <img src={this.state.userImage}/>
                        </div>
                        <div className='details-container'>
                            <span>ID: {this.state.userId}</span>
                            <span>Name: {this.state.name}</span>
                        </div>
                    </div>
                </div>
            </Fabric>
        );
  }
}

export default Card;
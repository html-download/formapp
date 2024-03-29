import React, {Component} from 'react';
/* Import Components */
import Inputtext from '../components/input-control.jsx';

import Selecttext from '../components/select-control.jsx';
class Profile extends Component{
    constructor(props){
        super(props);

        this.input = {};
     
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //console.log("this.input", this.input);
    }
    handleFirstName(e) {
        e.preventDefault();
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            first_name : this.input.first_name.value(),
            last_name : this.input.last_name.value(),
        }

console.log("data", data);
    }

    render() {

        return(
            <div>
             <section className="subpage-bg">
                <h2 className="wow fadeInUp">My Profile</h2>
            </section>

            <section className="boxed-container myaccount">
                <div className="container wow fadeInUp md">
                    <h3 className="title-border wow fadeInUp">Personal Information</h3>
                    <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6">
                                   <Inputtext 
                                    ref={(c)=> (this.input.first_name = c)}
                                    className="form-control"
                                    name="first_name"
                                    title="Full Name"
                                    type="text"
                                    //value={this.input.value}  
                                    placeholder="Enter Your Name"
                                    //onChange={this.handleFirstName}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <Inputtext 
                                    ref={(c)=> (this.input.last_name = c)}
                                    className="form-control"
                                    name="last_name"
                                    title="Last Name"
                                    type="text"
                                    //value={this.input.value}  
                                    placeholder="Enter Your LastName"
                                    //onChange={this.handleFirstName}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <Selecttext/>
                                </div>

                                <div className="col-sm-6">
                                     <Inputtext />
                                </div>
                            </div>

                            <h3 className="title-border wow fadeInUp">Contact Information</h3>
                            <div className="row">
                                <div className="col-sm-6">
                                      <Inputtext />
                                </div>
                                <div className="col-sm-6">
                                     <Inputtext />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <label for="changepassword" className="switchup label">
                                        <input id="changepassword" type="checkbox" /> Are you Change password?
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="show-hide">
                                <h3 className="title-border">Change Password</h3>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Current password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>New password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Confirm password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <label for="newsletter" className="switchup label">
                                        <input id="newsletter" checked type="checkbox" /> I would like to subscribe for Newsletters
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="action full_row text-left">
                                <button className="btn btn-primary loader">Update</button>
                            </div>
                    </form>
                </div>
            </section>
        </div>
              )

        }

}

export default Profile;
import React, {Component} from 'react';

class Selecttext  extends Component {

constructor(props){
super(props);

}

render(){

return(
			<div className="form-group">
                                <label>Gender</label>
                                <select class="form-control">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>

    )


  }
}

export default Selecttext;
import React, {Component} from 'react';

class Inputtext extends Component {

constructor(props){
super(props);

}


value(){
	return this.name.value;
   } 



render(){

return(

				 <div className="form-group">
                        <label>{this.props.name}</label>
                        <input 
                        ref={(c) => (this.name = c)}
                        className={this.props.className}
                        name={this.props.name}
                        type={this.props.type}
                        value={this.props.value}
                        onChange={this.props.onChange}
                         />
                    </div>



    )


  }

}

export default Inputtext;
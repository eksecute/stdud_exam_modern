import * as React from 'react';

export default class EditItemBookings extends React.Component{

    state = {
      Title: null,
      Description: null,
      smthIsDamaged: null,
      Houses: null,
      tenant: null,
    }

  componentDidMount() {
		//get query to be placed
		
  }

  onChangeTitle = (e) => {
    this.setState({
      Title: e.target.value
    })
  }
  onChangeDescription = (e) => {
    this.setState({
      Description: e.target.value
    })
	}
	onChangeSmthIsDamaged = (e) => {
    this.setState({
      smthIsDamaged: e.target.value
    })
	}
	onChangeHouses = (e) => {
    this.setState({
      Houses: e.target.value
    })
  }
	onChangeTenant = (e) => {
    this.setState({
      tenant: e.target.value
    })
	}
	
  onSubmit = (e) => {
    e.preventDefault();

    const booking = {
      Title: this.state.Title,
      Description: this.state.Description,
      smthIsDamaged: this.state.smthIsDamaged,
      Houses: this.state.Houses,
      tenant: this.state.tenant,
    };

    //post query to be placed
  }

  render() {
    return (

        <div>
          <div>
            <h3>Edit booking</h3>
            <form onSubmit={this.onSubmit}>
							{/* title */}
              <div>
                <label>New Title: </label>
                <textarea
                    value={this.state.Title}
                    onChange={this.onChangeTitle} >
                </textarea>
              </div>
							{/* descr */}
              <div>
                <label>New Description: </label>
                <textarea
                    value={this.state.Description}
                    onChange={this.onChangeDescription} >
                </textarea>
							</div>
              <div>
                <input type="submit" value="Edit!" className="btn btn-primary"/>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

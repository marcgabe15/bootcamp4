import React, {Component} from 'react'

class AddBuilding extends Component {
    constructor(props) {
        super(props)

    }
    handleChange(e) {
      this.props.handleChange(e)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.handleSubmit(e)
        // if(!(this.prop.id === '') &&
        // !(this.prop.code === '') &&
        // !(this.prop.latitude === '') &&
        // !(this.prop.longitude === '') &&
        // !(this.prop.name === '') &&
        // !(this.prop.address === '')
        // ) {
        //   var data = this.props.actualdata
        //   data.push(
        //     {
        //       id: this.state.id,
        //       code: this.state.code,
        //       name: this.state.name,
        //       coordinates: {
        //         latitude: this.state.latitude,
        //         longitude: this.state.longitude
        //       },
        //       address: this.state.address
        //     }
        //   )
        //   handle
        // }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                  <h4>Add a Building?</h4>
                  <label>
                    the ID
                    <input type="text" style={{margin: '5px', height: '2rem'}}  name="id" value={this.props.id} onChange={this.handleChange.bind(this)}></input>
                  </label>
                  <label>
                    Code
                    <input type="text" style={{margin: '5px', height: '2rem'}}  name="code" value={this.props.code} onChange={this.handleChange.bind(this)}></input>
                  </label>
                  <label>
                    Name
                    <input type="text" style={{margin: '5px', height: '2rem'}}  name="name" value={this.props.name} onChange={this.handleChange.bind(this)}></input>                    
                  </label>
                  <label>
                    Latitude
                    <input type="text" style={{margin: '5px', height: '2rem'}} name="latitude" value={this.props.latitude} onChange={this.handleChange.bind(this)}></input>
                  </label>
                  <label>
                    Longitude
                    <input type="text" style={{margin: '5px', height: '2rem'}}  name="longitude" value={this.props.longitude} onChange={this.handleChange.bind(this)}></input>
                  </label>
                  <label>
                    Address
                    <input type="text" style={{margin: '5px', height: '2rem'}}  name="address" value={this.props.address} onChange={this.handleChange.bind(this)}></input>
                  </label>                  
                  <input style={{textAlign: 'center'}} type="submit" value="Submit"/>
                </form>
        )
    }
}

export default AddBuilding;
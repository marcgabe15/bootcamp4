import React, {Component} from 'react'


class RemoveBuilding extends Component {
    constructor(props){
        super(props)
    }
    handleDelete(e) {
        e.preventDefault()
        this.props.handleDelete(e)
    }
    handleChangeDelete(e) {
        this.props.handleChangeDelete(e)
    }
    render() {
        var datalist = this.props.actualdata.map(directory => {
            return (
              <option value={directory.id}>{directory.code}</option>
            );
          })
        return (
            <form onSubmit={this.handleDelete.bind(this)}>
            <label>
              <h4>Delete which one?</h4>
              <select value={this.props.value} onChange={this.handleChangeDelete.bind(this)}>
              {datalist}
              </select>
              <input type="submit" value="Submit"/>
            </label>
          </form>
        )
    }
}

export default RemoveBuilding;
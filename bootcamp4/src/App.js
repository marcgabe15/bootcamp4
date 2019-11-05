import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'
import SimpleDialog from './components/SimpleDialog'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actualdata: this.props.data,
      filtertext: '',
      open: false,
      selectedBuilding: 0,
      id: '',
      code: '',
      name: '',
      latitude: '',
      longitude: '',
      address: '',
      value: ''
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleOpen() {
    this.setState({
      open: true
    })
  }
  handleClose() {
    this.setState({
      open: false
    })
  }
  filterUpdate(value) {
    this.setState({
      filtertext: value
    })
  }
  handleChange(e) {
    
    let change = {}
    
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  handleChangeDelete(e) {
    this.setState({
      value: e.target.value
    })
  }
  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }
  handleSubmit(event) {
    event.preventDefault()
    if(!(this.state.id === '') &&
    !(this.state.code === '') &&
    !(this.state.latitude === '') &&
    !(this.state.longitude === '') &&
    !(this.state.name === '') &&
    !(this.state.address === '')
    ) {
      var data = this.state.actualdata
      data.push(
        {
          id: this.state.id,
          code: this.state.code,
          name: this.state.name,
          coordinates: {
            latitude: this.state.latitude,
            longitude: this.state.longitude
          },
          address: this.state.address
        }
      )
      this.setState({
        actualdata: data
      })
    }
  }
  handleDelete(event) {
    event.preventDefault()
    console.log(this.state.value)
    let datad = this.state.actualdata
    let thedata = datad.filter((directory) => {
      return directory.id != this.state.value
    })
    this.setState({
      actualdata: thedata
    })
  }

  render() {
    
    // var datalist = this.state.actualdata.map(directory => {
    //   return (
    //     <option value={directory.id}>{directory.code}</option>
    //   );
    // })

    return (
      <div className="bg">
        <div className="row">
          <h1 style={{textAlign: "center"}}>UF Directory App</h1>
        </div>

        <Search
          filtertext={this.state.filtertext}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div style={{fontSize: "30px", paddingBottom: "5px",textAlign: "center"}}>Code Building</div>
              <div className="tableWrapper">
                <div className="table table-striped table-hover">
                  <BuildingList
                    data={this.state.actualdata}
                    filtertext={this.state.filtertext}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </div>
              </div>
            </div>
            <div className="column2">
                <Paper style={{margin: '10px', position: 'relative'}}>
                  <RemoveBuilding
                    value={this.state.value}
                    actualdata={this.state.actualdata}
                    handleDelete={this.handleDelete.bind(this)}
                    handleChangeDelete={this.handleChangeDelete.bind(this)}
                  />
                  {/* <form onSubmit={this.handleDelete.bind(this)}>
                    <label>
                      <h4>Delete which one?</h4>
                      <select value={this.state.value} onChange={this.handleChangeDelete.bind(this)}>
                      {datalist}
                      </select>
                      
                      <input type="submit" value="Submit"/>
                    </label>
                  </form> */}
                </Paper>
                <Paper style={{margin: '10px', position: 'relative'}}>
                  <AddBuilding
                    id={this.state.id}
                    code={this.state.code}
                    name={this.state.name}
                    longitude={this.state.longitude}
                    latitude={this.state.latitude}
                    address={this.state.address}
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}

                  />
              </Paper>
              <Paper className="thepaper">
                <ViewBuilding 
                  data={this.state.actualdata}
                  selectedBuilding={this.state.selectedBuilding}
                />
              </Paper>
            </div>
          </div>
          <Credit />
          {/* <SimpleDialog open={this.state.open} handleClose={this.handleClose}/> */}
        </main>
      </div>
    );
  }
}

export default App;

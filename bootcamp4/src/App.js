import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtertext: '',
      selectedBuilding: 0
    }
  }

  filterUpdate(value) {
    this.setState({
      filtertext: value
    })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

  render() {
    
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
                    data={this.props.data}
                    filtertext={this.state.filtertext}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </div>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.props.data}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;

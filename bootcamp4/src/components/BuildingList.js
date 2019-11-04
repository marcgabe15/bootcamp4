import React from 'react';
import Paper from '@material-ui/core/Paper'
class BuildingList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentIndex: 0
		}
	}
	selectedUpdate(id) {
		this.props.selectedUpdate(id)
		// this.props.selectedUpdate(val)

	}
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filtertext } = this.props;
		var buildingList
		if (filtertext === null || filtertext === '') {
			buildingList = data.map(directory=> {
				return (
					<Paper className="stuff" onClick={this.selectedUpdate.bind(this, directory.id)} key={directory.id}>
					<div>{directory.code} {directory.name}</div>
					
					</Paper>
				)
			})
		}else {
		 buildingList = data.filter(directory => {
			return directory.name.toLowerCase().indexOf(filtertext) >= 0
		}).map(directory => {
			return (
				<Paper elevation={20} className="stuff" onClick={this.selectedUpdate.bind(this, directory.id)} key={directory.id}>
					<div>{directory.code} {directory.name}</div>
				</Paper>
			);
		});
	}

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuildingList;

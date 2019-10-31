import React from 'react';

class ViewBuilding extends React.Component {
	
	render() {
		const {data, selectedBuilding} = this.props
		if (selectedBuilding === null || selectedBuilding === 0) {
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		} else {
			var buildingInfo = data.find((entry) => entry.id == selectedBuilding)
			console.log(buildingInfo)
			var id = (buildingInfo.id === null || buildingInfo.id === undefined) ? 0 : buildingInfo.id
			var code = (buildingInfo.code === null || buildingInfo.code === undefined)? "N/A" : buildingInfo.code
			var name = (buildingInfo.name === null || buildingInfo.name === undefined)? "N/A" : buildingInfo.name
			var latitude = (buildingInfo.coordinates === null || buildingInfo.coordinates === undefined)? "N/A" : buildingInfo.coordinates.latitude
			var longitude = (buildingInfo.coordinates === null || buildingInfo.coordinates === undefined)? "N/A" : buildingInfo.coordinates.longitude
			var address = (buildingInfo.address === null || buildingInfo.address === undefined)? "N/A" : buildingInfo.address
			return (
				<div>
					<div>{id}</div>
					<div>{code}</div>
					<div>{name}</div>
					<div>{latitude}</div>
					<div>{longitude}</div>
					<div>{address}</div>
				</div>
			)
		}
	}
}
export default ViewBuilding;

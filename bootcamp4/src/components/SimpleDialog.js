import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'


class SimpleDialog extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClose() {
        this.props.handleClose()
    }


    render() {
        return (
            <Dialog onClose={this.handleClose} open={this.props.open}>
                <DialogTitle>Add Title</DialogTitle>
            </Dialog>
        )
    }
}

export default SimpleDialog
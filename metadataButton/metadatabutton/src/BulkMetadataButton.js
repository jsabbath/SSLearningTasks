import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {creatMuiTheme} from '@material-ui/core/styles';
import './style.css';
 
const style = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    },
    
});

class BulkMetadataButton extends React.Component {	    
		
		render(){
				return (
					<div>
								<h3>Stuff</h3>					
							    <p>
								
								</p>
								<div>
									<input 
									accept="*"
									className={"hidden"}
									id="metadata-upload-input"
									multiple
									type="file" 
									//ref={input => {this.fileInput = input;}} 
									/>
	
								</div>
								<label htmlFor="metadata-upload-input">
								<Button variant="raised" color="secondary" component="span">
									Upload Metadata
									
								</Button>
								</label>
					</div>
			);
		}
	
}

export default BulkMetadataButton;
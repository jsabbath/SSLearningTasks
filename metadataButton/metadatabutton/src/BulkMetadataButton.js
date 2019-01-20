import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import {creatMuiTheme} from '@material-ui/core/styles';
import './style.css';
import Grid from '@material-ui/core/Grid';
 
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
		constructor(props) {
            super(props);
            this.state = { contentFileName: "" };
        }
		render(){
				return (
					<div>
								<h3>Metadata Spreadsheet Upload</h3>					
							    <p>
								
								</p>
								
                                <Grid item xs = {8}>
                                    <TextField
                                        id="metadataFile"
                                        label="Metadata File"
                                        multiline
                                        disabled
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                       // error={this.state.fieldErrors.file ? true : false}
                                        value={this.state.contentFileName}
                                        margin="normal"
                                    />
									<input 
									accept="*"
									className={"hidden"}
									id="metadata-upload-input"
									multiple
									type="file" 
									//ref={input => {this.fileInput = input;}} 
									/>
	
								<label htmlFor="metadata-upload-input">
								<Button variant="contained" component="span">
									Upload Metadata
									
								</Button>
								</label>
                                </Grid>
					</div>
			);
		}
	
}

export default BulkMetadataButton;
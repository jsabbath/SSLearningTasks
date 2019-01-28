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
            this.state = {
            /*id: props.content.id,
            name: props.content.name,
            source: props.content.source,
            title: props.content.title,
            creators: labels.creators,
            selectedDate: props.content.updatedDate,
            description: props.content.description,
            coverages: labels.coverages,
            libraryVersion: props.content.libraryVersion,
            menuFolder: props.content.menuFolder,
            subFolder: props.content.subFolder,
            subjects: labels.subjects,
            keywords: labels.keywords,
            workareas: labels.workareas,
            languages: labels.languages,
            catalogers: labels.catalogers,
            copyright: props.content.copyright,
            rightsStatement: props.content.rightsStatement,
            contributorName: props.content.contributorName,*/
            contentFile: null,
            fieldErrors: {},
            //contentFileName: props.content.originalFileName ? props.content.originalFileName : '',
        };
            this.handleFileSelection = this.handleFileSelection.bind(this);
            this.saveContent = this.saveContent.bind(this);
        }
        
        
        handleFileSelection(evt) {
            evt.persist();
            const file = evt.target.files[0];
            if (!Boolean(file)) { // If there is no file selected.
                return;
            }
            this.setState((prevState, props) => {
                const newState = {
                    contentFile: file,
                    contentFileName: file.name,
                    fieldErrors: prevState.fieldErrors,
                };
                //newState.fieldErrors['file'] = null;
                return newState;
            });
        }
        
        saveContent() {
            var Papa = require('papaparse'); 
            
            Papa.parse(this.state.contentFile, {
                complete: function(results) {
                    console.log(results);
                }
            });

        }
        
		render(){
				return (
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
                                        value = {this.state.contentFileName}
                                        margin="normal"
                                    />
									<input 
									accept=".csv"
									className={"hidden"}
									id="metadata-upload-input"
									multiple
                                    
									type="file" 
									ref={input => {this.fileInput = input;}} 
                                    onChange={this.handleFileSelection}
									/>
	
								<label htmlFor="metadata-upload-input">
								<Button variant="contained" component="span">
                                    Browse
								</Button>
								</label>
                                <div style={{marginTop: '20px'}}> </div>
                                <Button variant="contained" component="span" onClick={this.saveContent}>
                                    Save
                                </Button>
                                </Grid>
					
			);
		}
	
}

export default BulkMetadataButton;
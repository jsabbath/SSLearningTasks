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
            id: "",
            name: "",
            source: "",
            title: "",
            creators: "",
            selectedDate: "",
            description: "",
            coverages: "",
            libraryVersion: "",
            menuFolder: "",
            subFolder: "",
            subjects: "",
            keywords: "",
            workareas: "",
            languages: "",
            catalogers: "",
            copyright: "",
            rightsStatement: "",
            contributorName: "Barry",
            contentFile: null,
            fieldErrors: {},
            //contentFileName: props.content.originalFileName ? props.content.originalFileName : '',s
            
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
            var thisData = [];
            var that = this;
            console.log(that.state);
            Papa.parse(this.state.contentFile, {
                header:true,
                complete: function(results) {
                    //console.log(results);
                   
                    for (var i = 0; i < results.data.length-1; i++)  {
                    
                       thisData[i] = results.data[i];
                        console.log(thisData[i]);
                    var object = thisData[i];
                    // console.log(object);
                    that.setState({
                                contributorName: object["Contributor Name"],
                                copyright: object["Copyright"],
                                coverages: object["Coverage"],
                                creators: object["Creator"],
                                description: object["Description"],
                                keywords: object["Keywords"],
                                languages: object["Language"],
                                libraryVersion: object["Library Version"],
                                menuFolder: object["Menu Item/Main Folder"],
                                rightsStatement: object["Rights Statement"],
                                source: object["Source"],
                                subFolder: object["Sub-Item/Subfolders"],
                                subjects: object["Subject"],
                                title: object["Title"],
                                workareas: object["Work Area"],}
                    );
     
                    }
                    
                                        const payload = new FormData();

                    for (var property in object) {
                        if(object.hasOwnProperty(property)) {
                            if(object[property] === "")
                                object[property] = "No Value";
                            //console.log(property + " : " + object[property]);
                            payload.append(property, object[property]);
                             
                        }
                    }
                    
                    /*for (var keys of payload.keys()) {
                        console.log(keys);
                    }*/
                    console.log(that.state);
                   
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
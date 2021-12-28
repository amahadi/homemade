import React from "react";
import {Grid, Paper, TextField} from "@mui/material";

export default function GeneralForm({
    attributes,
    setName
}){

    const handleNameFieldChange = (event) => {
        setName(event.target.value);
    }

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid 
                item
                xs={6}
                md={6}
                lg={4}
            >
                General
            </Grid>
            <Grid 
                item
                xs={6}
                md={6}
                lg={8}
            >
                <Paper
                    sx={{
                        width: "100%",
                        padding: "20px"
                    }}>
                        <TextField 
                            id="id__name-textfield" 
                            label="Name"
                            value={attributes.name} 
                            variant="outlined" 
                            fullWidth
                            onChange={handleNameFieldChange}
                        />
                </Paper>  
            </Grid>
        </Grid>
    );
}
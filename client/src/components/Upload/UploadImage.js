import React, { useState } from "react";

import { CardContent, Grid, Fab, Typography } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

const UploadImage = () => {
  const [mainState, setMainState] = useState("initial");
  const [imageUploaded, setImageUploaded] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setSelectedFile({
        selectedFile: [reader.result],
      });
    };
    console.log(url); // Would see a path?

    setMainState("uploaded");
    setSelectedFile(event.target.files[0]);
    setImageUploaded(1);
  };

  return (
    <>
      <Typography variant="h5">Upload Face Images</Typography>
      <CardContent>
        <Grid container justify="center" alignItems="center">
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleUploadClick}
          />
          <label htmlFor="contained-button-file">
            <Fab component="span">
              <AddPhotoAlternateIcon />
            </Fab>
          </label>
        </Grid>
      </CardContent>
    </>
  );
};

export default UploadImage;

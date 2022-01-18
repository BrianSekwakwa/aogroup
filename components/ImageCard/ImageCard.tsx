import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ImageCard({ options }: any) {
  const { imagePath, title, paragraph } = options;
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <Image src={imagePath} layout="fill" objectFit="cover" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {paragraph}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ImageCard;

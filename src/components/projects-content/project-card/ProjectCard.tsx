import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./project-card.module.scss";
import { ProjectsDataTypes } from "../types";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

export default function ProjectCard({
  title,
  content,
  image,
  github,
  webpage,
  mobile,
}: ProjectsDataTypes) {
  
  return (
    <Card className={classes.container} sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="150" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <div className={classes.mobile}>
          Mobile version:{" "}
          {mobile === true ? (
            <DoneIcon sx={{ fill: "rgb(8, 230, 8)" }} />
          ) : (
            <CloseIcon sx={{ fill: "#fa163f" }} />
          )}
        </div>
      </CardContent>
      <CardActions className={classes.actions} sx={{ padding: "16px" }}>
        <a target="_blank" href={webpage}>
          <Button size="medium">Website</Button>
        </a>
        <a target="_blank" href={github}>
          <Button size="medium">GitHub</Button>
        </a>
      </CardActions>
    </Card>
  );
}

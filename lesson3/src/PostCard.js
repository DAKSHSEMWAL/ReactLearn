import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function PostCard({ post }) {
  return (
    <Card style={{ marginBottom: "16px" }}>
      <CardContent style={{ textAlign: "left" }}>
        <Typography variant="h6" component="div">
          Title: {post.title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              User ID: {post.userId}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Post ID: {post.id}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary">
          Body: {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default PostCard;

// Usage Example:
// <PostCard post={{ userId: 1, id: 1, title: 'Sample Title', body: 'Sample Body Text' }} />

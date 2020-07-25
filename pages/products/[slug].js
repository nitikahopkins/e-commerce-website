import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Tabs from "../../components/products/Tabs";
import { data } from "../../mocks/products.json";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function CenteredGrid(xs) {
  const router = useRouter();
  const classes = useStyles();
  console.log(xs, router.query.slug);

  return 1;
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          Image Slider
        </Grid>
        <Grid item xs={6}>
          <h1>{product.title}</h1>
          <div>{product.starRating}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Tabs
            description={product.description}
            reviews={product.reviews}
            details={product.details}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = data.map(({ slug }) => `/products/${slug}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await data.find(({ slug }) => {
    slug === params.slug;
  });
  return { props: { product } };
}

export default CenteredGrid;

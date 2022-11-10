// TODO: create a component that displays a single bakery item

import {
    Box, Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Grid,
    Typography
} from "@mui/material";
function BakeryItem(props){
    const item = props.item;
    return(
        <Grid item xs={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 300, minHeight: 200, minWidth: 200}}>
                <CardMedia
                    component="img"
                    height="194"
                    image= {item.image}
                    alt={item.name}
                />
                <CardContent>
                    <Typography variant="h5" color="text.primary">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {"$" + item.price}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button
                        variant={"outlined"}
                        onClick={()=>{
                            props.setProductsInCart(props.currProducts.concat([props.item.name]))
                            props.setPrice(props.price + props.item.price)
                        }}>

                        Add to Cart
                    </Button>
                </CardActions>

            </Card>

        </Grid>

    )
}

export default BakeryItem
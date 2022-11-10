import "./App.css";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import {
    Box,
    Container,
    Grid,
    IconButton, Paper, Slide,
    ThemeProvider,
    Typography
} from "@mui/material";
import {themeOptions} from "./themeOptions";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState} from "react";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
});

/* ############################################################## */

function App() {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    // console.log(bakeryData)
    const [showCart,setShowCart] = useState(false)
    const [productsInCart, setProductsInCart] = useState([])
    const [price,setPrice] = useState(0)

    const toggleShoppingCart = () => {
        setShowCart(!showCart)
    }

    function Counter(array) {
        let count = {};
        array.forEach(val => count[val] = (count[val] || 0) + 1);
        return count;
    }

    return (
        <div className="App">
            <ThemeProvider theme={themeOptions}>
                <Container sx={{minHeight:"2300px"}}>

                    <Box>
                        <Typography variant={"h1"} sx={{marginBottom:"5rem"}}>JZ's
                            Bakery</Typography> {/* TODO: personalize your bakery (if you want) */}
                        <Grid container spacing={2}>
                            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
                                <BakeryItem item={item} currProducts={productsInCart} setProductsInCart={setProductsInCart} price={price} setPrice={setPrice}/>// replace with BakeryItem component
                            ))}
                        </Grid>
                    </Box>



                    <IconButton
                        onClick={toggleShoppingCart}
                        sx={{
                            position:"fixed",
                            bottom:"5%",
                            right:"5%",
                        }}>
                        <ShoppingCartIcon sx={{ fontSize: "80px" }}/>
                    </IconButton>

                </Container>
                <Slide direction="up" in={showCart} mountOnEnter unmountOnExit>

                        <Box
                            sx={{width: "100%", height:"500px", backgroundColor:"white", position:"fixed", bottom:0, borderTop: 1, borderColor:'grey.500',
                                }}>
                            <IconButton onClick={toggleShoppingCart} >
                                <KeyboardArrowDownIcon sx={{fontSize: "40px"}}/>
                            </IconButton>
                            <Box sx={{paddingLeft:"3rem"}}>
                                <Box sx={{overflow:"scroll"}}>
                                    {
                                        // console.log(Object.entries(Counter(productsInCart)))
                                        Object.entries(Counter(productsInCart)).map((tuple)=>
                                            (<Typography variant={"h5"}>
                                                {tuple[0] + " x " + tuple[1]}
                                            </Typography>)

                                        )
                                    }
                                </Box>

                                <Box sx={{position:"absolute", bottom:"10%",right:"10%"}}>
                                    <Typography variant={"h2"}>
                                        Total: $ {price.toFixed(2)}
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>

                </Slide>


            </ThemeProvider>


        </div>
    );
}

export default App;

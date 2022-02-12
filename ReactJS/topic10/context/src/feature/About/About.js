import { useContext } from "react";
import { Container, Typography, Box, Pagination } from "@mui/material"
import { AppContext } from "../../providers/appProvider";
import JokeCard from "./components/Card/Card";




export default function About(props) {

    let store = useContext(AppContext)
    let params = "producdsdst"


    console.log(store);

    const onPage = (event, count) => {
        store.getMovie(count)
    }

    switch (params) {
        case "user":
            return (
                <h1>User Sehifesi</h1>
            )
        case "product":
            return <h1>Products Page</h1>
        default:
            return (
                <Container>
                    <Typography variant="h4">
                        About Page
                    </Typography>
                    <Box>
                        {store.products?.map(item => <JokeCard key={item.id} {...item} />)}
                    </Box>
                    <Box style={{ margin: 50 }}>
                        <Pagination size="large" onChange={onPage} count={10} variant="outlined" color="secondary" />
                    </Box>
                </Container>
            )
    }
}
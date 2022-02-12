
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Title,TextPrice, SubTitle, CardButton } from "./Card.styled"

export const MediaCard = ({ title, img_url, price, raiting }) => {
    return (
        <Card sx={{ width: 245, m: 10 }}>
            <CardMedia
                component="img"
                height="170"
                image={img_url}
                alt="green iguana"
            />
            <CardContent>
                <Rating name="read-only" value={raiting} precision={0.5} readOnly />
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Title muradBold="true"  muradColor="green" font="large">
                    delivery : free
                </Title>
                <SubTitle muradColor="gray" muradBold="true">
                    delivery time : 30min
                </SubTitle>
                {/* <TextUcun reng="yasil"  font="30">
                    Test
                </TextUcun> */}
                {/* <Typography variant="body2" color="text.secondary">
                    $ {price}
                </Typography> */}

                <TextPrice>
                    $ {price}
                </TextPrice>
                <CardButton>
                    read more
                </CardButton>
            </CardContent>
        </Card>
    );
}

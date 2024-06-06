import React from 'react'
import {Card, CardActionArea,Typography, CardMedia} from '@mui/material'
function Product({product}) {
 
  return (
    
      <Card sx={{ width: 300, height:200 }}>
      <CardActionArea >
      <CardMedia
          component="img"
          height="140"
          image={`${product.image}`}
          alt="green iguana"
        />
        <Typography gutterBottom variant="h6"  sx={{padding: '10px', fontSize:'16px'}}>
          {product.name}
        </Typography>
      </CardActionArea>
    </Card>
   
  )
}

export default Product
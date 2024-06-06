import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import SearchBar from "./components/SearchBar";
import Product from "./components/Product";
function App() {
  const[searchVal, setSearchVal] = useState('')
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  console.log(data);
  //search functionality
  const filteredData = data && data.filter(product => product.name.toLowerCase().includes(searchVal.toLowerCase()))

  return (
    <>
      <Container
        sx={{
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            padding: "20px",
          }}
        >
          Product List
        </Typography>
        <SearchBar setSearchVal={setSearchVal} searchVal={searchVal} />
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              width: "100%",
              backgroundColor: "white",
              paddingTop: "100px",
              paddingBottom: "100px",
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <div className="productContainer">
      {
        filteredData.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
        </div>
      </Container>
    </>
  );
}

export default App;

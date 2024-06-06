import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import SearchBar from "./components/SearchBar";
import Product from "./components/Product";
import { motion } from "framer-motion";

function App() {
  const [searchVal, setSearchVal] = useState('');
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  console.log(data);

  // Search functionality
  const filteredData = data && data.filter(product => product.name.toLowerCase().includes(searchVal.toLowerCase()));

  // Animation variants
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Adjust the delay between each card here
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Adjust duration here if needed
  };

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
        <motion.div
          className="productContainer"
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredData.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
            >
              <Product product={product} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </>
  );
}

export default App;

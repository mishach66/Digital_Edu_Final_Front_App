import React, { useEffect, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { Loading, Link, Text } from "../atoms";
import { useFetchData, useDebounce } from "../../hooks";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { getData, loading, data, setState } = useFetchData();
  const { products } = data || {};
  const debouncedSearch = useDebounce(500, searchValue);

  useEffect(() => {
    if (!debouncedSearch) {
      setState((prev) => ({
        ...prev,
        data: [],
      }));
    } else {
      getData(`/products/search?name=${searchValue}`);
    }
  }, [debouncedSearch]);

  return (
    <Autocomplete
      freeSolo
      sx={{ width: 300 }}
      disableClearable
      loading={loading}
      loadingText={<Loading size={50} />}
      options={products || []}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { name, category, _id, price, image } = option;

        return (
          <Link to={`/products/categories/${category}/${_id}`} key={_id}>
            <Box style={{ display: "flex" }}>
              <img
                style={{ width: 50, height: 50, objectFit: "contain" }}
                src={image}
              />
              <Text>{name}</Text>
              <Text>{price}</Text>
            </Box>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            label="search products"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            sx={{
              input: { color: "#FF9900" },
            }}
            InputLabelProps={{
              style: { color: "#FF9900" },
            }}
          />
        );
      }}
    />
  );
};

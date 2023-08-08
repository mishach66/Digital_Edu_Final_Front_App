import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../../redux";
import { useParams } from "react-router-dom";
import { useProduct, useQueryParams } from "../../../hooks";
import { GridContainer, ProductCard } from "../shared";
import { Paginate } from "./Paginate";
import { styled, Box } from "@mui/material";
import { LoadingWrapper } from "../../atoms";
import { Sort } from "./Sort";

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

export const CategoryProductList = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const { categoryProducts, totalPages, isLoading } = useProduct();
  const { value: page, changeQueryValue: changePage } = useQueryParams("page");
  const { value: sort, changeQueryValue: changeSort } = useQueryParams("sort");

  useEffect(() => {
    dispatch(
      fetchCategoryProducts({
        categoryName: categoryName,
        // queryUrl: `?size=3&sort=price,asc&page=${page}`,
        queryUrl: `?size=3&sort=${sort}&page=${page}`,
      })
    );
  }, [page, sort]);

  useEffect(() => {
    changePage("page", 1);
  }, [sort]);

  return (
    <LoadingWrapper isLoading={isLoading}>
      <Container>
        <Sort value={sort} changeSort={changeSort} />
        <br />
        <GridContainer>
          {categoryProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </GridContainer>
        <Paginate total={totalPages} page={page} changePage={changePage} />
      </Container>
    </LoadingWrapper>
  );
};

import { Pagination } from "@mui/material";
import React from "react";

export const Paginate = ({ total, page, changePage }) => {
  return (
    <Pagination
      count={total}
      page={Number(page)}
      onChange={(_, value) => {
        console.log("value", value);
        changePage("page", value);
      }}
    />
  );
};

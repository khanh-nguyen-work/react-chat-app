import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

// js render css
import { WithSpinnerContainer } from "./styles";

const WithSpinner = WrapperdComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <WithSpinnerContainer>
      <CircularProgress style={{ width: "10rem", height: "10rem" }} />
    </WithSpinnerContainer>
  ) : (
    <WrapperdComponent {...otherProps} />
  );
};

export default WithSpinner;

import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M11.905 22.28a.464.464 0 0 1-.858-.207v-6.628a.443.443 0 0 0-.458-.426h-5.63a.427.427 0 0 1-.401-.633L12.095 1.72a.464.464 0 0 1 .858.207v6.628a.443.443 0 0 0 .458.426h5.63a.427.427 0 0 1 .401.633z" /></svg>);
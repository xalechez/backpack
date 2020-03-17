import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M26 23h-1.76c-.96 0-2.24-.836-2.24-1.866V18H4v3.134c0 .984-1.167 1.79-2.107 1.86L1.761 23H0V11a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2zM23 0a2 2 0 0 1 2 2v6h-3V6a1 1 0 0 0-.883-.993L21 5h-6a1 1 0 0 0-.993.883L14 6v2h-2V6a1 1 0 0 0-.883-.993L11 5H5a1 1 0 0 0-.993.883L4 6v2H1V2a2 2 0 0 1 2-2z" /></svg>);
import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M8.072 2.082c-.388.213-.572.72-.572 1.247v5.897C7.5 11.066 9 12 10.5 12s3-.933 3-2.774v-5.86c0-.544-.208-1.066-.608-1.285-.534-.292-1.34-.581-2.392-.581-1.054 0-1.893.29-2.428.582zM2.645 16.865C4.148 16.135 6.75 15 10.5 15s6.358 1.137 7.893 1.867c.721.342 1.107 1.06 1.107 1.883v.75c0 1.5-1.5 3-3 3h-12c-1.5 0-3-1.5-3-3v-.75c0-.81.437-1.541 1.145-1.885zM16.5 6A1.5 1.5 0 0 1 18 4.5h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 16.5 6zM18 9a1.5 1.5 0 0 0 0 3h1.5a1.5 1.5 0 0 0 0-3H18z" /></svg>);
import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M20.75 1.489c-5.586-1.985-11.914-1.985-17.5 0-.842.299-1.257 1.023-1.442 1.454A3.866 3.866 0 0 0 1.5 4.416v6.542c0 3.306 1.64 6.077 3.45 8.137 1.817 2.07 3.933 3.568 5.184 4.363a3.481 3.481 0 0 0 3.732 0c1.251-.795 3.367-2.293 5.185-4.363 1.81-2.06 3.449-4.83 3.449-8.137V4.416c0-.46-.103-.994-.308-1.473-.185-.431-.6-1.155-1.442-1.454zM7.93 3.66l-.566 1.134a2.391 2.391 0 0 1-1.07 1.069l-1.133.567a1.196 1.196 0 0 0 0 2.138l1.134.567a2.4 2.4 0 0 1 1.069 1.07l.567 1.133c.44.881 1.698.881 2.138 0l.567-1.133a2.39 2.39 0 0 1 1.07-1.07l1.133-.567a1.196 1.196 0 0 0 0-2.138l-1.133-.567a2.391 2.391 0 0 1-1.07-1.07l-.567-1.133a1.196 1.196 0 0 0-2.138 0zm5.98 8.035l.377-.755a.797.797 0 0 1 1.426 0l.378.755c.154.309.404.559.713.713l.755.378a.797.797 0 0 1 0 1.426l-.755.378a1.594 1.594 0 0 0-.713.713l-.378.755a.797.797 0 0 1-1.426 0l-.378-.755a1.594 1.594 0 0 0-.713-.713l-.755-.378a.797.797 0 0 1 0-1.426l.755-.378c.309-.154.559-.404.713-.713z" clipRule="evenodd" /></svg>);
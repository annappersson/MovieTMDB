import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import loaderGif from "../../assets/img/popcornLoader.gif";

const GlobalLoadingSpinner = () => {
  return (
    <div id="global-loading-spinner">
      <img src={loaderGif} alt="Loading..." />
      <p>Loading the popcorn..</p>
    </div>
  );
};

export default GlobalLoadingSpinner;

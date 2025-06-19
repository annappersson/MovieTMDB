import loaderGif from "../../assets/img/popcornLoader.gif";
import darkLoaderGif from "../../assets/img/darkLoader.gif";
import useTheme from "../../hooks/useTheme";
import "../../assets/LoadingSpinner.scss";

const GlobalLoadingSpinner = () => {
  const { isDarkMode } = useTheme();
  return (
    <div id="global-loading-spinner" className={!isDarkMode ? "dark" : "light"}>
      <img src={!isDarkMode ? darkLoaderGif : loaderGif} alt="Loading..." />
      <p>Loading the popcorn...</p>
    </div>
  );
};

export default GlobalLoadingSpinner;

import loadingSpinnerImg from "../assets/img/popcornLoader.gif";
import { Image } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div id="global-loading-spinner">
      <Image src={loadingSpinnerImg} alt="Hand holding popcorn bucket"></Image>
    </div>
  );
};

export default LoadingSpinner;

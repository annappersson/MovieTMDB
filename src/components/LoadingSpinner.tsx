import loadingSpinnerImg from "../assets/img/popcornspinner.gif";
import { Image } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div id="global-loading-spinner">
      <Image src={loadingSpinnerImg} alt="camera on green background"></Image>
    </div>
  );
};

export default LoadingSpinner;

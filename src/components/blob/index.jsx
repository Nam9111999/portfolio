import "./style.css";
import BlobSVG from "./blobImg";
import BlobSVGFilter from "./blobImgFilter";


function Blob() {
  return (
    <div className="container">
      <div className="blob">
        <BlobSVG />
      </div>
      <div className="blob">
        <BlobSVGFilter />
      </div>
    </div>
  );
}

export default Blob;

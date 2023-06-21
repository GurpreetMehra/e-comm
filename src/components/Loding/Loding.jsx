import "./Loding.scss";
import { TailSpin } from "react-loader-spinner";
const Loading = (props) => {
  return (
    <>
      <div className="spin">
        <TailSpin
          height="18"
          width="18"
          color="white"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Loading;

import download from "./kio.jpg";
const MyMessage = ({ message }) => {
  return (
    <div class="my-avatar">
      <img src={download} alt = "user avater"/>
      <span>{message} </span>
    </div>
  );
};
export default MyMessage;

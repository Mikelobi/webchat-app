import download from './kio.jpg';

const MyMessage = ({ message }) => (
  <div className="my-avatar">
    <img src={download} alt="user avater" />
    <span>
      {message}
      {' '}
    </span>
  </div>
);
export default MyMessage;

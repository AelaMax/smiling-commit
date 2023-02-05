import implantVideo from '../videos/implantVid.mp4';

const Implants = () => {
  return (
    <div className='implant-container'>
      <h1>εμφυτεύματα</h1>
      {/* <div className='video-container'> */}
      <video className='video-container' loop autoPlay muted id='implantvideo'>
        <source src={implantVideo} />
      </video>
      {/* </div> */}
    </div>
  );
};

export default Implants;

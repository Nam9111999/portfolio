import Blob from "@components/blob";
import "./style.css";

function Home() {
  return (
    <section className="home">
      <div className="home__left">
        <h1 className="animated-text">
          <div>Hi I'm</div>
          <span></span>
        </h1>
      </div>
      <div className="home__right">
        <Blob />
        {/* <img className="profile" src={Nam} alt="profile image" /> */}
      </div>
    </section>
  );
}

export default Home;

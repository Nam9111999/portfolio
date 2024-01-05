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
        <h2>Aute adipisicing occaecat excepteur velit ipsum voluptate quis eu enim est pariatur eu excepteur magna. Do incididunt cillum sunt tempor voluptate ea dolor dolore veniam nulla mollit. Cillum ad magna dolore do esse ullamco aute non velit laborum consectetur pariatur sunt. Nostrud in magna sint amet tempor exercitation et velit ullamco mollit.</h2>
      </div>
      <div className="home__right">
        <Blob />
        {/* <img className="profile" src={Nam} alt="profile image" /> */}
        
      </div>
    </section>
  );
}

export default Home;

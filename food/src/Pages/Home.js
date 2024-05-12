import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../Components/Header";
import Restros from "../Components/Restros";
import { Carousel } from "react-responsive-carousel";
import Footer from "../Components/Footer";
import { useSelectedItems } from "../App";

function Home() {
  const { selectedItems, setSelectedItems } = useSelectedItems();

  return (
    <div>
      <Header selectedItems={selectedItems}/>

      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div>
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3HnA50BU8VSeH5y1WkVmoM/538c9ee841e8937571ba9423c04acbb6/Internation_Burger_Fest_banner_1440x396px.jpg?w=1494&fit=fill&fm=webp" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=1494&fit=fill&fm=webp" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=1494&fit=fill&fm=webp" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>

      <Restros setData={setSelectedItems}/>

      <Footer />
    </div>
  );
}

export default Home;

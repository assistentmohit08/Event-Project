import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "\image/birtday.jpeg",
     
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "\image/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "\image/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "\image/gamenight.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "\image/EVP.jpeg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "\image/wedding.jpg",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
import React from "react";
import "./imageslider.css";
import { Carousel } from "react-carousel-minimal";
import slika1 from "../assets/img1.jpg";
import slika2 from "../assets/img2.jpg";
import slika3 from "../assets/img4.png";
import slika4 from "../assets/img5.png";

function ImageSlider() {
  const data = [
    {
      image: slika1,
      caption: "Projekat / Smart Home",
    },
    {
      image: slika2,
      caption: "Projekat / Smart Home",
    },
    {
      image: slika3,
      caption: "Projekat / Smart Home",
    },
    {
      image: slika4,
      caption: "Projekat / Smart Home",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="main-container">
      <div className="container-about">
        <h1> APLIKACIJA ZA PAMETNE KUĆE </h1>
        <p className="text-about">
          Aplikacija za pametne kuće kojom se mogu paliti i gasiti svetla može
          biti deo kompleksnog sistema za upravljanje kućnom automatizacijom.
          Takva aplikacija omogućava korisnicima da lako upravljaju osvetljenjem
          u svojim domovima putem pametnih uređaja, kao što su pametni telefoni,
          tableti, pametni zvučnici i sl. Korišćenjem aplikacije za upravljanje
          svetlima, korisnici mogu podesiti željenu svetlosnu atmosferu u svojim
          domovima, bez potrebe za fizičkim pristupom prekidačima ili
          utičnicama. Osim toga, aplikacija može omogućiti korisnicima da
          postave vremenska ograničenja za paljenje i gašenje svetla, kao i da
          programiraju automatsko paljenje i gašenje svetla u određeno vreme.
          Jedna od mogućnosti koju takva aplikacija može imati je i mogućnost
          podešavanja intenziteta svetlosti, kao i promene boje svetla. Takođe,
          aplikacija može imati mogućnost kreiranja scena, odnosno skupova
          postavki svetla, koji se mogu aktivirati jednim klikom. Važno je
          napomenuti da ovakva aplikacija može biti deo kompleksnog sistema za
          upravljanje kućnom automatizacijom, gde se svetla mogu povezati sa
          drugim uređajima, kao što su senzori pokreta ili senzori prisustva,
          kako bi se automatizovalo upravljanje svetlima u domu.
        </p>
        <Carousel className="carousel-v"
          data={data}
          time={2000}
          width="650px"
          height="300px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
         
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }} 
        />
      </div>
    </div>
  );
}

export default ImageSlider;

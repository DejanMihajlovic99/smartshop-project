import React from "react";
import "./videoplayer.css";
import thum from "../video/slikaslika.png";
import video from "../video/video1.mp4";
import "react-html5video/dist/styles.css";

const Videoplayer = () => {
  return (
    <div className="main-c">
      <h1> SMARTHOME PROJEKAT / BOŽO ILIĆ </h1>
      <p className="text-smarthome" >
        Pametna kuća (engl. smart home) je koncept koji podrazumeva korišćenje
        različitih tehnologija za automatizaciju različitih funkcija u kući. Ove
        tehnologije uključuju senzore, pametne uređaje, aplikacije za kontrolu,
        kao i bežičnu mrežu i Internet stvari (IoT) uređaje koji su povezani u
        jedinstven sistem. Cilj pametne kuće je da unapredi i olakša životni
        stil, poveća energetsku efikasnost i bezbednost kuće, kao i da pruži
        korisnicima više kontrole i udobnosti. Primeri funkcija koje se mogu
        automatizovati u pametnoj kući uključuju kontrolu osvetljenja,
        termostata, kućne zabave, sigurnosnih kamera, senzora detektovanja dima,
        kao i mnoge druge. Pametna kuća je jedan od primera primene IoT
        tehnologije i jedna od najbrže rastućih tehnoloških oblasti u poslednjih
        nekoliko godina.
        
        Projekat koji su studenti na čelu sa profesorom Božom
        Ilićem kreirali predstavlja model pametne kuće i njenih uređaja,
        kako sve to izgleda, možete pogledati na sledećem video snimku :
      </p>
      <div className="videoplayer">
        <video width="540" height="380" controls poster={thum}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Videoplayer;

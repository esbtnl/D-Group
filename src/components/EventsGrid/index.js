import React from "react";
import {
  Title,
  Description,
  Row,
  Col,
  Grid,
  ÖMSpan,
} from "./EventsGridElements";

function EventsGrid() {
  return (
    <>
      <Grid>
        <Row>
          <Col size={1}>
            <Title>Nollesittningen & Nollefinalen</Title>
            <Description>
              När nolle-p lider mot sitt slut och det börjar bli dags för STABEN
              att uppgradera nollan till etta bjuder D-Group in till finfest.
              Faddrar och nollan välkomnas till sittning i sina finaste kläder
              för att njuta av god mat och underhållning. Kvällen avslutas med
              ett hejdundrande firande på kårallen tillsammans med Maskin-, TBI-
              och Y-sektionens nyblivna ettan och faddrar.
            </Description>
          </Col>
          <Col size={1}>
            <Title>Tenta- & Om tentakravallen</Title>
            <Description>
              När höstens tenta-p äntligen är genomlidet och tankeknölarna
              värker av utmattning är det dags att släpp loss. Därför bjuder
              D-Group, tillsammans med TBI-sektionens festeri Bi6, in till fest
              två dagar i rad - nämligen Tenta- & Omtentakravallen. Då får du
              äntligen tid att fira dina avklarade tentor, alternativt fira att
              du får chansen att tråna efter tentatanterna en gång.
            </Description>
          </Col>
        </Row>

        <Row>
          <Col size={1}>
            <Title>
              D<ÖMSpan>IM</ÖMSpan>D
            </Title>
            <Description>
              Kliar det i kastarmen? Tycker du att det är lite för långt mellan
              DÖMD och DÖMD? Misströsta ej, du behöver inte vänta ända till
              nästa DÖMD för att njuta av D-arnas favoritsport. I februari
              kommer nämligen DIMD, Datateknologsektionens Interna Mästerskap i
              Dart. Här bjuds du på en helkväll med dart där du kan träna upp
              dina färdigheter och visa för alla andra att det är du som är
              kungen av denna ädla sport. Självklart bjuds du även på mat under
              kvällen.
            </Description>
          </Col>
          <Col size={1}>
            <Title>Åvvefix & Invigning</Title>
            <Description>
              Då nolle-p är över och alla nya ettor har fått sina overaller
              kommer D-Group att hjälpa till att snygga till dem. Vi ser till
              att det finns färg så att man kan skriva namn och måla maskotar
              samt revärer och märken som man kan sy på. Efter att overallerna
              har blivit fulländade ska dessa traditionsenligt invigas vilket
              innebär med lekar och tokigheter tillsammans med Läxmästeriet och
              deras nya ettor.
            </Description>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Title>Julfesten</Title>
            <Description>
              Då julen är på ingång och du börjar skymta tomtar i varje hörn
              tycker D-Group att det är ett alldeles utomordentligt tillfälle
              att fira den kommande helgen med en sittning. Denna julsittning
              anordnas av D-Group och Läxmästeriet och vi lovar att vi ska vara
              så snälla vi bara kan under hösten för att locka tomten till ett
              bord nära dig.
            </Description>
          </Col>
          <Col size={1}>
            <Title>
              D<ÖMSpan>ÖM</ÖMSpan>D 2022
            </Title>
            <Description>
              Den 7e april slås dörrarna upp till årets bästa fest, DÖMD!
              Datateknologsektionens Öppna Mästerskap i Dart är en av norra
              Europas största darttävlingar som arrangeras för 41:a året i rad.
              Festen som pågår i tre dagar och börjar med kravall på torsdagen,
              fortsätter med fest på fredagen och avslutas med tävling, sittning
              och eftersläpp på lördagen. Denna fest får inte missas så boka in
              datumen redan nu!
            </Description>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default EventsGrid;

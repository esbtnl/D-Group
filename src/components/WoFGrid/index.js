import React from "react";
import { Col, Grid, Row, Card, Name } from "./WoFGridElements";

import dg2021 from "../../res/dpateter/dg2021.png";
import dg1920 from "../../res/dpateter/dg1920.jpg";
import dg1819 from "../../res/dpateter/dg1819.jpg";
import dg1718 from "../../res/dpateter/dg1718.jpg";
import dg1617 from "../../res/dpateter/dg1617.jpg";
import dg1516 from "../../res/dpateter/dg1516.jpg";
import dg1415 from "../../res/dpateter/dg1415.jpg";
import dg1314 from "../../res/dpateter/dg1314.jpg";
import dg1213 from "../../res/dpateter/dg1213.jpg";
import dg1112 from "../../res/dpateter/dg1112.jpg";
import dg1011 from "../../res/dpateter/dg1011.jpg";
import dg0910 from "../../res/dpateter/dg0910.jpg";
import dg0809 from "../../res/dpateter/dg0809.jpg";
import dg0708 from "../../res/dpateter/dg0708.jpg";
import dg0607 from "../../res/dpateter/dg0607.jpg";
import dg0506 from "../../res/dpateter/dg0506.jpg";
import dg0405 from "../../res/dpateter/dg0405.jpg";
import dg0304 from "../../res/dpateter/dg0304.jpg";
import dg0203 from "../../res/dpateter/dg0203.jpg";
import dg0102 from "../../res/dpateter/dg0102.jpg";
import dg0001 from "../../res/dpateter/dg0001.jpg";
import dg9900 from "../../res/dpateter/dg9900.jpg";
import dg9899 from "../../res/dpateter/dg9899.jpg";
import dg9798 from "../../res/dpateter/dg9798.jpg";
import dg9697 from "../../res/dpateter/dg9697.jpg";
import dg9495 from "../../res/dpateter/dg9495.jpg";
import dg8788 from "../../res/dpateter/dg8788.jpg";

const images = [
  {
    src: dg2021,
    thumbnail: dg2021,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 20/21 - Familjen Dequerré Altié",
  },
  {
    src: dg1920,
    thumbnail: dg1920,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 19/20 - Familjen Aux Verts Douze",
  },
  {
    src: dg1819,
    thumbnail: dg1819,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 18/19 - Familjen Vúh-Kánt Bost",
  },
  {
    src: dg1718,
    thumbnail: dg1718,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 17/18 - Familjen Bot Xiu Phen",
  },
  {
    src: dg1617,
    thumbnail: dg1617,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 16/17 - Familjen Züpr-izen",
  },
  {
    src: dg1516,
    thumbnail: dg1516,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 15/16 - Familjen von Neudeslättenräze",
  },
  {
    src: dg1415,
    thumbnail: dg1415,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 14/15 - Familjen Dräugündurfeften",
  },
  {
    src: dg1314,
    thumbnail: dg1314,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 13/14 - Familjen Anscriosta",
  },
  {
    src: dg1213,
    thumbnail: dg1213,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 12/13 - Familjen Tüngraukk",
  },
  {
    src: dg1112,
    thumbnail: dg1112,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 11/12 - Familjen Van Marcenslauss",
  },
  {
    src: dg1011,
    thumbnail: dg1011,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 10/11 - Familjen Lao Tengo",
  },
  {
    src: dg0910,
    thumbnail: dg0910,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 09/010 - Familjen Xaph-Lee-Pakh",
  },
  {
    src: dg0809,
    thumbnail: dg0809,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 08/09 - Familjen Allashgashup",
  },
  {
    src: dg0708,
    thumbnail: dg0708,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 07/08 - Familjen Baddhisprhitin",
  },
  {
    src: dg0607,
    thumbnail: dg0607,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 06/07 - Familjen Raundundirfauvten",
  },
  {
    src: dg0506,
    thumbnail: dg0506,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 05/06 - Familjen Boukishibaldjzan",
  },
  {
    src: dg0405,
    thumbnail: dg0405,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 04/05 - Familjen Täkkaditiikää",
  },
  {
    src: dg0304,
    thumbnail: dg0304,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 03/04 - Familjen Hin-Kaiwo-Toka",
  },
  {
    src: dg0203,
    thumbnail: dg0203,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 02/03 - La Familia Don Quebefvre",
  },
  {
    src: dg0102,
    thumbnail: dg0102,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 01/02 - Familie van Wavullijae",
  },
  {
    src: dg0001,
    thumbnail: dg0001,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 00/01 - La Familia di Ardonccio",
  },
  {
    src: dg9900,
    thumbnail: dg9900,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 99/00 - La Famille L'Aphârfvhine",
  },
  {
    src: dg9899,
    thumbnail: dg9899,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 98/99 - Familjen á Thacqxupher",
  },
  {
    src: dg9798,
    thumbnail: dg9798,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 97/98 - La Familia el Zcqharoẽl",
  },
  {
    src: dg9697,
    thumbnail: dg9697,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 96/97 - The O'Dragly family",
  },
  {
    src: dg9495,
    thumbnail: dg9495,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 94/95 - Familjen van der Aakroekar",
  },
  {
    src: dg8788,
    thumbnail: dg8788,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    caption: "D-Group 87/88",
  },
];

function WoFGrid() {
  return (
    <div>
      <Grid>
        <Row>
          <Col size={1}>
            <Card>
              <img
                src={images[0].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[0].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[1].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[1].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[2].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[2].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[3].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[3].caption}</Name>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Card>
              <img
                src={images[4].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[4].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[5].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[5].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[6].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[6].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[7].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[7].caption}</Name>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Card>
              <img
                src={images[8].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[8].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[9].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[9].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[10].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[10].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[11].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[11].caption}</Name>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Card>
              <img
                src={images[12].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[12].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[13].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[13].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[14].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[14].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[15].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[15].caption}</Name>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Card>
              <img
                src={images[16].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[16].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[17].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[17].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[18].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[18].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[19].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[19].caption}</Name>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Card>
              <img
                src={images[20].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[20].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[21].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[21].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[22].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[22].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[23].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[23].caption}</Name>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <Card>
              <img
                src={images[24].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[24].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[25].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[25].caption}</Name>
            </Card>
          </Col>
          <Col size={1}>
            <Card>
              <img
                src={images[26].src}
                alt="WoF"
                style={{ width: "25vw", height: "25vw" }}
              />
              <Name>{images[26].caption}</Name>
            </Card>
          </Col>
          <Col size={1} style={{ width: "25vw", height: "25vw" }}></Col>
        </Row>
      </Grid>
    </div>
  );
}

export default WoFGrid;

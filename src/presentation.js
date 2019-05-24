// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'blue',
    secondary: '#282424',
    tertiary: 'white',
    quaternary: '#CECECE',
  },
  {
    primary: '"Anonymous Pro", mono-space',
    secondary: '"Press Start 2P"',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['slide']} bgColor="primary" bgImage="./images/background-3.gif"> 

          <Text textFont="secondary" margin="10px 0 100px" textColor="secondary " textSize="22">
            redux-saga<br/> & side effects 
          </Text>

          <Text textFont="secondary" margin="10px 0 100px" textColor="primary" textSize="20">
          @ react-ba
          </Text>
          

        </Slide>

        <Slide transition={['slide']} bgColor="secondary">
          <Text textFont="secondary" margin="10px 0 100px" textColor="tertiary" textFont="secondary" textSize="16">
          <marquee scrollamount="12">pablo gustavo bacchetta</marquee>
          </Text>
          
          <Text margin="10px 0"  textColor="">
            <img src="http://polbac.xyz/polbac.jpg" alt="" width="400" />
          </Text>

          <Text margin="10px" textColor="primary" textFont="secondary" textSize="16">
            @polbac
          </Text>
          <Text margin="10px 0 0" textColor="primary" textFont="secondary" textSize="16">
            github . fb . instg
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
        <Text margin="10px 0 0" textColor="primary" textFont="secondary" textSize="16">
            working at
          </Text>
          <Text margin="10px 0 0" textColor="primary" size={0.5}>
            <img src="https://www.trocafone.com/assets/img/global/common/logo.png" />
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" textFont="secondary" textSize="16">
            buy > repair > sale
          </Text>
        </Slide>

        <Slide transition={['slide']} bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" textFont="secondary" textSize="16">
            suricata
          </Text>
          <Text margin="10px 0 0" textColor="primary" textSize="16">
            monolith >> microservices
          </Text>
          <Text margin="10px 0 0" textColor="primary" textSize="16">
          [ account, catalog, cart, checkout ]
          </Text>
          
        </Slide>

        <Slide transition={['slide']} bgImage="./images/start.gif" bgColor="tertiary">
          <Text margin="10px 0 0" textColor="primary" textFont="secondary" textSize="66" className="blink">
            get start!
          </Text>
        </Slide>
        


      </Deck>
    );
  }
}

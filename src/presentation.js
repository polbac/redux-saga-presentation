// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane
} from "spectacle";

import "highlight.js/styles/atom-one-dark-reasonable.css";

import Highlight from "react-highlight";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#2a2aa3",
    secondary: "#282424",
    tertiary: "white",
    quaternary: "#CECECE"
  },
  {
    primary: '"Anonymous Pro", mono-space',
    secondary: '"HelveticaNeue Black"'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress='none'
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["slide"]}
          bgColor="primary"
          bgImage="./images/background-3.gif"
        >
          <Text
            textFont="secondary"
            margin="10px 0 100px"
            textColor="secondary"
            textSize="35"
          >
            redux-saga
            <br /> & side effects
          </Text>

          <Text
            textFont="secondary"
            margin="10px 0 100px"
            textColor="secondary"
            textSize="35"
          >
            @reactjs_bs
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Text
            textFont="secondary"
            margin="10px 0 10px"
            textColor="quaternary"
            textFont="secondary"
            textSize="30"
          >
            <marquee scrollamount="12">pablo gustavo bacchetta</marquee>
          </Text>

          <Text margin="10px 0" textColor="">
            <img src="http://polbac.xyz/polbac.jpg" alt="" width="400" />
          </Text>

          <Text
            margin="10px"
            textColor="yellow"
            textFont="secondary"
            textSize="30"
          >
            @polbac
          </Text>
          <Text
            margin="10px 0 0"
            textColor="yellow"
            textFont="secondary"
            textSize="30"
          >
            lnkd . medium . github . fb . instg
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
        <Text margin="10px 0 0" textColor="primary" size={0.5}>
            <img width="250" src="/images/troca.png" />
          </Text>
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="40"
          >
            working at trocafone
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="/images/flag.gif" />
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="40"
          >
            buy > refurbish > sale
          </Text>
        </Slide>
        
        <Slide transition={["slide"]} bgColor="tertiary">
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
          >
            <img
              src="/images/suricata.webp"
              width={500}
            />
            <br />
            <br />
            <br />
            suricata team (ecommerce)
          </Text>

          <Text margin="10px 0 0" textColor="primary" textSize="30">
            [ account, catalog, cart, checkout ]
          </Text>

          <Text margin="10px 0 0" textColor="primary" textSize="30">
            monolith >> microservices
          </Text>
        </Slide>



        <Slide transition={["slide"]} bgColor="tertiary">
          
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
          >
            <img src="/images/next.png" width="150" align="middle" style={{ marginRight: 50 }}/>
            <img src="/images/react.png" width="100" align="middle" style={{ marginRight: 50 }}/>
            <img src="/images/redux.png" width="100" align="middle" style={{ marginRight: 50 }}/>
            <img src="/images/saga.png" width="130" align="middle" />
          </Text>
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage="./images/start.gif"
          bgColor="tertiary"
        >
          <Text
            margin="10px 0 0"
            textColor="white"
            textFont="secondary"
            textSize="66"
            className="blink"
          >
            get start!
          </Text>
        </Slide>

        <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
                textColor="white"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/disclaimer.webp) center',
                  height: 300,
                  width: 900,
                  margin: 'auto',
                  lineHeight: '300px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              disclaimer
            </Text>
          </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <img src={"images/pokemon.gif"} />
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="50"
            className="blink"
          >
            pokeapi.co
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <img src={"images/api-list.png"} width="980" />
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <img src={"images/api-detail.png"} width="980" />
        </Slide>


        <Slide transition={["slide"]} bgColor="secondary">
        
        <img src="/images/react.png" width="100" align="middle" />
          <Text

            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >react
            </Text>
          <br/><br/>
            <img src="/images/redux.png" width="100" align="middle" />
            <Text
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >redux<br/>
            (store, actions, action creators, reducers)
            </Text>
          
        </Slide>

        

        <Slide transition={["slide"]} bgColor="white">
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
          >
            store:
          </Text>
          <Text
            margin="10px 0 0"
            textColor="secondary"
            textFont="secondary"
            textSize="25"
          >
            estado global de la aplicación
          </Text>
          
          <Highlight className="javascript" style={{ textAlign: "left" }}>
{`
const initState = {
    session: {
      username: 'polbac',
      email: 'polbac@gmail.com'
    },
    articles: []
};
            `}
          </Highlight>
        </Slide>

        <Slide transition={["slide"]} bgColor="white">
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
          >
            actions & action creators:
          </Text>
          <Text
            margin="10px 0 0"
            textColor="secondary"
            textFont="secondary"
            textSize="25"
          >
            cargas de información que se envian desde la aplicación hasta el store
          </Text>
          
          <Highlight className="javascript" style={{ textAlign: "left" }}>
{`
const LOGIN = 'LOGIN'

function loginUser(username, password) {
  return {
    type: LOGIN,
    username,
    password,
  }
}

dispatch(loginUser('polbac', 'platanos'))
`}
          </Highlight>
        </Slide>


        <Slide transition={["slide"]} bgColor="white">
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
          >
            reducer:
          </Text>
          <Text
            margin="10px 0 0"
            textColor="secondary"
            textFont="secondary"
            textSize="25"
          >
            especifican como cambia el estado de la aplicación a partir de acciones
          </Text>
          
          <Highlight className="javascript" style={{ textAlign: "left" }}>
{`
function reducer(state = initState, action) {
  switch (action.type) {
    case SAVE_SESSION: 
      return {
        ...state,
        session: {
          username: action.username,
          email: action.email,
        }

      }
    // más 'case' con accciones
  }

  return state
}
            `}
          </Highlight>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="images/middleware.jpeg" alt="" width="600" />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            <a href='https://github.com/polbac/pokemon-redux-saga' style={{color: 'white'}} target='_blank'>github.com/polbac/pokemon-redux-saga</a>
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="36"
          >
          git checkout -b feature/react-redux
          </Text>
        </Slide>



        <Slide transition={["slide"]} bgColor="secondary">
          <img src="images/1.png" alt="" />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <img src="images/2.png" alt="" />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <img src="images/3.png" alt="" />
        </Slide>


        <Slide transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
          redux<br/><br/>
          </Text>
          <img src="images/store.png" alt="" width="1000" />
        </Slide>


        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="images/graph3.png" alt="" height="700" />
        </Slide>

        <Slide contentStyles={{ maxWidth: 1300 }}  transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
          Offline Component
          </Text>
          <Highlight className="javascript" style={{ fontSize: 4 }}>
            {`
class Offline extends React.Component {
  componentDidMount() {
    window.addEventListener("online", this.updateInternetStatus.bind(this));
    window.addEventListener("offline", this.updateInternetStatus.bind(this));
  }
  updateInternetStatus(event) {
    this.props.setOffline(!navigator.onLine);
  }
  render() {
    const { offline } = this.props;

    return offline ? (
      <div class="offline">:'( no hay conexión</div>
    ) : (
      <React.Fragment />
    );
  }
}
`}
          </Highlight>
        </Slide>


        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="images/graph2.png" alt="" height="700" />
        </Slide>

        

        <Slide contentStyles={{ maxWidth: 1300 }}  transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
          Detail Component
          </Text>
          <Highlight className="javascript" style={{ fontSize: 4 }}>
{`class Detail extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown");
  }

  ESC_KEY_EVENT = 27;
  onKeyDown(event) {
    const evt = event || window.event;
    if (evt.keyCode === this.ESC_KEY_EVENT) {
      this.props.selectItem(null);
    }
  }
`}
          </Highlight>
        </Slide>
        

        

        

        

        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="images/graph1.png" alt="" height="700" />
        </Slide>
       

        <Slide contentStyles={{ maxWidth: 1300 }}  transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
          fetch en ListComponent
          </Text>
          <Highlight className="javascript" style={{ fontSize: 4 }}>
{`class List extends React.Component {

  componentDidMount() {
    const { setPreload, setList } = this.props;
    
    setPreload(true);
    
    fetch(API_LIST_URL)
      .then(res => res.json())
      .then(list => {
        setPreload(false);
        setList(list.results); // guarda el listado
        this.loadDetails();
      });
  }

  loadDetails() {
    const { list, setItemDetail } = this.props;
    
    list.map((item, index) =>
      fetch(item.url)
        .then(res => res.json())
        .then(item => {
          setItemDetail(index, item); // guarda en el store el detail por índice
        })
    );
  }

            `}
          </Highlight>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <img src="images/sad.gif" alt="" width="400" />
        </Slide>


        <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
        <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="26"
              >
              las acciones no son asincrónicas
            </Text>
          <Highlight className="javascript" style={{ fontSize: 4 }}>
{`// no podemos hacer esto 😢 
const fetchList = () => {
  fetch(API_LIST_URL)
      .then(res => res.json())
      .then(list => {
        return {
          type: FETCH_LIST,
          list,
        }
      });
}
            `}
          </Highlight>
        </Slide>

        

        <Slide transition={["slide"]} bgColor="primary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            redux-thunk
          </Text>

          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            redux-observable
          </Text>

          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            redux-promise
          </Text>

          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            redux-loop
          </Text>

          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            redux-actions 
          </Text>

          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            redux-saga
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="images/middleware.jpeg" alt="" width="600" />
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
        <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
          >
            middleware
          </Text>

          <Text
            margin="10px 0 0"
            textColor="gray"
            textFont="secondary"
            textSize="26"
          >
            "proporciona un punto de extensión para terceros entre el envío de una acción y el momento en que alcanza el reducer"
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="/images/capa.webp" />
        <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
          >
            abrimos una nueva capa en nuestra aplicación
          </Text>

        </Slide>

        

        <Slide transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="36"
          >
          git checkout -b master
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" bgImage="./images/galaxy.webp">
          
        <div id="ui">
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        <div class="text">redux-saga</div>
        </div>
        <style>
          
        </style>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/mid.gif) center',
                  height: 200,
                  width: 200,
                  margin: 'auto',
                  lineHeight: '200px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              1
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              es un middleware
            </Text>
          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Highlight className="javascript" style={{ fontSize: 4 }}>
{`    
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { miFirstSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(miFirstSaga) // pero tenemos que darle run para que arranque 🚀
`}

            </Highlight>
        </Slide>


          <Slide transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="black"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/backend.webp) center',
                  height: 200,
                  width: 200,
                  margin: 'auto',
                  lineHeight: '200px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              2
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              tiene un background en sistemas distribuidos
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <img src='/images/papper.png' width="600" />
            <br/>
            <br/>
            <a style={{ fontSize:30, color: 'white' }} target='_blank' href="http://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf">www.cs.cornell.edu/andru/cs711/3002fa/reading/sagas.pdf</a>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <img src='/images/background-video.png' width="800" />
            <br/>
            <br/>
            <a style={{ fontSize:30, color: 'white' }} target='_blank' href="https://www.youtube.com/watch?v=YPbGW3Fnmbc">www.youtube.com/watch?v=YPbGW3Fnmbc</a>
          </Slide>

          

        <Slide transition={["slide"]} bgColor="secondary">
        <Text
                margin="10px 0 0"
                textColor="white"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/effect.gif) center',
                  height: 200,
                  width: 200,
                  margin: 'auto',
                  lineHeight: '200px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              3
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              <span style={{ color: 'yellow' }}>helper effects</span> para declarar efectos
            </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`    
import {
  take, takeEvery, select, put, call, cancel, fork, all
} from 'redux-saga/effects'

`}

            </Highlight>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="black"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/generator.webp) center',
                  height: 200,
                  width: 200,
                  margin: 'auto',
                  lineHeight: '200px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              4
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              los efectos son declarativos<br/>y están implementados con <span style={{ color: 'yellow' }}>generators</span>
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
          qué es un generator? 😢
          </Text>
          <Highlight className="javascript" style={{ fontSize: 4 }}>
{`function* numbers(n) {
  for (let i=1; i<=n; i++) {
    yield i
  }
}

const random = randomNumbers(5)

random.next() // { value: 1, done: false }
random.next() // { value: 2, done: false }
random.next() // { value: 3, done: false }
random.next() // { value: 4, done: false }
random.next() // { value: 5, done: true }

`}

            </Highlight>
        </Slide>


        <Slide transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
          podemos iterarlos
          </Text>
          <Highlight className="javascript" style={{ fontSize: 4 }}>
{`for (const n of randomNumbers(5)) {
    console.log(n)
}
`}

            </Highlight>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Highlight className="javascript" style={{ fontSize: 4 }}>
{`/*
1. es un creador de iterators
2. el iterator es iterable
3. utilizamos yield para generar valores
3. no devuelven siempre lo mismo (función impura)
*/
`}

            </Highlight>
        </Slide>


          <Slide transition={["slide"]} bgColor="primary">
            <img src='/images/first.webp' />
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              nuestra primera saga 💖
            </Text>

          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            watcher
          </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
  {`    
  import { select, takeEvery } from 'redux-saga/effects'
  import logLib from 'logger'

  function* logger(action) {
      const state = yield select() // select() == getState()
      logLib.info('Next State', state)
    })
  }

  function* watchLog() {
    yield takeEvery('LOG_STATE', logger) // escucha la acción LOG_STATE
  }

  `}

              </Highlight>
          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            put
          </Text>
            <Highlight className="javascript" >
  {`    
import { delay, put, select } from 'redux-saga/effects'
import { setValue } from '../actions'

function* waitAndIncrement(action) {
    const { value } = yield select()
    yield delay(100)
    yield put(setValue(value + 1)) // put == dispatch()
  })
}

function* watchIncrement() {
  yield takeEvery('WAIT_AND_INCREMENT', waitAndIncrement)
}

  `}

              </Highlight>
          </Slide>


          <Slide transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="tertiary"
                textSize="2 6"
              >
            <del>dispatch()</del> put() 
            </Text>
          </Slide>


          <Slide transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="black"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/future.webp) center',
                  height: 200,
                  width: 200,
                  margin: 'auto',
                  lineHeight: '200px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              6
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              utilizamos <span style={{ color: 'yellow' }}>call()</span> para ejecutar un metodo<br/>que devuelva una promise
            </Text>

          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            call
          </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
  {`    
import { call, put } from 'redux-saga/effects'

function* fetchProducts() {
  const productsRequest = yield call(fetch, 'api/products') // fetch('api/products')
  const products = yield call(productsRequest.json) // productsRequest.json()
  yield put(setProducts(products))
}
  `}

              </Highlight>
          </Slide>

        <Slide transition={["slide"]} bgColor="primary">
            <img src={"images/pokemon.gif"} />
        </Slide>


          <Slide contentStyles={{ maxWidth: 600 }} transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            action cretors
          </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`// new
export const fetchList = () => ({
    type: FETCH_LIST,
});
`}
              </Highlight>
          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            list saga
          </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_LIST, setList, setPreload } from "../ducks/images";
import { getList } from "../client/pokemonClient";

export function* listPokemonSaga() {
  try {
    const result = yield call(getList);
    yield put(setList(result.results));
    yield put(setPreload(false));
  } catch (err) {
    console.log(err);
  }
}

export function* watchListPokemonSaga() {
  yield takeEvery(FETCH_LIST, listPokemonSaga);
}
`}

              </Highlight>
          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            detail saga
          </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`
import { take, call, fork, select, put } from "redux-saga/effects";
import { SET_LIST, setItemDetail } from "../ducks/images";
import { getDetail } from "../client/pokemonClient";

const TOTAL_ATTEMPS = 3;

export function* handleDetailRequest(index, url) {
  for (let i = 0; i < TOTAL_ATTEMPS; i++) {
    try {
      const detail = yield call(getDetail, url);
      yield put(setItemDetail(index, detail));
      return true
    } catch (err) {
      // handle error
    }
  }
}

export function* setDetailSaga() {
  while (true) { // otra manera de hacer lo mismo
    yield take(SET_LIST);

    const { images } = yield select();

    for (let i = 0; i < images.list.length; i++) {
      yield fork(handleDetailRequest, i, images.list[i].url) // ramifica 🔥
    }
  }
}




`}

              </Highlight>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary" bgImage="./images/fork.webp">
          <Text
                margin="10px 0 0"
                textColor="black"
                textFont="secondary"
                textSize="36"
              >
              fork()<br/><br/>
            </Text>
            <img src="/images/api-fork.png" alt="" width="1000" />
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="black"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/external.webp) center',
                  height: 200,
                  width: 200,
                  margin: 'auto',
                  lineHeight: '200px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              7
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              manejo de eventos externos a redux con <span style={{ color: 'yellow' }}>channels</span>
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="tertiary">
            <img src='/images/socket.png' width="250" /><br/><br/>
            <img src='/images/threejs.png' width="250" /><br/><br/>
            <img src='/images/game.jpg' width="250" /><br/><br/>
            <img src='/images/winamp.png' width="250" /><br/><br/>
            <img src='/images/video.jpg' width="250" /><br/><br/>
            <Text
                margin="10px 0 0"
                textColor="primary"
                textFont="secondary"
                textSize="30"
              >
              [...]
            </Text>
          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="26"
              >
              offline saga
            </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`import { eventChannel } from 'redux-saga'
import { take, put } from 'redux-saga/effects'
import { setOffline } from '../ducks/images'

const internetStatusChannel = eventChannel(emitter => {
    window.addEventListener("online", emitter);
    window.addEventListener("offline", emitter);
})

function* internetStatusSaga() {
    while (true) {
        yield take(internetStatusChannel)
        yield put(setOffline(!navigator.onLine))
    }
}

export default internetStatusSaga
`}

              </Highlight>
          </Slide>


          <Slide transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="black"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/cancel.webp) center',
                  height: 200,
                  width: 200,
                  margin: 'auto',
                  lineHeight: '200px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              8
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              las sagas pueden ser <span style={{ color: 'yellow' }}>canceladas</span>
            </Text>

          </Slide>


          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="26"
              >
              escape
            </Text>
<Highlight className="javascript" style={{ fontSize: 4 }}>
{`const ESCAPE_EVENT = 'ESCAPE_EVENT'
const ESC_KEY_EVENT = 27;

const escapeChannel = eventChannel(emitter => {
    document.addEventListener('keydown', (event) => {
        const evt = event || window.event;
        if (evt.keyCode === ESC_KEY_EVENT) {
            emitter({ type: ESCAPE_EVENT })
        }
    });
})

function* escapeSaga() {
    yield take(escapeChannel)
    yield put(unselectItem())
}

export default function* escapeWatcher() {
    while(true) {
        yield take(SELECT_ITEM)
        const escapeTask = yield fork(escapeSaga)
        yield take(UNSELECT_ITEM)
        yield cancel(escapeTask)
    }
}



`}

              </Highlight>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <img src={"images/mapa1.png"} width="700" />
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <img src={"images/mapa2.png"} width="800" />
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <img src={"images/mapa3.png"} width="800" />
          </Slide>


          <Slide transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="black"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/test.webp) center',
                  height: 200,
                  width: 200,
                  margin: 'auto',
                  lineHeight: '200px',
                  backgroundSize: 'contain',
                  marginBottom: 50
                 }}
              >
              9
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              testing
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              step-by-step <span style={{ color: 'black' }}>vs</span> run
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              yields <span style={{ color: 'black' }}>vs</span> side effects
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              <span style={{ color: 'yellow' }}>step by step >></span> redux-saga-test y redux-saga-testing
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              <span style={{ color: 'yellow' }}>run >></span> redux-saga-tester y redux-saga-test-plan
            </Text>

          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`
import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_LIST, setList, setPreload } from "../ducks/images";
import { getList } from "../client/pokemonClient";

export function* listPokemonSaga() {
  try {
    const result = yield call(getList);
    yield put(setList(result.results));
    yield put(setPreload(false));
  } catch (err) {
    console.log(err);
  }
}

export function* watchListPokemonSaga() {
  yield takeEvery(FETCH_LIST, listPokemonSaga);
}
`}

              </Highlight>
          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`
import { listPokemonSaga } from '../list'
import { runSaga } from 'redux-saga';
import * as api from '../../client/pokemonClient'
import { setList, setPreload } from '../../ducks/images';

test('Saga list', async () => {
    const dispatchedActions = []; // lista de dispatch del saga
    const fakeStore = { // mock redux store
        getState: () => ({  }),
        dispatch: action => dispatchedActions.push(action),
    };
    const fakePokemonList = { // mock respuesta de api
        results: [
            {
                name: 'bulbasaur',
                url: 'https://pokeapi.co/api/v2/pokemon/1/'
            }
        ]
    };

    api.getList = jest.fn(() => Promise.resolve(fakePokemonList)); // mock api list
    await runSaga(fakeStore, listPokemonSaga).done;

    expect(api.getList.mock.calls.length).toBe(1)
    expect(dispatchedActions).toContainEqual(setList(fakePokemonList.results));
    expect(dispatchedActions).toContainEqual(setPreload(false));
})




`}

              </Highlight>
          </Slide>


          <Slide transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="white"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/ssr.webp) center',
                  height: 200,
                  width: 200,
                  margin: 'auto',
                  lineHeight: '200px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              10
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              server side rendering
            </Text>

          </Slide>   
          
           
          <Slide transition={["slide"]} bgColor="secondary">
            <img src='/images/next-redux-saga.png' width="700" />
            <br/>
            <br/>
            <a style={{ fontSize:30, color: 'white' }} target='_blank' href="https://github.com/zeit/next.js/tree/canary/examples/with-redux-saga">github.com/zeit/next.js/tree/canary/examples/with-redux-saga</a>
          </Slide>


          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            _app.js
          </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import createStore from '../store'

class MainApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}
export default withRedux(createStore)(withReduxSaga(MyApp))





`}

              </Highlight>
          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
                textColor="yellow"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/think.gif) center',
                  height: 300,
                  width: 900,
                  margin: 'auto',
                  lineHeight: '300px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              conclusiones personales
            </Text>
          </Slide>

          <Slide contentStyles={{ maxWidth: 900 }} transition={["slide"]} bgColor="primary" bgImage="./images/bueno.webp">
          
             <Text
                margin="10px 0 0"
                textColor="secondary"
                textFont="secondary"
                textSize="46"
              >
              lo bueno
            </Text>

            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`1. organiza los side effects de manera simple
2. action creators planos // (no ocurre en redux-thunk)
3. simplicidad en asincronismo complejo
4. nueva capa en nuestra aplicación
5. eventos externos a redux
6. testeo de side effects
`}

              </Highlight>

          </Slide>

          <Slide contentStyles={{ maxWidth: 700 }} transition={["slide"]} bgColor="primary" bgImage="./images/bad.webp">
          
          <Text
             margin="10px 0 0"
             textColor="white"
             textFont="secondary"
             textSize="46"
           >
           lo malo
         </Text>

         <Highlight className="javascript" style={{ fontSize: 4 }}>
{`1. una nueva lib = + peso
2. un nuevo patrón a aprender
3. server side rendering más complejo
`}

           </Highlight>

       </Slide>

          <Slide transition={["slide"]} bgColor="primary" bgImage="./images/end.gif">
          
          <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="40"
              >
              the end.
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="primary" bgImage="./images/ttv.gif">
          
          <Text
                margin="10px 0 0"
                textColor="yellow"
                textFont="secondary"
                textSize="56"
                className="blink"
              >
              <span style={{ background: 'black', color: 'yellow'}}>
              GRACIAS A TODOXS
              <br/><br/>
              polbac@gmail.com</span>
            </Text>

          </Slide>

      </Deck>
    );
  }
}

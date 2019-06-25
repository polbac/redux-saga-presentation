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
            textColor="primary"
            textFont="secondary"
            textSize="30"
          >
            @polbac
          </Text>
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
          >
            medium . github . fb . instg
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
          >
            working at
          </Text>
          <Text margin="10px 0 0" textColor="primary" size={0.5}>
            <img src="https://www.trocafone.com/assets/img/global/common/logo.png" />
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="/images/flag.gif" />
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
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
              width={300}
            />
            <br />
            <br />
            <br />
            suricata
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
            textColor="secondary"
            textFont="secondary"
            textSize="66"
            className="blink"
          >
            get start!
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="images/why.png" width="300" alt="" />
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="images/troll.jpg" width="300" alt="" />
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <img src={"images/pokemon.gif"} />
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="30"
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
            (store, actions, action creators, connect())
            </Text>
          
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
            textSize="26"
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

        <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
        <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="26"
              >
              redux store
            </Text>
          <Highlight className="javascript" style={{ textAlign: "left" }}>
{`
const initState = {
    preloading: true,
    list: [],
    detailId: null,
    offline: false,
};
            `}
          </Highlight>
        </Slide>
        
        <Slide contentStyles={{ maxWidth: 1300 }}  transition={["slide"]} bgColor="secondary">
        <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="26"
              >
              reducer
            </Text>
          <Highlight className="javascript" style={{ textAlign: "left" }}>
{`export function reducer(state = initState, action) {
    const newState = { ...state };
    switch (action.type) {
        case SET_PRELOAD:
            newState.preloading = action.state;
            break;

        case SET_LIST:
            newState.list = action.list;
            break;

        case SET_ITEM_DETAIL:
            newState.list = newState.list.map((item, index) =>
                index === action.id ? action.data : item);
            break;

        case SELECT_ITEM:
            newState.detailId = action.index;
            break;

        case SET_OFFLINE:
            newState.offline = action.offline;
            break;
    }

    return newState;
}
`}
          </Highlight>
        </Slide>

        <Slide contentStyles={{ maxWidth: 1300 }}  transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
          action creators
          </Text>
          <Highlight className="javascript" style={{ textAlign: "left" }}>
            {`
export const setPreload = state => ({ // cambia el estado del spinner
    type: SET_PRELOAD,
    state,
});

export const setList = list => ({ // guarda el listado
    type: SET_LIST,
    list,
});

export const setItemDetail = (id, data) => ({ // guarda el detail
    type: SET_ITEM_DETAIL,
    id,
    data,
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
          action creators
          </Text>
          <Highlight className="javascript" style={{ textAlign: "left" }}>
            {`
export const selectItem = (index) => ({  // selecciona un item a visualizar
    type: SELECT_ITEM,
    index,
});

export const setOffline = offline => ({  // guarda el estado de conexíon a internet
    type: SET_OFFLINE,
    offline,
});
            `}
          </Highlight>
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
            {`
class List extends React.Component {

  componentDidMount() {
    const { showSpinner, hideSpinner, setList } = this.props;
    
    showSpinner();
    
    fetch(API_LIST_URL)
      .then(res => res.json())
      .then(list => {
        hideSpinner();
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
          setItemDetail(index, item); // guarda en el store el detail
        })
    );
  }

            `}
          </Highlight>
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
      this.props.close();
    }
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
            textColor="gray"
            textFont="secondary"
            textSize="30"
          >
            redux-observable
          </Text>

          <Text
            margin="10px 0 0"
            textColor="gray"
            textFont="secondary"
            textSize="30"
          >
            redux-promise
          </Text>

          <Text
            margin="10px 0 0"
            textColor="gray"
            textFont="secondary"
            textSize="30"
          >
            redux-loop
          </Text>

          <Text
            margin="10px 0 0"
            textColor="gray"
            textFont="secondary"
            textSize="30"
          >
            redux-actions 
          </Text>

          <Text
            margin="10px 0 0"
            textColor="gray"
            textFont="secondary"
            textSize="30"
          >
            ...
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="images/middleware.jpeg" alt="" width="600" />
        </Slide>

        <Slide contentStyles={{ maxWidth: 1300 }}  transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            instalar middleware
          </Text>
          <Highlight className="javascript" style={{ fontSize: 4 }}>
            {`
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
)

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
            thunk en programación funcional
          </Text>
        <Highlight className="javascript" style={{ fontSize: 4 }}>
{`
const sumar = (x, y) => x + y

const hacerAlgo = (_thunkSuma) => {
  console.log('voy a hacer mates')
  console.log('ahora voy a sumar', _thunkSuma())
}

const thunkSuma = () => sumar(10, 30)

hacerAlgo(thunkSuma)

`}
          </Highlight>
        </Slide>


        <Slide contentStyles={{ maxWidth: 1300 }}  transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            redux-thunk
          </Text>

      

          <Highlight className="javascript" style={{ fontSize: 4 }}>
            {`
export const fetchItems = (dispatch, getState) =>{
  fetch(API_LIST_URL)
    .then(res => res.json())
    .then(list => {
      dispatch(setList(list.results))
    })
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
          action creator plano
          </Text>
        <Highlight className="javascript" style={{ fontSize: 4 }}>
{`/*
1. Un action creator devuelve un objeto
2. El objeto tiene un type y más información
*/

const action: {type: string} = ({ type: ACTION_TYPE_NAME, ...data })
`}
          </Highlight>
        </Slide>

        <Slide contentStyles={{ maxWidth: 1300 }}  transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
          action creator thunk
          </Text>
          <Highlight className="javascript" style={{ fontSize: 4 }}>
  {`/*
1. Una acción thunk es una acción que retorna una función
2. Permite aplicar un delay y dispachar una nueva acción
4. Reciben por argumento un dispatch y un getState
3. Un thunk no retorna un objeto plano
*/

const action: {dispatch: Function, getState: Function} = (dispatch, getState) =>
      dispatch({ type: ACTION_TYPE_NAME, ...data })
  `}
            </Highlight>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="26"
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
              tiene un background en backend & microservicios
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
import * from 'redux-saga/effects'

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
          <Highlight className="javascript" style={{ fontSize: 4 }}>
{`/*
1. es una función
2. es iterable
3. utilizamos yield para generar valores
3. no devuelven siempre lo mismo (función impura)
*/
`}

            </Highlight>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
        <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/pull.webp) center',
                  height: 200,
                  width: 200,
                  margin: 'auto',
                  lineHeight: '200px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              5
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="30"
              >
              utilizamos un patrón de <span style={{ color: 'yellow' }}>pull & put</span>
            </Text>

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
    yield takeEvery('LOG_STATE', logger)
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
              utilizamos <span style={{ color: 'yellow' }}>call</span> para ejecutar promises
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


        <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            store
          </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`
const initState = {
    preloading: true,
    list: [],
    detailId: null,
    offline: false,
};
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
            action cretors
          </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`export const setList = list => ({
    type: SET_LIST,
    list,
});

export const setItemDetail = (id, data) => ({
    type: SET_ITEM_DETAIL,
    id,
    data,
});

export const selectItem = (index) => ({
    type: SELECT_ITEM,
    index,
});

export const unselectItem = () => ({
    type: UNSELECT_ITEM,
});

export const setOffline = offline => ({
    type: SET_OFFLINE,
    offline,
});

// new
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
      yield fork(handleDetailRequest, i, images.list[i].url) // no bloqueante 🔥
    }
  }
}
`}

              </Highlight>
          </Slide>
          <Slide transition={["slide"]} bgColor="secondary">
          <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="26"
              >
              fork()<br/><br/>
            </Text>
            <img src="/images/api-fork.png" alt="" width="900" />
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
    return () => {
        window.removeEventListener('online')
        window.removeEventListener('offline')
    }
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
{`import { eventChannel } from 'redux-saga'
import { take, put } from 'redux-saga/effects'
import { SELECT_ITEM, unselectItem } from '../ducks/images'

const ESCAPE_EVENT = 'ESCAPE_EVENT'
const ESC_KEY_EVENT = 27;

const escapeChannel = eventChannel(emitter => {
    document.addEventListener('keydown', (event) => {
        const evt = event || window.event;
        if (evt.keyCode === ESC_KEY_EVENT) {
            emitter(unselectItem())
        }
    });

    return () => {
        document.removeEventListener('keydown')
    }
})

function* escapeSaga() {
    while (true) {
        yield take(SELECT_ITEM)
        yield take(escapeChannel)
        yield put(unselectItem())
    }
}
export default escapeSaga
`}

              </Highlight>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <img src={"images/mapa-saga.png"} width="600" />
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <img src={"images/mapa-channel.png"} width="800" />
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
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`
import { take, put, call, fork, cancel, cancelled, delay } from 'redux-saga/effects'

function* backgroundCheck() {
  try {
    while (true) {
      const response = yield call(api.fetchState)
      put(saveState(response))
      yield delay(5000)
    }
  } finally {
    if (yield cancelled()) {
      // backgroundCheck() fue cancelado      
    }
  }
}

function* watchFetch() {
  while (take(START_BACKGROUND_CHECK)) {
    const backgroundCheckTask = yield fork(backgroundCheck)
    yield take(STOP_BACKGROUND_CHECK)
    yield cancel(backgroundCheckTask)
  } 
}
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
                textColor="black"
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
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`import withReduxSaga from 'next-redux-saga'`}

              </Highlight>
          </Slide>


          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="30"
          >
            store
          </Text>
            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer, { exampleInitialState } from './reducer'
import rootSaga from './saga'

function configureStore (initialState = exampleInitialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware([sagaMiddleware])
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore


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
                textColor="white"
                textFont="secondary"
                textSize="56"
                style={{ 
                  background: 'url(/images/think.gif) center',
                  height: 300,
                  width: 600,
                  margin: 'auto',
                  lineHeight: '300px',
                  backgroundSize: 'cover',
                  marginBottom: 50
                 }}
              >
              conslusiones
            </Text>
          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="primary" bgImage="./images/bueno.webp">
          
             <Text
                margin="10px 0 0"
                textColor="secondary"
                textFont="secondary"
                textSize="26"
              >
              lo bueno
            </Text>

            <Highlight className="javascript" style={{ fontSize: 4 }}>
{`1. organiza los side effects de manera simple
2. action creators planos
3. simplicidad en asincronismo complejo
4. nueva capa en nuestra aplicacíon
5. eventos externos a redux
6. testeo de side effects
`}

              </Highlight>

          </Slide>

          <Slide contentStyles={{ maxWidth: 1300 }} transition={["slide"]} bgColor="primary" bgImage="./images/bad.webp">
          
          <Text
             margin="10px 0 0"
             textColor="white"
             textFont="secondary"
             textSize="26"
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
                textSize="30"
              >
              this is the end
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="primary" bgImage="./images/ttv.gif">
          
          <Text
                margin="10px 0 0"
                textColor="yellow"
                textFont="secondary"
                textSize="56"
              >
              gracias a todxs
            </Text>

          </Slide>

      </Deck>
    );
  }
}

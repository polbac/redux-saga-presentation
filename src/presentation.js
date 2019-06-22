// Import React
import React from "react";

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
  CodePane
} from "spectacle";

import "highlight.js/styles/atom-one-dark-reasonable.css";

import Highlight from "react-highlight";

import ReactSVG from 'react-svg'

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "blue",
    secondary: "#282424",
    tertiary: "white",
    quaternary: "#CECECE"
  },
  {
    primary: '"Anonymous Pro", mono-space',
    secondary: '"Press Start 2P"'
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
            textColor="secondary "
            textSize="22"
          >
            redux-saga
            <br /> & side effects
          </Text>

          <Text
            textFont="secondary"
            margin="10px 0 100px"
            textColor="primary"
            textSize="20"
          >
            @ react-ba
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Text
            textFont="secondary"
            margin="10px 0 10px"
            textColor="tertiary"
            textFont="secondary"
            textSize="16"
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
            textSize="16"
          >
            @polbac
          </Text>
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="16"
          >
            medium . github . fb . instg
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="16"
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
            textSize="16"
          >
            buy > refurbish > sale
          </Text>
        </Slide>
        
        <Slide transition={["slide"]} bgColor="tertiary">
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="16"
          >
            <img
              src="https://camo.githubusercontent.com/2d228d5c41052aae5b44411806930afb637a2f16/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f695a4e787a48524f637065796b2f67697068792e676966"
              width={300}
            />
            <br />
            <br />
            <br />
            suricata
          </Text>

          <Text margin="10px 0 0" textColor="primary" textSize="16">
            [ account, catalog, cart, checkout ]
          </Text>

          <Text margin="10px 0 0" textColor="primary" textSize="16">
            monolith >> microservices
          </Text>
        </Slide>



        <Slide transition={["slide"]} bgColor="tertiary">
          
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="16"
          >
            <img src="/images/next.png" width="150" align="middle" style={{ marginRight: 50 }}/>
            <img src="/images/react.png" width="100" align="middle" style={{ marginRight: 50 }}/>
            <img src="/images/redux.png" width="100" align="middle" style={{ marginRight: 50 }}/>
            <img src="/images/saga.png" width="120" align="middle" />
          </Text>
        </Slide>

        <Slide
          transition={["slide"]}
          bgImage="./images/start.gif"
          bgColor="tertiary"
        >
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="66"
            className="blink"
          >
            get start!
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <img src={"images/pokemon.gif"} />
          <Text
            margin="10px 0 0"
            textColor="primary"
            textFont="secondary"
            textSize="16"
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
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="20"
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

        <Slide transition={["slide"]} bgColor="secondary">
          <Highlight className="javascript" style={{ textAlign: "left" }}>
            {`
// redux store
const initState = {
    preloading: true,
    list: [],
    detailId: null,
    offline: false,
};
            `}
          </Highlight>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Highlight className="javascript" style={{ textAlign: "left" }}>
            {`
// action creators
export const setPreload = state => ({
    type: SET_PRELOAD,
    state,
});

export const setList = list => ({
    type: SET_LIST,
    list,
});

export const setItemDetail = (id, data) => ({
    type: SET_ITEM_DETAIL,
    id,
    data,
});
            `}
          </Highlight>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Highlight className="javascript" style={{ textAlign: "left" }}>
            {`
// action creators
export const selectItem = (index) => ({
    type: SELECT_ITEM,
    index,
});

export const setOffline = offline => ({
    type: SET_OFFLINE,
    offline,
});
            `}
          </Highlight>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Highlight className="javascript" style={{ fontSize: 2 }}>
            {`
class List extends React.Component {

  componentDidMount() {
    const { showSpinner, hideSpinner, setPokemonList } = this.props;
    
    showSpinner();
    
    fetch(API_LIST_URL)
      .then(res => res.json())
      .then(list => {
        hideSpinner();
        setPokemonList(list.results);
        this.loadDetails();
      });
  }

  loadDetails() {
    const { list, setPokemonDetail } = this.props;
    
    list.map((item, index) =>
      fetch(item.url)
        .then(res => res.json())
        .then(item => {
          setPokemonDetail(index, item);
        })
    );
  }

            `}
          </Highlight>
        </Slide>


        <Slide transition={["slide"]} bgColor="secondary">
          <Highlight className="javascript" style={{ fontSize: 2 }}>
            {`  
// 😩 No podemos hacer esto
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
            textSize="16"
          >
            redux-thunk
          </Text>

          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="16"
          >
            redux-observable
          </Text>

          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="16"
          >
            redux-promise
          </Text>

          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="16"
          >
            redux-loop
          </Text>

          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="16"
          >
            redux-actions 
          </Text>

          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="16"
          >
            ...
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <img src="images/middleware.gif" alt="" width="600" />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="16"
          >
            install middleware
          </Text>
          <Highlight className="javascript" style={{ fontSize: 2 }}>
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

        <Slide transition={["slide"]} bgColor="secondary">
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="16"
          >
            thunk en programación funcional
          </Text>
        <Highlight className="javascript" style={{ fontSize: 2 }}>
{`
const sumar = (x, y) => x + y

const hacerAlgoLuego = (thunkSumar) => {
  console.log(thunkSumar())
}

const thunkSumar = () => sumar(10, 20)

hacerAlgoLuego(thunkSumar)

`}
          </Highlight>
        </Slide>


        <Slide transition={["slide"]} bgColor="secondary">
        <Text
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
            textSize="16"
          >
            redux-thunk
          </Text>

      

          <Highlight className="javascript" style={{ fontSize: 2 }}>
            {`
export const fetchItems = dispatch =>
  fetch(API_LIST_URL)
    .then(res => res.json())
    .then(list => dispatch(setList(list.results)))
            `}
          </Highlight>
        </Slide>

        

        <Slide transition={["slide"]} bgColor="secondary">
        <Highlight className="javascript" style={{ fontSize: 2 }}>
{`/*
1. Un action creator devuelve un objeto
2. El objeto tiene un type y más información
*/
const action: {type: string} = ({ type: ACTION_TYPE_NAME })
`}
          </Highlight>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Highlight className="javascript" style={{ fontSize: 2 }}>
  {`/*
  1. Una acción thunk es una acción que retorna una función
  2. Permite aplicar un delay y dispachar una nueva acción
  4. Reciben por argumento un dispatch y un getState
  3. Un thunk no retorna un objeto plano
  */
  const action: {dispatch: Function, getState: Function} = (dispatch, getState) =>
      dispatch({ type: ACTION_TYPE_NAME })
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
                textColor="primary"
                textFont="secondary"
                textSize="56"
              >
              1
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              es también un middleware
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
          <Highlight className="javascript" style={{ fontSize: 2 }}>
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
                textColor="primary"
                textFont="secondary"
                textSize="56"
              >
              2
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              tiene un background en backend & microservicios
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <img src='/images/papper.png' width="600" />
            <br/>
            <br/>
            <a style={{ fontSize:16, color: 'white' }} target='_blank' href="http://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf">www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf</a>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <img src='/images/background-video.png' width="800" />
            <br/>
            <br/>
            <a style={{ fontSize:16, color: 'white' }} target='_blank' href="https://www.youtube.com/watch?v=YPbGW3Fnmbc">www.youtube.com/watch?v=YPbGW3Fnmbc</a>
          </Slide>

          

        <Slide transition={["slide"]} bgColor="secondary">
            <Text
                margin="10px 0 0"
                textColor="primary"
                textFont="secondary"
                textSize="56"
              >
              3
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              <span style={{ color: 'yellow' }}>helper effects</span> para trabajar con el store<br/>y con acciones asincrónicas
            </Text>
            <Highlight className="javascript" style={{ fontSize: 2 }}>
{`    
import * from 'redux-saga/effects

`}

            </Highlight>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Text
                margin="10px 0 0"
                textColor="primary"
                textFont="secondary"
                textSize="56"
              >
              4
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              los efectos son declarativos<br/>y están implementados con <span style={{ color: 'yellow' }}>generators</span>
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
          <Highlight className="javascript" style={{ fontSize: 2 }}>
{`    
// qué es un generator? 😢

function* numbers(n) {
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
          <Highlight className="javascript" style={{ fontSize: 2 }}>
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
                textColor="primary"
                textFont="secondary"
                textSize="56"
              >
              5
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              utilizamos un patrón de <span style={{ color: 'yellow' }}>pull & put</span>
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              nuestra primera saga 💖
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
  {`    
  import { select, takeEvery } from 'redux-saga/effects'
  import logLib from 'logger'

  function* logger(action) {
      const state = yield select()
      logLib.info('Next Sttate', state)
    })
  }

  function* watchLog() {
    yield takeEvery('LOG_STATE', logger) // pull ⬇
  }

  `}

              </Highlight>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
  {`    
import { delay, put, select } from 'redux-saga/effects'

function* waitAndIncrementRandom(action) {
    const { value } = yield select()
    yield delay(100)
    put({ type: 'SET_VALUE', value: value + Math.random()}) // put ⬆
  })
}

function* watchIncrement() {
  yield takeEvery('WAIT_AND_INCREMENT', waitAndIncrementRandom)
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
                textColor="primary"
                textFont="secondary"
                textSize="56"
              >
              6
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              utilizamos <span style={{ color: 'yellow' }}>call</span> para ejecutar promises
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
  {`    
import { call, put } from 'redux-saga/effects'

function* fetchProducts() {
  const productsRequest = yield call(fetch, 'api/products')
  const products = yield productsRequest.json()
  put({ type: 'SET_PRODUCTS', products })
}
  `}

              </Highlight>
          </Slide>

        <Slide transition={["slide"]} bgColor="primary">
            <img src={"images/pokemon.gif"} />
        </Slide>


        <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
  {`// store
const initState = {
    preloading: true,
    list: [],
    detailId: null,
    offline: false,
};
`}

              </Highlight>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
  {`// action creators
export const fetchList = () => ({
    type: FETCH_LIST,
});

export const setList = list => ({
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
`}

              </Highlight>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
{`// list saga
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

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
{`// detail saga
import { take, call, fork, select, put } from "redux-saga/effects";
import { SET_LIST, setItemDetail } from "../ducks/images";
import { getDetail } from "../client/pokemonClient";

const TOTAL_ATTEMPS = 3;

export function* handleRequest(index, url) {
  for (let i = 0; i < TOTAL_ATTEMPS; i++) {
    try {
      const detail = yield call(getDetail, url);
      yield put(setItemDetail(index, detail));
      return true;
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
      yield fork(handleRequest, i, images.list[i].url) // no bloqueante 🔥
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
                textColor="primary"
                textFont="secondary"
                textSize="56"
              >
              7
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
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
                textSize="16"
              >
              [...]
            </Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
{`// offline
import { eventChannel } from 'redux-saga'
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


          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
{`// escape
import { eventChannel } from 'redux-saga'
import { take, put } from 'redux-saga/effects'
import { SELECT_ITEM, unselectItem } from '../ducks/images'

const ESCAPE_EVENT = 'ESCAPE_EVENT'
const ESC_KEY_EVENT = 27;

const escapeChannel = eventChannel(emitter => {
    document.addEventListener('keydown', (event) => {
        const evt = event || window.event;
        console.log('keydown')
        if (evt.keyCode === ESC_KEY_EVENT) {
            emitter({ type: ESCAPE_EVENT })
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
                textColor="primary"
                textFont="secondary"
                textSize="56"
              >
              8
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              las sagas pueden ser <span style={{ color: 'yellow' }}>canceladas</span>
            </Text>

          </Slide>


          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
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
                textColor="primary"
                textFont="secondary"
                textSize="56"
              >
              9
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              testing
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              step-by-step <span style={{ color: 'black' }}>vs</span> run
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              yields <span style={{ color: 'black' }}>vs</span> side effects
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              <span style={{ color: 'yellow' }}>step by step >></span> redux-saga-test y redux-saga-testing
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              <span style={{ color: 'yellow' }}>run >></span> redux-saga-tester y redux-saga-test-plan
            </Text>

          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
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

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
{`
import { listPokemonSaga } from '../list'
import { runSaga } from 'redux-saga';
import * as api from '../../client/pokemonClient'
import { setList, setPreload } from '../../ducks/images';

test('Saga list', async () => {
    const dispatchedActions = [];
    const fakeStore = {
        getState: () => ({  }),
        dispatch: action => dispatchedActions.push(action),
    };
    const fakePokemonList = {
        results: [
            {
                name: 'bulbasaur',
                url: 'https://pokeapi.co/api/v2/pokemon/1/'
            }
        ]
    };

    api.getList = jest.fn(() => Promise.resolve(fakePokemonList));
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
                textColor="primary"
                textFont="secondary"
                textSize="56"
              >
              10
            </Text>
            <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
              >
              server side rendering
            </Text>

          </Slide>   
          
           
          <Slide transition={["slide"]} bgColor="secondary">
            <img src='/images/next-redux-saga.png' width="700" />
            <br/>
            <br/>
            <a style={{ fontSize:16, color: 'white' }} target='_blank' href="https://github.com/zeit/next.js/tree/canary/examples/with-redux-saga">github.com/zeit/next.js/tree/canary/examples/with-redux-saga</a>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
{`import withReduxSaga from 'next-redux-saga'`}

              </Highlight>
          </Slide>


          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
{`
// store
import { applyMiddleware, createStore } from 'redux'
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

          <Slide transition={["slide"]} bgColor="secondary">
            <Highlight className="javascript" style={{ fontSize: 2 }}>
{`// pages/_app.js
import App, { Container } from 'next/app'
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

          <Slide transition={["slide"]} bgColor="primary" bgImage="./images/sky.png">
          
          <Text
                margin="10px 0 0"
                textColor="secondary"
                textFont="secondary"
                textSize="26"
              >
              conclusiones
            </Text>

            <Highlight className="javascript" style={{ fontSize: 2 }}>
{`1. organiza los side effects
2. action creators planas
3. simplicidad en asincronismo complejo
4. estilo declarativo
5. eventos externos a redux
6. simplicidad de testeo (side effects) 
`}

              </Highlight>

          </Slide>

          <Slide transition={["slide"]} bgColor="primary" bgImage="./images/end.gif">
          
          <Text
                margin="10px 0 0"
                textColor="tertiary"
                textFont="secondary"
                textSize="16"
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

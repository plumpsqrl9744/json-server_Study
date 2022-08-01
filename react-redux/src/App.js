import React from 'react';
import {useState} from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch, connect} from 'react-redux';
function reducer(currentState, action){
  if(currentState === undefined) {
    return {
      number : 1
    };
  }
  // reduer는 이렇게 표현한다.(조건문)
  const newState = {...currentState};
  if (action.type === 'PLUS') {
    newState.number ++;
  }
  // reduer는 이렇게 표현한다.(조건문) 액션타입이 PLUS라는 이름을 가지고 있고,
  // 버튼을 클릭하면 newState의 number값이 1씩 증가한다!
  return newState;
}
const store = createStore(reducer);



function App () {



    return (
        <div id = "containers">
            <h1>Root : </h1>
            <div id="grid">
            <Provider store ={store}>
            <Left1></Left1>
            <Right1></Right1>
            </Provider>
            </div>
        </div>
    );
}

function Left1(props) {
    return (
        <div>
            <h1>Left1 : </h1>
            <Left2></Left2>
        </div>
    );
}

function Left2(props) {
    return (
        <div>
            <h1>Left2 : </h1>
            <Left3></Left3>
        </div>
    );
}

function Left3(props) {
  // function f(state){
  //   return state.number;
  // }
  //   const number = useSelector(f); 도 가능
  // 간단하게 쓰면 아래 코드 같이 쓸 수 있다.
  const number = useSelector(state => state.number);

    //만약 reducer의 number값을 letf3에 넣으려면 어떻게 해야될까?
    // 그때 사용하는것이 useSelector이다
    //useSelector는 함수를 인자로 받기때문에 함수를 만들어야 된다. 
    //함수는 스테이트 값을 입력값으로 받고 스테이트 값중에 어떤 값을 사용할지 정하면 된다

    return (
        <div>
            <h1>Left3 : {number}</h1>
        </div>
    );
}

function Right1(props) {
  return (
      <div>
          <h1>Right1</h1>
          <Right2></Right2>
      </div>
  );
}
function Right2(props) {
  return (
      <div>
          <h1>Right2</h1>
          <Right3></Right3>
      </div>
  );
}
function Right3(props) {
  const dispatch = useDispatch();
  return (
      <div>
          <h1>Right3</h1>
          <input type="button" value="+" onClick={() => {
            dispatch({ type : 'PLUS'});
          }}/>
          {/* dispatch를 사용하여 PLUS라고 하는 action을 전달한 것이다. */}
      </div>
  );
}


export default App;
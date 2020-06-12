import React, { Component } from 'react';
import styled from 'styled-components';
import { GiTomato } from 'react-icons/gi';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7159c1;
  min-height: 100vh;
`;

const Pomodoro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 60vh;
  max-width: 600px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 41px -10px rgba(0,0,0,1);

  @media(max-width: 490px) {
    max-width: 350px;
  }
`;

const IconPomodoro = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 3% auto 0 auto;

  @media(max-width: 490px) {
    width: 150px;
  }
`;

const ScreenCount = styled.div`
  width: 60%;
  height: 25vh;
  margin: 2% auto;
  background: #666;
  border-radius: 5px;
  display: flex;
  color: #fff;
  flex-wrap: wrap;
  font-size: 2rem;
  align-items: center;
  justify-content: center;

  span {
    font-size: 3.5rem;
  }
`;

const Mensage = styled.div`
  font-size: 1.5rem;
  width: 100%;
  padding: 0 1rem;
  text-align: center;
  color: red;
`;

const Buttons = styled.div`
  width: 63%;
  margin: 0 auto 5% auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 490px) {
    width: 95%;
  }
`;

const Start = styled.button`
  color: #fff;
  background: #7159c1;
  border-radius: 5px;
  width: 35%;
  height: 2.3rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 .5rem;
  cursor: pointer;
`;

const Pause = styled.button`
  color: #fff;
  background: #7159c1;
  border-radius: 5px;
  width: 35%;
  height: 2.3rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 .5rem;
  cursor: pointer;
`;

const Reset = styled.button`
  color: #fff;
  background: #7159c1;
  border-radius: 5px;
  width: 35%;
  height: 2.3rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 .5rem;
  cursor: pointer;
`;

export default class App extends Component {
  state = {
    min: 25,
    sec: 0,
    modal: false,
  }

  handleStart = () => {
    clearInterval(this.intervalSec)
    this.intervalSec = setInterval(() => {
      if (this.state.sec === 0 && this.state.min > 0) {
        this.setState({
          sec: 59,
          min: this.state.min - 1,
        })
      }
      if (this.state.sec > 0) {
        this.setState({
          sec: this.state.sec - 1,
        })
      }
    }, 1000)
  }

  handlePause = () => {
    clearInterval(this.intervalSec)
  }

  handleReset = () => {
    this.setState({
      min: 25,
      sec: 0,
    })

    clearInterval(this.intervalSec)
  }
  
  render() {
    const {min, sec} = this.state;

    return (
      <Container>
        <Pomodoro>
          <IconPomodoro>
            <GiTomato size={110} color="#7159c1" />
            <GiTomato size={110} color="#7159c1" />
          </IconPomodoro>
          <ScreenCount>
          {this.state.min === 25 && this.state.sec === 0 ? <span>25:00</span> : <span>{min}:{sec}</span>}
          {this.state.sec === 0 && this.state.min === 0 && <Mensage>O seu pomodoro terminou</Mensage>}
          </ScreenCount>
          <Buttons>
            <Start
              onClick={this.handleStart}
              type="button">
              Iniciar
            </Start>
            <Pause
              onClick={this.handlePause}
              type="button">
              Pausar
            </Pause>
            <Reset
              onClick={this.handleReset}
              type="button">
              Parar
            </Reset>
          </Buttons>
        </Pomodoro>
      </Container>
    );
  }
}

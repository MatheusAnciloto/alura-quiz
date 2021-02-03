import styled from 'styled-components';
import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Delicioso</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Informe os seus dados!</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={ (e) => {
              e.preventDefault();
      
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input 
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Coloca o nome ai baitola"
              
              />
              <button type="submit" disabled={name.length === 0}>
                Bora Jogar  {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Delicia Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Esse é o quiz para saber se você realmente conhece a Delicia</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/MatheusAnciloto"/>
    </QuizBackground>
  );
}

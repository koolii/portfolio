import React, { useMemo } from 'react';
import Header from '../src/components/Personal/Header';
import Introduction from '../src/components/Personal/Introduction';
import Histories from '../src/components/Personal/Histories';
import Experiences from '../src/components/Personal/Experiences';
import Footer from '../src/components/Personal/Footer';
import { Experience, History, SNS } from '../src/interfaces/types';

const IndexPage: React.FC = () => {
  const sns: SNS[] = useMemo(
    () => [
      { id: 1, name: 'Github', url: 'https://github.com/koolii' },
      { id: 2, name: 'Facebook', url: 'https://www.facebook.com/takahito.kuriyama.09' },
      { id: 3, name: 'Blog', url: 'https://medium.com/@koolii' },
      { id: 4, name: 'Twiter', url: 'https://twitter.com/_koolii' },
    ],
    [],
  );
  const experiences: Experience[] = useMemo(
    () => [
      {
        id: 1,
        lang: 'JavaScript',
        techs: ['React', 'Express', 'koa', 'Vue', 'Angular', 'TypeScript', 'Puppeteer'],
        description: [
          '使用歴2.5年程、主にNode.jsを使ったAPIの開発や、バッチ処理等での経験が多い。',
          '大規模配信システムでは、WebSocketを使ったイベント起点のAPI作成やフロントの開発。',
          'AngularJS等のSPAに関しても仕事内外での経験。',
          '個人的なプロジェクトでjQUeryやTypeScriptでスクリプト等を作成。',
          '大学の研究では、WebRTCの技術を使ったWEBアプリケーションを作成。',
        ],
        years: 0.5,
        rank: 0,
      },
      {
        id: 2,
        lang: 'Python(&gt; version 3)',
        techs: ['Mecab'],
        description: [
          '使用歴0.5年程。主に形態素解析を行うために使用。',
          'ユーザからの感想を形態素解析にかけ、処理の結果をアップロード等行う処理を作成。',
          '機械学習やAI等での使用経験はありません。 (Mecab)',
        ],
        years: 0.5,
        rank: 0,
      },
      {
        id: 3,
        lang: 'Java',
        techs: ['Spring', 'Struts', 'Android Java', 'jsp', 'tomcat'],
        description: [
          '使用歴3年程、大学生時代にアルバイトでプログラマーをしていた頃に一番よく使用した。',
          '他には自動車運転手用の配車用Androidアプリ(ver',
          'Kitkat)を位置情報などを使って作成した。 ',
        ],
        years: 2.5,
        rank: 0,
      },
      {
        id: 4,
        lang: 'C#',
        techs: ['Entity Framework'],
        description: [
          '使用歴1年、同じくプログラマーのアルバイト時期に、',
          '受託開発で使用した。主に登録項目が多く帳票の作成にかなり苦労した経験。',
          'この時画面の作成にjQueryを同時に学ぶ (Entity Framework)',
        ],
        years: 1,
        rank: 0,
      },
      {
        id: 5,
        lang: 'PHP',
        techs: [],
        description: [
          '使用期間は0.5年程、主に大規模配信システムのAPIで使用。',
          'その他、簡単なスクリプト系もPHPで作成することも時々ありました。',
        ],
        years: 1,
        rank: 0,
      },
      {
        id: 6,
        lang: 'Infrastructure',
        techs: ['On-premise', 'Ansible', 'Docker', 'AWS'],
        description: [
          '使用期間は1年程、主に大規模配信システムのインフラを完全オンプレミスで経験。',
          '主にAnsibleの導入やプログラマとしては各種自動化等をTypescriptを使って行いました。',
        ],
        years: 0.5,
        rank: 0,
      },
    ],
    [],
  );

  const histories: History[] = useMemo(
    () => [
      {
        id: 1,
        yearFrom: 2011,
        description: ['会津大学に入学、プログラマーのアルバイトを始める'],
      },
      {
        id: 2,
        yearFrom: 2015,
        description: ['同大学を卒業し、アルバイト先に入社'],
      },
      {
        id: 3,
        yearFrom: 2016,
        yearTo: 2017,
        description: ['エアークロゼットに中途入社'],
      },
      {
        id: 4,
        yearFrom: 2017,
        yearTo: 2019,
        description: ['オランダへ移住し、WEB・インフラエンジニアとして従事'],
      },
      {
        id: 5,
        yearFrom: 2020,
        description: ['日本に帰国しフリーランスエンジニアとして活動を開始'],
      },
    ],
    [],
  );

  return (
    <>
      <Header sns={sns} />
      <Introduction />
      <Histories histories={histories} />
      <Experiences experiences={experiences} />
      <Footer sns={sns} />
    </>
  );
};

export default IndexPage;

import React, { useMemo } from 'react';
// import Link from 'next/link';
// import Layout from '../src/components/Layout';
import Header from '../src/components/Personal/Header';
import Introduction from '../src/components/Personal/Introduction';
import History from '../src/components/Personal/History';
import Experiences from '../src/components/Personal/Experiences';
import Footer from '../src/components/Personal/Footer';
import { Experience, SNS } from '../src/interfaces/types';

// <Layout title="Home | Next.js + TypeScript Example" />
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
        lang: 'JavaScript',
        techs: ['React'],
        description: [
          '使用歴2.5年程、主にNode.jsを使ったAPIの開発や、バッチ処理等での経験が多い。',
          '大規模配信システムでは、WebSocketを使ったイベント起点のAPI作成やフロントの開発。',
          'AngularJS等のSPAに関しても仕事内外での経験。',
          '個人的なプロジェクトでjQUeryやTypeScriptでスクリプト等を作成。',
          '大学の研究では、WebRTCの技術を使ったWEBアプリケーションを作成。',
          '(Express,koa,React,Vue,Angular,TypeScript,Puppeteer)',
        ],
        years: 0.5,
        rank: 0,
      },
      {
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

  return (
    <>
      {/* <p>
      <Link href="/about">About</Link>
    </p> */}
      <Header sns={sns} />
      <Introduction />
      <History />
      <Experiences experiences={experiences} />
      <Footer sns={sns} />
    </>
  );
};

export default IndexPage;

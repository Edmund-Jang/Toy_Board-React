import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>장윤성 React 토이프로젝트</title>
      </Head>
      <body style={{textAlign: 'center'}}>
        <div><h1>React를 활용한 토이프로젝트 입니다.</h1></div>
        <br/>
        <div style={{fontSize: '20px', textAlign:'left', marginLeft: '15%'}}>
        <div><b>[ Firebase ]</b> 파이어베이스를 활용한 게시판입니다.</div>
        <div><b>[ OpenApi ]</b> 임의의 OpenApi를 활용한 페이지 입니다. (Dogs API를 가져왔습니다. 강아지 사진을 띄워주는 API 입니다.)</div>
        <div><b>[ 게시판 ]</b> 일반적으로 흔히 볼 수 있는 게시판입니다.</div>
        </div>
      </body>
    </>
  )
}

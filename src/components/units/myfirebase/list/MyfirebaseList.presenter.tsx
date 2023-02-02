import * as S from "./MyfirebaseList.styles";
import { IMyfirebaseListUIProps } from "./MyfirebaseList.types";
import { v4 as uuidv4 } from "uuid";

export default function MyfirebaseListUI(props: IMyfirebaseListUIProps) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderContents>내용</S.ColumnHeaderContents>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
      </S.Row>
      {props.dataBoards?.map((el: any, index: number) => (
        <S.Row key={uuidv4()}>
          <S.ColumnBasic>{index + 1}</S.ColumnBasic>
          <S.ColumnTitle>{el.title}</S.ColumnTitle>
          <S.ColumnContents>{el.contents}</S.ColumnContents>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
        </S.Row>
      ))}
      <br/>
      <S.Button onClick={props.onClickMoveToBoardNew}>
        <S.PencilIcon src="/images/board/list/write.png" />
        게시물 등록하기
      </S.Button>
    </S.Wrapper>
  );
}

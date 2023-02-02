import { DogImg, Wrapper } from "./OpenapiList.styles";
import { IOpenapiListUIProps } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiListUIProps) {
  console.log(props.imgUrls);
  return (
    <Wrapper>
      <div>
        {props.imgUrls.map((el, index) => (
          <>
            <DogImg key={el} src={el} />
            {(index + 1) % 3 === 0 && <br /> /* 좋은 방법 아님 */}
          </>
        ))}
      </div>
    </Wrapper>
  );
}

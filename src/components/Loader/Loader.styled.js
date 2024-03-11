import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const Wrapper = styled.section`
  position: relative;
  align-self: center;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* outline: 1px solid blue; */
`;

export const SvgIcon = styled(Icon)`
  width: 96px;
  height: 96px;
  animation: loaderMove infinite 1s linear;

  @keyframes loaderMove {
    0% {
      transform: translateY(-4px);
    }
    50% {
      transform: translateY(4px);
    }
    100% {
      transform: translateY(-4px);
    }
  }
`;

const Roads = styled.span`
  position: absolute;
  display: inline-block;
  width: 24px;
  height: 2px;
  background-color: darkgray;
  animation: road infinite 500ms linear;

  @keyframes road {
    0% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(-100px);
    }
  }
`;
export const Road0 = styled(Roads)`
  top: 140px;
  right: 0;
`;
export const Road1 = styled(Roads)`
  top: 140px;
  right: 60%;
`;
export const Road2 = styled(Roads)`
  top: 140px;
  right: 30%;
`;
export const Road3 = styled(Roads)`
  top: 140px;
  right: 90%;
`;
export const Road4 = styled(Roads)`
  top: 140px;
  right: 120%;
`;
export const Road5 = styled(Roads)`
  top: 140px;
  right: -30%;
`;
export const Road6 = styled(Roads)`
  top: 148px;
  right: -15%;
`;
export const Road7 = styled(Roads)`
  top: 148px;
  right: 15%;
`;
export const Road8 = styled(Roads)`
  top: 148px;
  right: 45%;
`;
export const Road9 = styled(Roads)`
  top: 148px;
  right: 75%;
`;
export const Road10 = styled(Roads)`
  top: 148px;
  right: 105%;
`;
export const Road11 = styled(Roads)`
  top: 148px;
  right: -45%;
`;
export const Road12 = styled(Roads)`
  top: 140px;
  right: -60%;
`;
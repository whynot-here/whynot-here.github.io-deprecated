import Button from '../../atoms/Button';
import * as Styled from './LoginPage.styled';

// TODO: react-hook-form 도입? -> 소셜로 바뀌면 필요 없을수도
// TODO: input 컴포넌트로?
const LoginPage = () => {
  return (
    <Styled.Container>
      <Styled.WhyNotHereLogo />
      <Styled.SubContainer>
        <Styled.Title>로그인</Styled.Title>
        <Styled.LoginContainer>
          <Styled.Input placeholder="아이디" />
          <Styled.Input placeholder="비밀번호" type="password" />
        </Styled.LoginContainer>
        <Button>로그인</Button>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default LoginPage;
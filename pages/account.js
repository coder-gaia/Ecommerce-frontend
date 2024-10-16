import { useSession, signOut, signIn } from "next-auth/react";
import Header from "@/components/Header";
import Center from "@/components/Center";
import styled from "styled-components";
import ButtonElement from "@/components/Button";
import { ClipLoader } from "react-spinners";
import { Box } from "./cart";

const ImageContainer = styled.img`
  border-radius: 8px;
`;

export const AccountBox = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  margin: auto;

  p {
    font-style: italic;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const AccountPage = () => {
  const { data: session, status } = useSession();
  console.log({ session });

  if (status === "loading") {
    return (
      <Center>
        <Box>
          <ClipLoader />
        </Box>
      </Center>
    );
  }

  if (!session) {
    return (
      <>
        <Header />
        <Center>
          <AccountBox>
            <h2>You are not logged in</h2>
            <ButtonElement primary={1} outline={1} onClick={() => signIn()}>
              Sign In
            </ButtonElement>
          </AccountBox>
        </Center>
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <AccountBox>
          <Title>Account</Title>
          <h2>Welcome, {session.user.name}!</h2>
          <ImageContainer src={session?.user.image} alt="profile-photo" />
          <p>
            <b>Logged as:</b> {session.user.email}
          </p>
          <ButtonElement primary={1} outline={1} onClick={() => signOut()}>
            Logout
          </ButtonElement>
        </AccountBox>
      </Center>
    </>
  );
};

export default AccountPage;

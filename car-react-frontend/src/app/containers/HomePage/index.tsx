import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import Navbar from "../../components/navbar/index";
import { AboutUs } from "./AboutUs";
import BookingSteps from "./BookingSteps";
import TopCars from "./TopCars";
import TopSection from "./TopSection";
import Footer from "../../components/footer";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    `}
`;

export default function HomePage() {
  return (
    <PageContainer>
      <Navbar />

      <TopSection />
      <Marginer direction="vertical" margin="2em" />

      <BookCard />
      <Marginer direction="vertical" margin="8em" />

      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />

      <AboutUs />
      <Marginer direction="vertical" margin="8em" />

      <TopCars />
      <Footer />
    </PageContainer>
  );
}

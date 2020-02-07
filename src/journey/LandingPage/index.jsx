import React, { Component } from "react";
import styled from "styled-components";

import constants from "./constants";

const getGridContainer = (columns, rows) => {
  return styled.div`
    display: grid;
    ${columns ? "grid-template-columns: " + columns + ";" : ""}
    ${rows ? "grid-template-rows: " + rows + ";" : ""}
  `;
};

const getSection = height => styled.section`
  ${height ? "height: " + height + ";" : ""}
`;
const LandingPageContainer = styled(getGridContainer("1fr"))``;

const AppHeader = styled(getGridContainer("repeat(5,1fr)"))`
  height: 100px;
  width: 50%;
  text-align: center;
  justify-self: end;
`;
const NavigationLink = styled.a`
  align-self: end;
`;
const Body = styled.article`
  padding: 0px 5%;
`;
const ProfileSection = styled(getSection())``;
const SkillSection = styled(getSection())``;
const Section = styled(getSection())``;
const ProfilePicture = styled.img``;
const BodyParagraph = styled.p``;
const SkillLink = styled.a`
  display: inline-block;
  width: max-content;
  height: 20px;
  margin: 10px;
  padding: 5px;
  background-color: ;
`;
const Heading3 = styled.h3``;
const ExperienceList = styled.ul``;
const ExperienceListItem = styled.li``;
const CareerHeading = styled.h4``;
const CareerList = styled.ul``;
const CareerListItem = styled.li``;

export default class LandingPage extends Component {
  render() {
    return (
      <LandingPageContainer>
        <AppHeader>
          {constants.navigationOptions.map(item => (
            <NavigationLink>{item}</NavigationLink>
          ))}
        </AppHeader>
        <Body>
          <Section>
            <ProfilePicture src="/images/Profile.png" />
            <BodyParagraph>
              I am Manoj Bharadwaj. A full stack web developer who explores new
              ways of interaction and innovations to make meaningful experience
              for customers.
            </BodyParagraph>
          </Section>
          <Section>
            <Heading3>Skills</Heading3>
            {constants.skills.map((skill, index) => (
              <SkillLink key={index} href={skill.link}>
                {skill.name}
              </SkillLink>
            ))}
          </Section>
          <Section>
            <Heading3>Experience </Heading3>
            <ExperienceList>
              {constants.experience["Overall"].map(item => (
                <ExperienceListItem>{item}</ExperienceListItem>
              ))}
            </ExperienceList>
          </Section>
          <Section>
            <Heading3>Career History</Heading3>
            <CareerHeading>Banking Domain </CareerHeading>
            <CareerList>
              {constants.experience["Banking Domain"].map(item => (
                <CareerListItem>{item}</CareerListItem>
              ))}
            </CareerList>
            <CareerHeading>Open Banking</CareerHeading>
            <CareerList>
              {constants.experience["Open Banking"].map(item => (
                <CareerListItem>{item}</CareerListItem>
              ))}
            </CareerList>
            <CareerHeading>Transformation Journey for Banking</CareerHeading>
            <CareerList>
              {constants.experience["Transformation Journey for Banking"].map(item => (
                <CareerListItem>{item}</CareerListItem>
              ))}
            </CareerList>
          </Section>
        </Body>
      </LandingPageContainer>
    );
  }
}

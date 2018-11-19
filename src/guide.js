import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Module from './components/Module';
import Tag from './components/Tag';
import Icon from './components/Icon';
import icons from './components/Icon/icons.js';

const Content = styled.div`
  overflow: auto;
  height: 100vh;
  z-index: 1;
  padding: 19px 21px 21px 21px;
  scroll-behavior: smooth;
  background: #fff;
`;
const Topic = styled.section`
  margin-bottom: 45px;
  border-bottom: 1px solid #E1E4E9;
`;
const TopicTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  color: #1F262D;
  letter-spacing: 0.5px;
  line-height: 32px;
`;
const ComponentType = styled.section`
  margin: 0 0 60px 0;
`;
const ComponentTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: #1F262D;
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 6px;
`;
const SubGroup = styled.div`
  margin-bottom: 25px;
`;
const SubTitle = styled.h4`
  font-weight: 500;
  font-size: 12px;
  color: #1F262D;
  letter-spacing: 0;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;
const Explanation = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #1F262D;
  letter-spacing: 0;
  line-height: 16px;
  margin-top: 0;
`;
const IconComponent = styled(Icon)`
  margin: 10px;
`;

class Guide extends Component {
  render() {
    var iconKeys = Object.keys(icons)
    return (
      <Content>
      <Topic>
        <TopicTitle>Icon</TopicTitle>
        <ComponentType>
          <ComponentTitle>Inline</ComponentTitle>
          <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          {iconKeys.map(function(icon, i){
            return <IconComponent name={icon} color={"#9CA4B1"} />
          })}
        </ComponentType>
        <ComponentType>
          <ComponentTitle>With Circle Background</ComponentTitle>
          <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          {iconKeys.map(function(icon, i){
            return <IconComponent className={'icon-'+icon} name={icon} color={"#fff"} bg={'#2D85FB'} w={26} p={4} />
          })}
        </ComponentType>
      </Topic>
        <Topic>
          <TopicTitle>Tag</TopicTitle>
          <ComponentType>
            <ComponentTitle>Rounded</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <SubGroup>
              <SubTitle>Small</SubTitle>
              <Tag text="Grey Tag" bg="grey"/>
              <Tag text="Blue Tag"/>
              <Tag text="Green Tag" bg="green" />
              <Tag text="Yellow Tag" bg="yellow" />
              <Tag text="Red Tag" bg="red" />
            </SubGroup>
            <SubGroup>
              <SubTitle>Big</SubTitle>
              <Tag text="Grey Tag" bg="grey" big />
              <Tag text="Blue Tag" big />
              <Tag text="Green Tag" bg="green" big />
              <Tag text="Yellow Tag" bg="yellow" big />
              <Tag text="Red Tag" bg="red" big />
            </SubGroup>
          </ComponentType>
          <ComponentType>
            <ComponentTitle>Squared</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <SubGroup>
              <SubTitle>Small</SubTitle>
              <Tag text="Grey Tag" bg="grey" squared />
              <Tag text="Blue Squared" squared />
              <Tag text="Green Squared" bg="green" squared />
              <Tag text="Yellow Squared" bg="yellow" squared />
              <Tag text="Red Squared" bg="red" squared />
            </SubGroup>
            <SubGroup>
              <SubTitle>Big</SubTitle>
              <Tag text="Grey Tag" bg="grey" squared big />
              <Tag text="Blue Squared" squared big />
              <Tag text="Green Squared" bg="green" squared big />
              <Tag text="Yellow Squared" bg="yellow" squared big />
              <Tag text="Red Squared" bg="red" squared big />
            </SubGroup>
          </ComponentType>
        </Topic>
        <Topic>
          <TopicTitle>Module</TopicTitle>
          <ComponentType>
            <ComponentTitle>General</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Module
              title     = "Notes"
              category  = "note"
              content   = "Authentic umami hell of disrupt hammock irony you probably haven't heard of them tousled pork belly helvetica man braid celiac waistcoat."
            />
          </ComponentType>
          <ComponentType>
            <ComponentTitle>Tag Module</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Module
              title = "Allergies"
              type  = "tag"
              category  = "medication"
              tags  = {[
                    {text: "Mold", bg: "grey"},
                    {text: "Dust", bg: "grey"},
                    {text: "Pollen", bg: "grey"},
                    {text: "Wheat", bg: "grey"},
                    {text: "Soy", bg: "grey"},
                    {text: "Crab", bg: "grey"}
                  ]}
            />
          </ComponentType>
          <ComponentType>
            <ComponentTitle>Table Module</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Module
              title = "Medications"
              type  = "table"
              category  = "medication"
              rows  = {[
                    {name: "predniSONE", subtitle: "1 mg oral tablet", line2:"Take one tablet daily."},
                    {name: "Levothyroxine", subtitle: "175 mcg (0.175 mg) oral tablet", line2:"Take one tablet daily."}
                  ]}
            />
          </ComponentType>
        </Topic>
      </Content>
    );
  }
}

export default Guide;

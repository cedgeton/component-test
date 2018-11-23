import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Module from './components/Module';
import {Colors, Header}  from './components/System';
import Tag from './components/Tag';
import Icon from './components/Icon';
import icons from './components/Icon/icons.js';
import Code from './components/Code';
import PropTable from './components/Props';
import Loader from './components/Loader';
import Button from './components/Button';

const Content = styled.div`
  overflow: auto;
  height: 100vh;
  z-index: 1;
  padding: 0;
  scroll-behavior: smooth;
  background: #fff;
`;
const Topic = styled.section`
  margin-bottom: 45px;
  padding: 50px 60px 55px 60px;
`;
const TopicTitle = styled.h2`
  font-weight: 400;
  font-size: 40px;
  color: ${Colors.black.c800.hex()};
  letter-spacing: 0.5px;
  line-height: 40px;
  background: ${Colors.grey.c200.hex()};
  border-bottom: 1px solid ${Colors.grey.c400.hex()};
  width: 100%;
  margin: 0 0 15px;
  padding: 45px 51px 25px;
  box-sizing: border-box;
`;
const ComponentType = styled.section`
  margin: 0 0 60px 0;
`;
const ComponentTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  color: ${Colors.black.c800.hex()};
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 6px;
  span{
    font-weight: 300;
  }
  margin-top: ${props => {return(props.topMargin? '40px': '')}}
`;
const SubGroup = styled.div`
  margin-bottom: 25px;
`;
const SubTitle = styled.h4`
  font-weight: 400;
  font-size: 11px;
  color: ${Colors.black.c200.hex()};
  letter-spacing: 0;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;
const Explanation = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: ${Colors.black.c800.hex()};
  letter-spacing: 0;
  line-height: 16px;
  margin-top: 0;
`;
const Column = styled.section`
  width: 50%;
  float:left;
  box-sizing: border-box;
  margin: 0 0 40px;
  &:first-of-type{
    padding-right: 21px;
  }
`;
const IconComponent = styled(Icon)`
  margin: 10px;
`;
const Table = styled.div`
  table{
    width: 100%;
    margin: 15px 0 65px;
    text-align: left;
    font-size: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    color: ${Colors.black.c800.hex()};
    thead{
      background:${Colors.grey.c200.hex()};
      th{
        font-weight: 400;
        border-bottom-width: 2px;
      }
    }
    td,th{
      padding: 20px;
      border-bottom: 1px solid ${Colors.grey.c400.hex()};
      vertical-align: top;
      font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    }
    td:nth-child(3){
      color: #c41d7f;
    }
  }
  &.iconTable table td, &.iconTable table th{
    padding: 5px;
    vertical-align: middle;
  }
`;
const iconKeys = Object.keys(icons);
const tableKeys = iconKeys.reduce(function(result, value, index, array) {
  if (index % 2 === 0)
    result.push(array.slice(index, index + 2));
    return result;
  }, []);

const scope = {styled, Icon, Tag, Module, Loader, Button, Colors};

class Guide extends Component {
  render() {
    return (
      <Content>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          Button
        </TopicTitle>
        <Topic>
          <ComponentType>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <SubGroup>
              <Button style='primary' outline>Button</Button>
              <Button style='primary' size='small'>Button</Button>
            </SubGroup>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'style', description:'The style of the button', type: 'string', options: ['primary', 'secondary', 'confirm', 'destroy', 'cancel'], default: 'primary'},
                {property:'type', description:'The type of the button', type: 'string', options: ['button', 'submit'], default: 'button'},
                {property:'size', description:'The size of the button', type: 'string', options: ['small', 'medium'], default: 'medium'},
                {property:'outline', description:'Gives the button an outline and a transparent background', type: 'bool', options: [], default: 'false'},
                {property:'disabled', description:'Make the button disabled', type: 'bool', options: [], default: 'false'},
              ]}
            />
          </Table>
          <ComponentTitle>Code <span>Button</span></ComponentTitle>
          <Code
            scope={scope}
            code={`<div>
  <Button style='primary'>Button</Button>
  <Button style='secondary'>Button</Button>
  <Button style='confirm'>Button</Button>
  <Button style='destroy'>Button</Button>
  <Button style='cancel'>Button</Button>
</div>`}
          />
          <ComponentTitle>Code <span>Button Outline</span></ComponentTitle>
          <Code
            scope={scope}
            code={`<div>
  <Button style='primary' outline>Button</Button>
  <Button style='secondary' outline>Button</Button>
  <Button style='confirm' outline>Button</Button>
  <Button style='destroy' outline>Button</Button>
</div>`}
          />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          Tag
        </TopicTitle>
        <Topic>
          <ComponentType>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <SubGroup>
              <Tag text="Grey Tag" bg="grey" big />
              <Tag text="Blue Tag" big />
              <Tag text="Green Tag" bg="green" big />
              <Tag text="Yellow Tag" bg="yellow" big />
              <Tag text="Red Tag" bg="red" big />
            </SubGroup>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'text', description:'The content of the tag', type: 'string', options: [], default: ''},
                {property:'bg', description:'Background color of the tag', type: 'string', options: ['blue', 'green', 'yellow', 'red', 'grey'], default: 'blue'},
                {property:'big', description:'Larger tag with more padding', type: 'bool', options: [], default: 'false'},
                {property:'squared', description:'Squared off corners', type: 'bool', options: [], default: 'false'},
              ]}
            />
          </Table>
          <ComponentTitle>Code <span>Tag</span></ComponentTitle>
          <Code
            scope={scope}
            code={`<div>
  <Tag text="Tag" bg="blue"/>
  <Tag text="Tag" bg="green"/>
  <Tag text="Tag" bg="yellow"/>
  <Tag text="Tag" bg="red"/>
  <Tag text="Tag" bg="grey"/>
</div>`}
          />
          <ComponentTitle>Code <span>Tag Big</span></ComponentTitle>
          <Code
            scope={scope}
            code={`<div>
  <Tag text="Tag" bg="blue" big />
  <Tag text="Tag" bg="green" big />
  <Tag text="Tag" bg="yellow" big />
  <Tag text="Tag" bg="red" big />
  <Tag text="Tag" bg="grey" big />
</div>`}
          />
          <ComponentTitle>Code <span>Tag Squared</span></ComponentTitle>
          <Code
            scope={scope}
            code={`<div>
  <Tag text="Tag" bg="blue" squared />
  <Tag text="Tag" bg="green" squared />
  <Tag text="Tag" bg="yellow" squared />
  <Tag text="Tag" bg="red" squared />
  <Tag text="Tag" bg="grey" squared />
</div>`}
          />
          <ComponentTitle>Code <span>Tag Big Squared</span></ComponentTitle>
          <Code
            scope={scope}
            code={`<div>
  <Tag text="Tag" bg="blue" big squared />
  <Tag text="Tag" bg="green" big squared />
  <Tag text="Tag" bg="yellow" big squared />
  <Tag text="Tag" bg="red" big squared />
  <Tag text="Tag" bg="grey" big squared />
</div>`}
          />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          Loader
        </TopicTitle>
        <Topic>
          <ComponentType>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'size', description:'The size of the loading indicator', type: 'string', options: ['small', 'medium', 'large'], default: 'medium'},
              ]}
            />
          </Table>
          <ComponentTitle>Code</ComponentTitle>
          <Code
            scope={scope}
            code={`<div>
  <Loader size='small' />
  <Loader size='medium' />
  <Loader size='large' />
</div>`}
          />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          Icon
        </TopicTitle>
        <Topic>
          {iconKeys.map(function(icon, i){
            return <IconComponent name={icon} color={Colors.grey.c800.hex()} />
          })}
          <ComponentType>
            <ComponentTitle topMargin >Icon Set</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'color', description:'Hex code for the color for the icon.', type: 'string', options: [], default: '#000000'},
                {property:'bg', description:'Hex code for the background color for the circle behind the icon.', type: 'string', options: [], default: 'transparent'},
                {property:'name', description:'Name of the icon', type: 'string', options: ['See Table'], default: ''},
                {property:'w', description:'Height & width of the circular icon', type: 'num', options: [], default: '30'},
                {property:'p', description:'Padding of the icon', type: 'num', options: [], default: '0'},
              ]}
            />
          </Table>
          <Table id="iconTable" className="iconTable">
            <ComponentTitle>Icons</ComponentTitle>
            <table>
              <thead>
                <tr>
                  <th>Icon</th>
                  <th>Name</th>
                  <th>Icon</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {tableKeys.map(function(icon, i){
                  return (
                    <tr>
                      <td><IconComponent name={icon[0]} color={Colors.grey.c800.hex()} w={25} /></td>
                      <td>{icon[0]}</td>
                      <td><IconComponent name={icon[1]} color={Colors.grey.c800.hex()} w={25} /></td>
                      <td>{icon[1]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Table>
          <ComponentTitle>Code</ComponentTitle>
          <Code
            scope={scope}
            code={`<div>
  <Icon name={'activity'} color={Colors.blue.hex()} w={30} />
  <Icon name={'activity'} color={Colors.white.hex()} bg={Colors.blue.hex()} w={30} p={4} />
</div>`}
          />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          Module
        </TopicTitle>
        <Topic>
          <ComponentType>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Column>
              <Module
                title     = "Basic Module"
                content   = "Authentic umami hell of disrupt hammock irony you probably haven't heard of them tousled pork belly helvetica man braid celiac waistcoat."
              />
            </Column>
            <Column>
              <Module
                title     = "Notes"
                category  = "note"
                content   = "Authentic umami hell of disrupt hammock irony you probably haven't heard of them tousled pork belly helvetica man braid celiac waistcoat."
              />
            </Column>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'title', description:'Text for title of the module', type: 'string', options: [], default: ''},
                {property:'type', description:'Type of Module', type: 'string', options: ['basic', 'tag', 'table', 'issues'], default: 'basic'},
                {property:'category', description:'The category the module relates to. Determines the icon.', type: 'string', options: ['icon name'], default: ''},
                {property:'content', description:'The text for a basic module', type: 'string', options: [], default: ''},
                {property:'tags', description:'An Array of tags for the Tags Module.', type: 'array', options: [], default: ''},
                {property:'rows', description:'An Array of rows for the Rows Module.', type: 'array', options: [], default: ''},
                {property:'issues', description:'  An Array of issues for the Issues Module.', type: 'array', options: [], default: ''},
              ]}
            />
          </Table>
          <ComponentType>
            <ComponentTitle>Basic Module</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Code
              scope={scope}
              code={`<Module
  title     = "Basic Module"
  content   = "Authentic umami hell of disrupt hammock irony you probably haven't heard of them tousled pork belly helvetica man braid celiac waistcoat."
/>`}
            />
          </ComponentType>
          <ComponentType>
            <ComponentTitle>Tag Module</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Code
              scope={scope}
              code={`<Module
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
/>`}
            />
          </ComponentType>
          <ComponentType>
            <ComponentTitle>Table Module</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Code
              scope={scope}
              code={`<Module
  title = "Medications"
  type  = "table"
  category  = "medication"
  rows  = {[
        {name: "predniSONE", subtitle: "1 mg oral tablet", line2:"Take one tablet daily."},
        {name: "Levothyroxine", subtitle: "175 mcg (0.175 mg) oral tablet", line2:"Take one tablet daily."}
      ]}
/>`}
            />

          </ComponentType>
        </Topic>
      </Content>
    );
  }
}

export default Guide;

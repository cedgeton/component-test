import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Module from './components/Module';
import Tag from './components/Tag';
import Icon from './components/Icon';
import icons from './components/Icon/icons.js';
import Code from './components/Code';

const Content = styled.div`
  overflow: auto;
  height: 100vh;
  z-index: 1;
  padding: 0;
  scroll-behavior: smooth;
  background: #fff;
`;
const Topic = styled.section`
  padding-bottom: 85px;
  margin-bottom: 45px;
  padding: 19px 21px 21px 21px;
`;
const TopicTitle = styled.h2`
  font-weight: 400;
  font-size: 40px;
  color: #1F262D;
  letter-spacing: 0.5px;
  line-height: 40px;
  background: #F8F9FB;
  border-bottom: 1px solid #E1E4E9;
  width: 100%;
  margin: 0 0 15px;
  padding: 45px 21px 20px;
  box-sizing: border-box;
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
  color: #969EA8;
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
const Props = styled.div`
  table{
    width: 100%;
    margin: 15px 0 65px;
    text-align: left;
    font-size: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    color: #1F262D;
    thead{
      background:#F8F9FB;
      th{
        font-weight: 400;
        border-bottom-width: 2px;
      }
    }
    td,th{
      padding: 20px;
      border-bottom: 1px solid #E1E4E9;
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
const Color = styled.span`
  color: ${props => {
    var col = props.color;
    if (col === 'blue') {
      return '#2D85FB';
    } else if (col === 'green') {
      return '#00C596';
    } else if (col === 'yellow') {
      return '#FCA200';
    } else if (col === 'red') {
      return '#EC4068';
    } else {
      return '#1F262D';
    }
  }}
  ${props =>{
    if(props.default){
      return `:after{
        background: #F1F2F5;
        color: #616871;
        font-weight: bold;
        content: 'default';
        padding: 3px;
        margin-left: 6px;
        text-transform: uppercase;
        font-size: 10px;
      }`
    }
  }}
`;
const scope = {styled, Icon, Tag, Module};
const iconKeys = Object.keys(icons);
const tableKeys = iconKeys.reduce(function(result, value, index, array) {
  if (index % 2 === 0)
    result.push(array.slice(index, index + 2));
    return result;
  }, []);

class Guide extends Component {
  render() {
    return (
      <Content>
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
          <Props>
            <ComponentTitle>Props</ComponentTitle>
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Options</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>text</td>
                  <td>The content of the tag</td>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>bg</td>
                  <td>Background color of the tag</td>
                  <td>string</td>
                  <td>
                    <Color color={'blue'}>blue</Color> <br />
                    <Color color={'green'}>green</Color> <br />
                    <Color color={'yellow'}>yellow</Color> <br />
                    <Color color={'red'}>red</Color> <br />
                    <Color color={'grey'}>grey</Color>
                  </td>
                  <td><Color color={'blue'}>blue</Color></td>
                </tr>
                <tr>
                  <td>big</td>
                  <td>Larger tag with more padding</td>
                  <td>bool</td>
                  <td></td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>squared</td>
                  <td>Squared off corners</td>
                  <td>bool</td>
                  <td></td>
                  <td>false</td>
                </tr>
              </tbody>
            </table>
          </Props>
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
          Icon
        </TopicTitle>
        <Topic>
          {iconKeys.map(function(icon, i){
            return <IconComponent name={icon} color={"#9CA4B1"} />
          })}
          <ComponentType>
            <ComponentTitle topMargin >Icon Set</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          </ComponentType>
          <Props>
            <ComponentTitle>Props</ComponentTitle>
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Options</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>color</td>
                  <td>Hex code for the color for the icon.</td>
                  <td>string</td>
                  <td></td>
                  <td>#000000</td>
                </tr>
                <tr>
                  <td>bg</td>
                  <td>Hex code for the background color for the circle behind the icon.</td>
                  <td>string</td>
                  <td></td>
                  <td>transparent</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>Name of the icon</td>
                  <td>string</td>
                  <td><a href="#iconTable">See Table</a></td>
                  <td></td>
                </tr>
                <tr>
                  <td>w</td>
                  <td>Height & width of the icon</td>
                  <td>num</td>
                  <td></td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>p</td>
                  <td>Padding of the icon</td>
                  <td>num</td>
                  <td></td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </Props>
          <Props id="iconTable" className="iconTable">
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
                      <td><IconComponent name={icon[0]} color={"#9CA4B1"} w={25} /></td>
                      <td>{icon[0]}</td>
                      <td><IconComponent name={icon[1]} color={"#9CA4B1"} w={25} /></td>
                      <td>{icon[1]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Props>
          <ComponentTitle>Code</ComponentTitle>
          <Code
            scope={scope}
            code={`<div>
  <Icon name={'activity'} color={'#2D85FB'} w={30} />
  <Icon name={'activity'} color={'#ffffff'} bg={'#2D85FB'} w={30} p={4} />
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
          <Props>
            <ComponentTitle>Props</ComponentTitle>
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Options</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Title</td>
                  <td>Text for title of the module</td>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>type</td>
                  <td>Type of Module</td>
                  <td>string</td>
                  <td>
                    <Color color={'grey'}>basic</Color> <br />
                    <Color color={'grey'}>tag</Color> <br />
                    <Color color={'grey'}>table</Color> <br />
                    <Color color={'grey'}>issues</Color> <br />
                  </td>
                  <td>basic</td>
                </tr>
                <tr>
                  <td>category</td>
                  <td>The category the module relates to. Determines the icon.</td>
                  <td>string</td>
                  <td>Any Icon Name</td>
                  <td></td>
                </tr>
                <tr>
                  <td>content</td>
                  <td>The text for a basic module</td>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>tags</td>
                  <td>An Array of tags for the Tags Module. Each tag is a keyed array with the props for the Tag component</td>
                  <td>array</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>rows</td>
                  <td>
                    An Array of rows for the Rows Module. Each row is a keyed array:<br />
                    &#123;title:'title of row', subtitle: 'smaller text on the first row', line2: 'text for the second line' &#125;
                  </td>
                  <td>array</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>issues</td>
                  <td>
                    An Array of issues for the Issues Module. Each row is a keyed array:
                  </td>
                  <td>array</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </Props>
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

import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Module from './components/Module';
import {Colors, Header}  from './components/System';
import Tag from './components/Tag';
import Icon from './components/Icon';
import icons from './components/Icon/icons.js';
import Loader from './components/Loader';
import Button from './components/Button';
import Avatar from './components/Avatar';
import Modal, {ModalProviders} from './components/Modal';

import Code from './components/Code';
import PropTable from './components/Props';


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
const TopicTitle = styled.div`
  background: ${Colors.grey.c200.hex()};
  border-bottom: 1px solid ${Colors.grey.c400.hex()};
  width: 100%;
  margin: 0;
  padding: 45px 51px 25px;
  box-sizing: border-box;
  clear: both;
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
const Columns = styled.div`
  clear:both;
`;
const ColorExample = styled.div`
  width: 100%;
  color: ${Colors.white.hex()};
  background: ${props => props.bg ? props.bg : 'transparent'};
  padding: 10px;
  margin: 5px 5px 5px 0;
  font-size: 11px;
  box-sizing: border-box;
  .greys &{
    color: ${Colors.black.c600.hex()}
  }
`;
const IconComponent = styled(Icon)`
  margin: 10px;
`;
const Table = styled.div`
  clear:both;
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
function loremFunction(){

}

const scope = {styled, Icon, Tag, Module, Loader, Button, Colors, Avatar, ColorExample, Modal};

class Guide extends Component {
  render() {
    return (
      <Content>
        <TopicTitle>
          <SubTitle>System</SubTitle>
          <Header level={0} >Colors</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Columns>
              <Column>
                <SubTitle>Blacks</SubTitle>
                {Object.keys(Colors.black).map(function(color, i){
                  return <ColorExample bg={Colors.black[color].hex()}>Black {color}</ColorExample>
                })}
              </Column>
              <Column className="greys">
                <SubTitle>Greys</SubTitle>
                {Object.keys(Colors.grey).map(function(color, i){
                  return <ColorExample bg={Colors.grey[color].hex()}>Grey {color}</ColorExample>
                })}
              </Column>
            </Columns>
            <Columns>
              <Column>
                <SubTitle>Colors</SubTitle>
                <ColorExample bg={Colors.red.hex()}>Red</ColorExample>
                <ColorExample bg={Colors.yellow.hex()}>Yellow</ColorExample>
                <ColorExample bg={Colors.green.hex()}>Green</ColorExample>
                <ColorExample bg={Colors.blue.hex()}>Blue</ColorExample>
                <ColorExample bg={Colors.purple.hex()}>Purple</ColorExample>
                <ColorExample bg={Colors.pink.hex()}>Pink</ColorExample>
              </Column>
            </Columns>
          </ComponentType>
          <Columns>
            <Column>
              <ComponentTitle>Code</ComponentTitle>
              <Code
                scope={scope}
                code={`<ColorExample bg={Colors.black.c400.hex()}>
  Black c400
</ColorExample>`}
              />
            </Column>
            <Column>
              <ComponentTitle>Code</ComponentTitle>
              <Code
                scope={scope}
                code={`<ColorExample bg={Colors.red.hex()}>
  Red
</ColorExample>`}
              />
            </Column>
          </Columns>
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Button</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
            <SubGroup>
              <Button style='primary'>Button</Button>
              <Button style='secondary'>Button</Button>
              <Button style='confirm'>Button</Button>
              <Button style='destroy'>Button</Button>
              <Button style='primary' outline>Button</Button>
              <Button style='secondary' outline>Button</Button>
              <Button style='confirm' outline>Button</Button>
              <Button style='destroy' outline>Button</Button>
              <Button style='cancel'>Cancel</Button>
            </SubGroup>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
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
          <ComponentTitle>Code</ComponentTitle>
          <Code
            scope={scope}
            code={`<Button style='primary'>Button</Button>`}
          />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Tag</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
            <SubGroup>
              <Tag text="Grey Tag" bg="grey" big />
              <Tag text="Blue Tag" big />
              <Tag text="Green Tag" bg="green" big />
              <Tag text="Yellow Tag" bg="yellow" big />
              <Tag text="Red Tag" bg="red" big />
              <Tag text="Red Tag" bg="red" squared />
              <Tag text="Yellow Tag" bg="yellow" squared />
              <Tag text="Green Tag" bg="green" squared />
              <Tag text="Blue Tag" squared />
              <Tag text="Grey Tag" bg="grey" squared />
            </SubGroup>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
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
          <Columns>
            <Column>
              <ComponentTitle>Code <span>Tag</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Tag text="Tag" bg="green" big />`}
              />
            </Column>
            <Column>
              <ComponentTitle>Code <span>Squared</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Tag text="Tag" bg="red" squared />`}
              />
            </Column>
          </Columns>
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Avatar</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
          <SubGroup>
            <Avatar size='small' type='icon' content='activity' />
            <Avatar size='medium' type='icon' content='activity' />
            <Avatar size='large' type='icon' content='activity' />
            <Avatar size='small' type='default-profile' color='purple' />
            <Avatar size='medium' type='default-profile' color='purple' />
            <Avatar size='large' type='default-profile' color='purple' />
            <Avatar size='small' content='ce' color='red' />
            <Avatar size='medium' content='ce' color='red' />
            <Avatar size='large' content='ce' color='red' />
            <Avatar size='small' type='image' />
            <Avatar size='medium' type='image' />
            <Avatar size='large' type='image' />
          </SubGroup>
          <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>

          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'type', description:'Type of avatar', type: 'string', options: ['initials', 'icon', 'default-profile', 'image'], default: 'initials'},
                {property:'color', description:'Color of avatar', type: 'string', options: ['blue', 'green', 'yellow', 'red', 'purple', 'grey'], default: 'blue'},
                {property:'size', description:'The size of the avater', type: 'string', options: ['small', 'medium', 'large'], default: 'large'},
                {property:'content', description:'The name of the icon for type icon or the initials for type intials', type: 'string', options: [], default: ''},
                {property:'url', description:'The url of the image for avatar of type image', type: 'string', options: [], default: 'a random cat photo'},
              ]}
            />
          </Table>
          <Columns>
            <Column>
              <ComponentTitle>Code <span>Initials</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Avatar size='large' content='ce' color='red' />`}
              />
            </Column>
            <Column>
              <ComponentTitle>Code <span>Default Profile</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Avatar size='large' type='default-profile' color='purple' />`}
              />
            </Column>
          </Columns>
          <Columns>
            <Column>
              <ComponentTitle>Code <span>Icon</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Avatar size='large' type='icon' content='activity' />`}
              />
            </Column>
            <Column>
              <ComponentTitle>Code <span>Image</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Avatar size='large' type='image' url='http://placekitten.com/429/429' />`}
              />
            </Column>
          </Columns>
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Loader</Header>
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
          <Header level={0} >Icon</Header>
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
          <div>
            <Column>
              <ComponentTitle>Code <span>Icon</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Icon name={'activity'} color={Colors.blue.hex()} w={30} />`}
              />
            </Column>
            <Column>
              <ComponentTitle>Code <span>Icon with Background</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Icon name={'activity'} color={Colors.white.hex()} bg={Colors.blue.hex()} w={30} p={4} />`}
              />
            </Column>
          </div>
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Modal</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
            <Explanation>This is not finished. Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'title', description:'Text for the title of the modal', type: 'string', options: [], default: ''},
                {property:'actions', description:'array of buttons', type: 'array', options: [], default: ''},
              ]}
            />
          </Table>
          <ComponentTitle>Code</ComponentTitle>
          <Code
            scope={scope}
            code={`<Modal
  title='Lorem Ipsum Sit'
  content='Hot chicken copper mug art party crucifix scenester. Brunch try-hard roof party asymmetrical readymade squid, banjo lyft vaporware organic 8-bit cornhole vegan master cleanse marfa. Tilde woke thundercats, ennui locavore crucifix normcore quinoa snackwave. Offal freegan sriracha scenester semiotics mlkshk. Waistcoat shaman quinoa wolf. Pinterest polaroid waistcoat stumptown church-key seitan kombucha butcher irony quinoa next level selfies XOXO austin ramps. Intelligentsia migas sartorial ramps chillwave, neutra 8-bit irony sustainable echo park readymade glossier.'
  actions={[
    {text: 'Cancel', style:'cancel'},
    {text: 'Save', style:'primary'}
  ]}
/>`}
          />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Module</Header>
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

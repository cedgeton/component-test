import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import _ from 'lodash';
import Module from './components/Module';
import {Colors, Header}  from './components/System';
import Tag from './components/Tag';
import Icon from './components/Icon';
import icons from './components/Icon/icons.js';
import Loader from './components/Loader';
import Sidebar from './components/Sidebar';
import Button from './components/Button';
import Avatar from './components/Avatar';
import {Input, InputGroup, Textarea, Checkbox} from './components/Form';
import Issue from './components/Issue';
import TableRow from './components/TableRow';
import Modal from './components/Modal';

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
  background: ${Colors.grey.c200};
  border-bottom: 1px solid ${Colors.grey.c400};
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
  color: ${Colors.black.c800};
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
  color: ${Colors.black.c200};
  letter-spacing: 0;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;
const Explanation = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: ${Colors.black.c800};
  letter-spacing: 0;
  line-height: 16px;
  margin-top: 0;
`;
const Column = styled.section`
  width: 50%;
  float:left;
  box-sizing: border-box;
  margin: 0;
  &:first-of-type{
    padding-right: 21px;
  }
`;
const Columns = styled.div`
  clear:both;
  margin: 0 0 40px;
`;
const ColorExample = styled.div`
  width: 100%;
  color: ${Colors.white};
  background: ${props => props.bg ? props.bg : 'transparent'};
  padding: 10px;
  margin: 5px 5px 5px 0;
  font-size: 11px;
  box-sizing: border-box;
  .greys &{
    color: ${Colors.black.c700}
  }
  .gradients &{
    padding: 10px 10px 165px;
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
    color: ${Colors.black.c800};
    thead{
      background:${Colors.grey.c200};
      th{
        font-weight: 400;
        border-bottom-width: 2px;
      }
    }
    td,th{
      padding: 20px;
      border-bottom: 1px solid ${Colors.grey.c400};
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
const Clear = styled.div`
  clear: both;
`;
const iconKeys = Object.keys(icons);
const tableKeys = iconKeys.reduce(function(result, value, index, array) {
  if (index % 2 === 0)
    result.push(array.slice(index, index + 2));
    return result;
}, []);

const scope = {styled, Icon, Tag, Module, Loader, Button, Colors, Avatar, ColorExample, Modal, Issue, TableRow, Input, InputGroup, Textarea, Checkbox, Sidebar};

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
                <SubTitle>Colors</SubTitle>
                <ColorExample bg={Colors.red}>Red</ColorExample>
                <ColorExample bg={Colors.yellow}>Yellow</ColorExample>
                <ColorExample bg={Colors.green}>Green</ColorExample>
                <ColorExample bg={Colors.blue}>Blue</ColorExample>
                <ColorExample bg={Colors.purple}>Purple</ColorExample>
                <ColorExample bg={Colors.pink}>Pink</ColorExample>
                <SubTitle>Blacks</SubTitle>
                {_.map(Object.keys(Colors.black),function(black, i){
                  return <ColorExample bg={Colors.black[black]} key={i}>Black {black}</ColorExample>
                })}
                <div className="greys">
                  <SubTitle>Greys</SubTitle>
                  {_.map(Object.keys(Colors.grey), function(grey, i){
                    return <ColorExample bg={Colors.grey[grey]} key={i}>Grey {grey}</ColorExample>
                  })}
                </div>
              </Column>
              <Column className="gradients">
                <SubTitle>Gradients</SubTitle>
                {_.map(Object.keys(Colors.gradient), function(gradient, i){
                  return <ColorExample bg={Colors.gradient[gradient]} key={i}>{gradient}</ColorExample>
                })}
              </Column>
            </Columns>
            <Clear />
          </ComponentType>
          <Columns>
            <Column>
              <ComponentTitle>Code <span>Color</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<ColorExample bg={Colors.red}>
  Red
</ColorExample>`}
              />
            </Column>
            <Column>
              <ComponentTitle>Code <span>Sub Color</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<ColorExample bg={Colors.black.c400}>
  Black c400
</ColorExample>`}
              />
            </Column>
          </Columns>
          <Columns>
            <Column className='gradient'>
              <ComponentTitle>Code <span>Gradient</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<ColorExample bg={Colors.gradient.bluePink}>
  Blue Purple
</ColorExample>`}
              />
            </Column>
          </Columns>
          <Clear />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Button</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
            <SubGroup>
              <Button buttonStyle='primary'>Button</Button>
              <Button buttonStyle='secondary'>Button</Button>
              <Button buttonStyle='confirm'>Button</Button>
              <Button buttonStyle='destroy'>Button</Button>
              <Button buttonStyle='primary' outline>Button</Button>
              <Button buttonStyle='secondary' outline>Button</Button>
              <Button buttonStyle='confirm' outline>Button</Button>
              <Button buttonStyle='destroy' outline>Button</Button>
              <Button buttonStyle='cancel'>Cancel</Button>
            </SubGroup>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'buttonStyle', description:'The style of the button', type: 'oneOf', options: ['primary', 'secondary', 'confirm', 'destroy', 'cancel'], default: 'primary'},
                {property:'type', description:'The type of the button', type: 'oneOf', options: ['button', 'submit'], default: 'button'},
                {property:'size', description:'The size of the button', type: 'oneOf', options: ['small', 'medium'], default: 'medium'},
                {property:'outline', description:'Gives the button an outline and a transparent background', type: 'bool', options: [], default: 'false'},
                {property:'disabled', description:'Make the button disabled', type: 'bool', options: [], default: 'false'},
              ]}
            />
          </Table>
          <ComponentTitle>Code</ComponentTitle>
          <Code
            scope={scope}
            code={`<Button buttonStyle='primary'>Button</Button>`}
          />
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
                {property:'size', description:'The size of the loading indicator', type: 'oneOf', options: ['small', 'medium', 'large'], default: 'medium'},
              ]}
            />
          </Table>
          <ComponentTitle>Code</ComponentTitle>
          <Code
            scope={scope}
            code={`<Loader size='medium' />`}
          />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Tag</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
            <SubGroup>
              <Tag text="Grey Tag" bg="grey"  size="large" />
              <Tag text="Blue Tag"  size="large" />
              <Tag text="Green Tag" bg="green"  size="large" />
              <Tag text="Yellow Tag" bg="yellow"  size="large" />
              <Tag text="Red Tag" bg="red"  size="large" />
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
                {property:'bg', description:'Background color of the tag', type: 'oneOf', options: ['blue', 'green', 'yellow', 'red', 'grey'], default: 'blue'},
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
                code={`<Tag text="Tag" bg="green" size="large" />`}
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
          <Clear />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Icon</Header>
        </TopicTitle>
        <Topic>
          {iconKeys.map(function(icon, i){
            return <IconComponent name={icon} color={Colors.grey.c800} key={i} />
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
                {property:'name', description:'Name of the icon', type: 'oneOf', options: ['See Table'], default: ''},
                {property:'w', description:'Total height & width of the circular icon including padding.', type: 'num', options: [], default: '30'},
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
                    <tr key={i}>
                      <td><IconComponent name={icon[0]} color={Colors.grey.c800} w={25} /></td>
                      <td>{icon[0]}</td>
                      <td><IconComponent name={icon[1]} color={Colors.grey.c800} w={25} /></td>
                      <td>{icon[1]}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Table>
          <Columns>
            <Column>
              <ComponentTitle>Code <span>Icon</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Icon name='activity' color={Colors.blue} w={30} />`}
              />
            </Column>
            <Column>
              <ComponentTitle>Code <span>Icon with Background</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Icon name='activity' color={Colors.white} bg={Colors.blue} w={30} p={4} />`}
              />
            </Column>
          </Columns>
          <Clear />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Form</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
            <Header level={1}>Input</Header>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'label', description:'Label for the input', type: 'string', options: [], default: ''},
                {property:'type', description:'Input type', type: 'oneOf', options: ['text', 'number', 'date', 'time', 'email', 'password', 'url', 'tel', 'range', 'file'], default: 'text'},
                {property:'value', description:'Default value of the input', type: 'string', options: [], default: ''},
                {property:'id', description:'A unique identifier for the input. One will be auto-generated if not provided.', type: 'string', options: [], default: 'auto-generated'},
                {property:'disabled', description:'Specifies that the field should be disabled', type: 'bool', options: [], default: 'false'},
                {property:'Required', description:'Specifies that an input field is required and must be filled out', type: 'bool', options: [], default: 'false'},
                {property:'max', description:'Maximum value for an input field', type: 'num', options: [], default: ''},
                {property:'min', description:'Maximum value for an input field', type: 'num', options: [], default: ''},
                {property:'step', description:'The legal number intervals for an input field', type: 'num', options: [], default: ''},
                {property:'placeholder', description:'Text for the placeholder text', type: 'string', options: [], default: ''},
              ]}
            />
          </Table>
          <ComponentTitle>Code</ComponentTitle>
          <Code
            scope={scope}
            code={`<Input label='Name' type='text' placeholder='First and Last Name' />`}
          />
          <br /><br />
          <ComponentType>
            <Header level={1}>Textarea</Header>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'label', description:'Label for the textarea', type: 'string', options: [], default: ''},
                {property:'value', description:'Default value of the textarea', type: 'string', options: [], default: ''},
                {property:'id', description:'A unique identifier for the textarea. One will be auto-generated if not provided.', type: 'string', options: [], default: 'auto-generated'},
                {property:'disabled', description:'Specifies that the field should be disabled', type: 'bool', options: [], default: 'false'},
                {property:'Required', description:'Specifies that an input field is required and must be filled out', type: 'bool', options: [], default: 'false'},
                {property:'placeholder', description:'Text for the placeholder text', type: 'string', options: [], default: ''},
              ]}
            />
          </Table>
          <ComponentTitle>Code</ComponentTitle>
          <Code
            scope={scope}
            code={`<Textarea label='Other' placeholder='More information' />`}
          />
          <br /><br />
          <ComponentType>
            <Header level={1}>Checkbox</Header>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'label', description:'Label for the checkbox', type: 'string', options: [], default: ''},
                {property:'groupLabel', description:'Optional label for the input', type: 'string', options: [], default: ''},
                {property:'value', description:'The value bound to the input.', type: 'string', options: [], default: ''},
                {property:'id', description:'A unique identifier for the checkbox. One will be auto-generated if not provided.', type: 'string', options: [], default: 'auto-generated'},
                {property:'checked', description:'If true, the checkbox will be checked', type: 'bool', options: [], default: 'false'},
                {property:'disabled', description:'Specifies that the field should be disabled', type: 'bool', options: [], default: 'false'},
                {property:'required', description:'Specifies that an input field is required and must be filled out', type: 'bool', options: [], default: 'false'},
              ]}
            />
          </Table>
          <Columns>
            <Column>
              <ComponentTitle>Code <span>Checkbox</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Checkbox label='Save for Later' />`}
              />
            </Column>
            <Column>
              <ComponentTitle>Code <span>Checkbox with Group Label</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Checkbox label='I agree' groupLabel='Privacy Policy' />`}
              />
            </Column>
          </Columns>
          <br /><br />
          <ComponentType>
            <Header level={1}>InputGroup</Header>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'layout', description:'Layout of the form group', type: 'oneOf', options: ['vertical', 'horizontal'], default: 'vertical'},
              ]}
            />
          </Table>
          <Columns>
            <Column>
              <ComponentTitle>Code</ComponentTitle>
              <Code
                p={'30px'}
                scope={scope}
                code={`<InputGroup>
  <Input label='Name' placeholder='First and Last Name' />
  <Input label='Phone Number' type='tel' placeholder='123-456-7890' />
  <Input label='Email' type='email' placeholder='name@email.com' />
  <Textarea label='Other' placeholder='More information' />
  <Checkbox label='I agree' groupLabel='Privacy Policy' />
</InputGroup>`}
              />
            </Column>
            <Column>
              <ComponentTitle>Code <span>Horizontal Layout</span></ComponentTitle>
              <Code
                p={'30px'}
                scope={scope}
                code={`<InputGroup layout='horizontal'>
  <Input label='Name' placeholder='First and Last Name' />
  <Input label='Phone Number' type='tel' placeholder='123-456-7890' />
  <Input label='Email' type='email' placeholder='name@email.com' />
  <Textarea label='Other' placeholder='More information' />
  <Checkbox label='I agree' groupLabel='Privacy Policy' />
</InputGroup>`}
              />
            </Column>
          </Columns>
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Sidebar</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
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
            code={`const issues = [
  {title: "Possible Atrial Standstill"},
  {title: "Depressed Mood"},
  {title: "Elevated Cholesterol"},
  {title: "Right Nasal Polyp"},
  {title: "Diet for Longevity"},
  {title: "Syncope (Fainting)"},
  {title: "Bilateral Leg Cramps"}
];
const preventive = [
  {title:'Pap smear'},
  {title:'Mammography'},
  {title:'Colorectal cancer'},
  {title:'Osteoporosis'},
  {title:'Lung cancer'},
  {title:'AAA'},
  {title:'Hep C'},
  {title:'Gonorrhea'},
  {title:'Chlamydia'},
  {title:'HIV'},
  {title:'Hemoglobin A1c'},
  {title:'Vaccines'}
];
const sidebarlinks = [
  {group:'Issues', array: issues},
  {group:'Preventive Care', array: preventive},
]
var selectedIssue = sidebarlinks[0].array[0];

render(<Sidebar
  links={sidebarlinks}
  selected = {{group:'Issues',issue:selectedIssue, id:0}}
/>)`}
          noInline
          />
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
          <Header level={0} >Avatar</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
          <SubGroup>
            <Avatar size='small' type='icon' content='activity' />
            <Avatar size='medium' type='icon' content='activity' />
            <Avatar size='large' type='icon' content='activity' />
            <Avatar size='small' type='defaultProfile' color='purple' />
            <Avatar size='medium' type='defaultProfile' color='purple' />
            <Avatar size='large' type='defaultProfile' color='purple' />
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
                {property:'type', description:'Type of avatar', type: 'oneOf', options: ['initials', 'icon', 'defaultProfile', 'image'], default: 'initials'},
                {property:'color', description:'Color of avatar', type: 'oneOf', options: ['blue', 'green', 'yellow', 'red', 'purple', 'grey'], default: 'blue'},
                {property:'size', description:'The size of the avater', type: 'oneOf', options: ['small', 'medium', 'large'], default: 'large'},
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
                code={`<Avatar size='large' type='defaultProfile' color='purple' />`}
              />
            </Column>
          </Columns>
          <Clear />
          <Columns>
            <Column>
              <ComponentTitle>Code <span>Icon</span></ComponentTitle>
              <Code
                scope={scope}
                code={`<Avatar size='large' type='icon' content='forward' />`}
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
          <Clear />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Table Row</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'title', description:'The main text for the row', type: 'string', options: [], default: ''},
                {property:'subtitle', description:'The smaller text on the main row', type: 'string', options: [], default: ''},
                {property:'line2', description:'The smaller text on the second row', type: 'string', options: [], default: ''},
                {property:'icon', description:'The name of the icon to go in circle on the left', type: 'string', options: [], default: ''},
                {property:'result', description:'The text for the right section.', type: 'string', options: [], default: ''},
              ]}
            />
          </Table>
          <Columns>
            <Column className="tableModule">
              <ComponentTitle>Code <span>Standard</span></ComponentTitle>
              <Code
                p={'0px'}
                scope={scope}
                code={`<TableRow
  title='Sartorial typewriter banh mi'
  subtitle='10mg tablet'
  line2='Take once daily'
/>`}
              />
            </Column>
            <Column className="tableModule">
              <ComponentTitle>Code <span>With Icon</span></ComponentTitle>
              <Code
                p={'0px'}
                scope={scope}
                code={`<TableRow
  title='Fingerstache flexitarian'
  subtitle='10mg tablet'
  line2='Take once daily'
  icon='medication'
  result='Abmormal'
/>`}
              />
            </Column>
          </Columns>
          <Clear />
        </Topic>
        <TopicTitle>
          <SubTitle>Component</SubTitle>
          <Header level={0} >Module</Header>
        </TopicTitle>
        <Topic>
          <ComponentType>
            <Columns>
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
            </Columns>
            <Clear />
          </ComponentType>
          <Table>
            <ComponentTitle>Props</ComponentTitle>
            <PropTable
              properties = {[
                {property:'title', description:'Text for title of the module', type: 'string', options: [], default: ''},
                {property:'type', description:'Type of Module', type: 'oneOf', options: ['basic', 'tag', 'table', 'issues'], default: 'basic'},
                {property:'category', description:'The category the module relates to. Determines the icon.', type: 'oneOf', options: ['From icon list'], default: ''},
              ]}
            />
          </Table>
          <ComponentType>
            <ComponentTitle>Basic Module</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Table>
              <PropTable
                properties = {[
                  {property:'content', description:'The text for a basic module', type: 'string', options: [], default: ''},
                ]}
              />
            </Table>
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
            <Table>
              <PropTable
                properties = {[
                  {property:'tags', description:'Array of Tags', type: 'array', options: [], default: ''},
                ]}
              />
            </Table>
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
          <ComponentType className="tableModule">
            <ComponentTitle>Table Module</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Table>
              <PropTable
                properties = {[
                  {property:'rows', description:'Array of Rows', type: 'array', options: [], default: ''},
                ]}
              />
            </Table>
            <Code
              scope={scope}
              code={`<Module
  title = "Medications"
  type  = "table"
  category  = "medication"
  rows  = {[
        {title: "predniSONE", subtitle: "1 mg oral tablet", line2:"Take one tablet daily."},
        {title: "Levothyroxine", subtitle: "175 mcg (0.175 mg) oral tablet", line2:"Take one tablet daily."}
      ]}
/>`}
            />

          </ComponentType>
          <ComponentType>
            <ComponentTitle>Issue Module</ComponentTitle>
            <Explanation>Leggings kinfolk pinterest franzen. Asymmetrical farm-to-table fashion axe hella coloring book man braid. Polaroid tacos hell of plaid marfa direct trade pop-up cred keytar food truck. Church-key meh af, lyft copper mug humblebrag drinking vinegar. </Explanation>
            <Table>
              <PropTable
                properties = {[
                  {property:'issue', description:'A hash with all of the information for an issue', type: 'associative array', options: [], default: ''},
                  {property:'summary', description:'If true, show the issue in summary form, paring down the information shown', type: 'bool', options: [], default: 'false'},
                ]}
              />
            </Table>
            <ComponentTitle><span>Summary</span></ComponentTitle>
            <Code
              p='15%'
              scope={scope}
              code={`const issue = {
  title: "Possible Atrial Standstill",
  favorite: true,
  status: "high",
  assessment: "Has manifested as dyspnea (fixed with pacer changes) and unexpected aproxysmal episodes of chest pressure/pain without clear etiology. Has had CTA in the past that was negative for any aortopathy or PE. Per discussion with Dr. Vedantham, he is Migas chillwave kitsch, subway tile snackwave literally iPhone slow-carb twee venmo man bun kinfolk keffiyeh. Semiotics flannel cred adaptogen craft beer hoodie hammock knausgaard heirloom.",
  planItems: [
      {name:"Metoprolol Tartrate", dosage:"25 mg, 30 TABLET", instructions:"6 refill(s)", type:"medication"},
      {name:"NT-proBNP", type:"lab", result:"Abnormal"},
      {name:"CK-MB(CK-2)", instructions:"Fasting",  type:"lab"},
      {name:"Troponin T", type:"lab"},
    ],
  goals: [
    'Lower Cholesterol to 185 mg/dL',
    'Lose 10lb (145b)'
  ],
  workflows: [
    'Lorem Ipsum Doler',
    'Sit Amet rap airhorn'
  ],
  notes: 'Taxidermy messenger bag tote bag sustainable pop-up freegan artisan gluten-free fanny pack shaman.'
};

render(<Issue issue={issue} summary />)`}
              noInline
            />
          </ComponentType>
          <ComponentType>
          <ComponentTitle><span>Full Issue</span></ComponentTitle>
          <Code
              p='10%'
              scope={scope}
              code={`const issue = {
  title: "Possible Atrial Standstill",
  favorite: true,
  status: "high",
  assessment: "Has manifested as dyspnea (fixed with pacer changes) and unexpected aproxysmal episodes of chest pressure/pain without clear etiology. Has had CTA in the past that was negative for any aortopathy or PE. Per discussion with Dr. Vedantham, he is Migas chillwave kitsch, subway tile snackwave literally iPhone slow-carb twee venmo man bun kinfolk keffiyeh. Semiotics flannel cred adaptogen craft beer hoodie hammock knausgaard heirloom.",
  planItems: [
      {name:"Metoprolol Tartrate", dosage:"25 mg, 30 TABLET", instructions:"6 refill(s)", type:"medication"},
      {name:"NT-proBNP", type:"lab", result:"Abnormal"},
      {name:"CK-MB(CK-2)", instructions:"Fasting",  type:"lab"},
      {name:"Troponin T", type:"lab"},
    ],
  goals: [
    'Lower Cholesterol to 185 mg/dL',
    'Lose 10lb (145b)'
  ],
  workflows: [
    'Lorem Ipsum Doler',
    'Sit Amet rap airhorn'
  ],
  notes: 'Taxidermy messenger bag tote bag sustainable pop-up freegan artisan gluten-free fanny pack shaman.'
};

render(<Issue issue={issue} />)`}
              noInline
            />
          </ComponentType>
        </Topic>
      </Content>
    );
  }
}

export default Guide;

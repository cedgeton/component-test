import React from 'react';
import styled from 'styled-components';
import Bull from '../Module/Bull.js';
import RiskStatus from '../../components/RiskStatus';
import {Colors}  from '../../components/System';

const PopoverSidebarWrapper = styled.div`
  padding: 26px 0 28px 0;
  height: calc(100vh - 56px);
  overflow: auto;
  border-right: 1px solid ${Colors.grey.c400};
  background: #fff;
`;

const PopoverLinks = styled.ul`
  text-align: left;
  padding: 0;
  margin: 0 0 40px;
  width: 100%;
  font-weight: 400;
  list-style-type: none;
  li{
    padding: 0 32px 0 24px;
    &.selected{
      background: ${Colors.grey.c300};
      font-weight: 600;
      &:hover a{
        background: ${Colors.grey.c300};
      }
    }
    &:hover{
      background: ${Colors.grey.c300};
    }
  }
`;
const Link = styled.a`
  font-size: 12px;
  color: ${Colors.black.c400};
  padding: 7px 0;
  display: block;
  max-width: 230px;
`;
const GroupTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: ${Colors.black.c800};
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 8px;
  padding-left: 24px;
`;
const ListBull = styled(Bull)`
  position: absolute;
  margin-left: -13px;
  line-height: 30px;
`;
const ListRiskStatus = styled(RiskStatus)`
  margin: 0 0 0 6px;
`;

export default class PopoverSidebar extends React.Component {
  render(){
    var selected = this.props.selected;
    return (
      <PopoverSidebarWrapper>
        {this.props.links.map(function(group, i){
          var selectedId = selected.group == group.group ? selected.id : null;
          return(
            <div>
              <GroupTitle>{group.group}</GroupTitle>
              <PopoverLinks>
                {group.array.map(function(item, i){
                  return (
                    <li className={selectedId == i? "selected" : ""}>
                      {item.favorite ? (<ListBull>&bull;</ListBull>):("")}
                      <Link href={"#issue"+i}>{item.title}
                      <ListRiskStatus status={item.status} /></Link>
                    </li>
                  )
                })}
              </PopoverLinks>
            </div>
          )
        })}
      </PopoverSidebarWrapper>
    )
  }
}

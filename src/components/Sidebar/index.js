import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu
, SidebarLink} from './SidebarElements'

function Sidebar ({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="groupies" onClick={toggle}>
                        D-Group 21/22
                    </SidebarLink>
                    <SidebarLink to="WallOfFame" onClick={toggle}>
                        Wall Of Fame
                    </SidebarLink>
                    <SidebarLink to="taggfilmer" onClick={toggle}>
                        Taggfilmer
                    </SidebarLink>
                    <SidebarLink to="calender" onClick={toggle}>
                        Festkalender
                    </SidebarLink>
                    <SidebarLink to="events" onClick={toggle}>
                        Evenemang
                    </SidebarLink>
                    <SidebarLink to="domd" onClick={toggle}>
                        DÖMD
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar


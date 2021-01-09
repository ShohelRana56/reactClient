import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
  SidebarMenu,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
            to="about"
          >
            About
          </SidebarLink>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
            to="discover"
          >
            Discover
          </SidebarLink>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
            to="services"
          >
            Services
          </SidebarLink>
          <SidebarLink
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
            to="signup"
          >
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;

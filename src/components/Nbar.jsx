import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { styled } from "@nextui-org/react"


const Box = styled("div", {
    boxSizing: "border-box",
  });
  
const Layout = ({ children }) => (
    <Box
      css={{
        maxW: "100%"
      }}
    >
      {children}
    
    </Box>
  );
  

export default function Nbar() {
  const collapseItems = [
    "Home",
    "About",
    "Shipment Tracking",
    "Contact",
   
  ];

  return (
    <Layout>
      <Navbar shouldHideOnScroll="true" isBordered variant="sticky">
        <Navbar.Brand className="w-full md:w-fit flex justify-between md:block ">
          <Navbar.Toggle className="w-1/5 md:hidden" aria-label="toggle navigation" />
        
          <Text className="w-4/5 md:w-fit" b color="inherit" >
            ASAP
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link>
            About
          </Navbar.Link>
          <Navbar.Link href="#">Shipment Tracking</Navbar.Link>
          <Navbar.Link href="#">Vision</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content hideIn={'xs'}>
          
          
           <p>For Support Call +44 411399 4034</p>
         
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
    </Layout>
  )
}

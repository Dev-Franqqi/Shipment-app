import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { styled } from "@nextui-org/react"


const Box = styled("div", {
    boxSizing: "border-box",
    width:"100vw"
  });
  
const Layout = ({ children }) => (
    <Box
      css={{
        maxW: "100%",
        position:"sticky",
        top:"0",
        zIndex:"10"
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
    "Vision",
    "Contact",
   
  ];

  return (
    <Layout>
      <Navbar isBordered className=" sticky top-0 bg-white" variant="sticky">
        <Navbar.Brand className="w-full md:w-fit flex justify-between md:block ">
          <Navbar.Toggle className="w-1/5 md:hidden" aria-label="toggle navigation" />
        
          <Text className="w-4/5 md:w-fit" b color="inherit" >
            ASAP
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/about">
            About
          </Navbar.Link>
          <Navbar.Link href="/about">Shipment Tracking</Navbar.Link>
          <Navbar.Link href="/vision">Vision</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
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
              href={item==="Home"?'/':`/${item}`}
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

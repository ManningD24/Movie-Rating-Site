const Navigation = () => {
   return
   <>
   <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
      <Container>
         <Navbar.Toggle aria-controls='responsive-navbar-nav' />
         <Navbar.Collapse id='responsive-navbar-nav'>
            <nav>
               <Nav.Link href='/'>Home</Nav.Link>
            </nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>
   </>
}

export default Navigation;
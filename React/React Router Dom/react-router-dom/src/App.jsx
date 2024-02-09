import { About } from "./Components/about"
import { Contact } from "./Components/contact"
import Container from "./Components/container"
import { Footer } from "./Components/footer"
import { GithubUsers } from "./Components/githubUsers"
import Header from "./Components/header"
import { Home } from "./Components/home"
import { MainContainer } from "./Components/mainContainer"

function App() {


  return (<>
    <Container>

      <Header></Header>
      <MainContainer>
        <Home></Home>
      </MainContainer>
      <Footer></Footer>

    </Container>

  </>)

}

export default App

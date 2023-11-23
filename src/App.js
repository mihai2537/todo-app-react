import Layout from "./components/layout";
import Home from "./pages/home";
import Header from "./components/header";

export default function App() {
  return (
    <Layout>
      <Header></Header>
      <Home />
    </Layout>
  );
}

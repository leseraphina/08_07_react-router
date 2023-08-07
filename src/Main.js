import { BrowserRouter, Routes,Route } from "react-router-dom";

//  모든 페이지
import App from './components/App';
import Home from './page/Home';
import Sample01 from "./page/Sample01";
import Sample02 from "./page/Sample02";
import Sub01 from "./page/Sub01"; 
import Sub02 from "./page/Sub02";
import NotFind from "./page/NotFind";



export default function Main(){
 return (
  <BrowserRouter>
  <App>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="sample01" element={<Sample01 />} /> */}
      <Route path="sample01">
        <Route index element={<Sample01 />} />
        <Route path="sub01" element={<Sub01 />} />
        <Route path="sub02" element={<Sub02 />} />
      </Route>
      <Route path="sample02" element={<Sample02 />} />
      <Route path="*" element={<NotFind />} />
    </Routes>
  </App>
  </BrowserRouter>
 )
}
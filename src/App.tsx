import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./LayoutComponents/Layout";
import Rending from "./pageComponents/Rending";
import Main from "./pageComponents/Main";
import Projects from "./pageComponents/Projects";
import MoingLayout from "./LayoutComponents/MoingLayout";
import Kanban from "./pageComponents/Kanban";
import Issue from "./pageComponents/Issue";
import IssueDetail from "./pageComponents/IssueDetail";
import MoingSpace from "./pageComponents/MoingSpace";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Rending />} />
    //     <Route path="main" element={<Main />} />
    //     <Route path="projects" element={<Projects />} />
    //   </Route>
    //   {/* MoingSpace 컴포넌트를 루트로 설정 */}
    //   <Route path="/" element={<MoingLayout />}>
    //     {/* 이제 MoingSpace 컴포넌트 내부에 중첩된 라우팅을 구성합니다. */}
    //     <Route path="moingSpace" element={<MoingSpace />} />
    //     <Route path="kanban" element={<Kanban />} />
    //     <Route path="issue" element={<Issue />}>
    //       <Route path="detail" element={<IssueDetail />} />
    //     </Route>
    //   </Route>
    // </Routes>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rending />} />
        <Route path="main" element={<Main />} />
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="/moingSpace/*" element={<MoingLayout />}>
        <Route index element={<MoingSpace />} />
        <Route path="kanban" element={<Kanban />} />
        <Route path="issue" element={<Issue />}>
          <Route path="detail" element={<IssueDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

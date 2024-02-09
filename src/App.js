import './App.css';
import Dropdown from './components/Dropdown';
import TopLinks from './components/Header/NavBar';
import Divider from './components/Divider';
import CustomTable from './components/Table';
import Pagination from './components/Pagination';
import InvestmentTypeModal from './components/modals/InvestmentTypeModal';
import ReasonRejectionModal from './components/modals/ReasonRejectionModal';
import SuccessModal from './components/modals/SuccessModal';

const options1 = [
  { name: "승인상태 변경", value: "0" },
  { name: "승인완료", value: "1" },
  { name: "승인거부", value: "2" },
];

const statusOptions = [
  { name: "승인여부 전체", value: "all" },
  { name: "승인대기", value: "waiting" },
  { name: "승인완료", value: "approved" },
  { name: "승인거부", value: "denied" },
];


const orderOptions = [
  { name: "신청일시순", value: "applyDate" },
  { name: "승인일시순", value: "approvalDate" },
];
const additionalOptions = [
  { name: "50개씩 보기", value: "view50" },
];

function App() {
  return (
    <div className="main">
      <div className="row-1">
        <h2 className="head-1">회원상세</h2>
        <p className="text-1"><span className="act-dot"></span>필수항목</p>
      </div>
      <Divider />
      <TopLinks />
      <div className="d-flex justify-content-between row-3">
        <h2 className="head2">신청 목록 <p>(총 100명 | 승인대기 <span>1</span> 건)</p>
        </h2>
        <div className="d-flex gap-1">
          <Dropdown options={statusOptions} />
          <Dropdown options={orderOptions} />
          <Dropdown options={additionalOptions} />
        </div>
      </div>
      <Divider />
      <div className="d-flex justify-content-between row-4">
        <a href="#!" className="button-main" data-bs-toggle="modal" data-bs-target="#modal1">
          등록
        </a>
        <div className="d-flex gap-1 align-items-center">
          <h2 className="head3">선택한 0건</h2>
          <Dropdown options={options1} />
          <a href="#!" className="button-main" data-bs-toggle="modal" data-bs-target="#modal2">
            저장
          </a>
        </div>
      </div>

      <CustomTable />
      <Pagination />

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalpop">
        Success Modal
      </button>

      <InvestmentTypeModal />

      <ReasonRejectionModal />
      <SuccessModal />
    </div>
  );
}

export default App;

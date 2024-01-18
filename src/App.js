import { useEffect } from 'react';
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

  useEffect(() => {


    setTimeout(() => {

      function initializeDropdown(dropdownId) {
        const optionMenu = document.getElementById(dropdownId),
          selectBtn = optionMenu.querySelector(".select-btn"),
          options = optionMenu.querySelectorAll(".option"),
          sBtn_text = optionMenu.querySelector(".sBtn-text");

        function closeDropdownOutside(e) {
          if (!optionMenu.contains(e.target)) {
            optionMenu.classList.remove("active");
            document.removeEventListener("click", closeDropdownOutside);
          }
        }

        selectBtn.addEventListener("click", () => {
          optionMenu.classList.toggle("active");
          document.addEventListener("click", closeDropdownOutside);
        });

        options.forEach((option) => {
          option.addEventListener("click", (e) => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
            document.removeEventListener("click", closeDropdownOutside);
            e.stopPropagation(); // Prevent the click event from propagating to document
          });
        });
      }

      // Initialize the custom dropdowns
      // initializeDropdown("dropdown1");
      // initializeDropdown("dropdown2");
      // initializeDropdown("dropdown3");
      // initializeDropdown("dropdown4");
      // initializeDropdown("dropdown5");
    }, 3000);
  }, [])

  return (
    <div class="main">
      <div class="row-1">
        <h2 class="head-1">회원상세</h2>
        <p class="text-1"><span class="act-dot"></span>필수항목</p>
      </div>
      <Divider />
      <TopLinks />
      <div class="d-flex justify-content-between row-3">
        <h2 class="head2">신청 목록 <p>(총 100명 | 승인대기 <span>1</span> 건)</p>
        </h2>
        <div class="d-flex gap-1">

          <Dropdown options={statusOptions} />
          <Dropdown options={orderOptions} />
          <Dropdown options={additionalOptions} />


        </div>
      </div>
      <Divider />
      <div class="d-flex justify-content-between row-4">
        <a href="#!" class="button-main" data-bs-toggle="modal" data-bs-target="#modal1">
          등록
        </a>
        <div class="d-flex gap-1 align-items-center">
          <h2 class="head3">선택한 0건</h2>
          <Dropdown options={options1} />
          <a href="#!" class="button-main" data-bs-toggle="modal" data-bs-target="#modal2">
            저장
          </a>
        </div>
      </div>
     <CustomTable/>
      <Pagination/>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalpop">
        Launch demo modal
      </button>

<InvestmentTypeModal/>

     <ReasonRejectionModal/>

      <SuccessModal/>
    </div>
  );
}

export default App;

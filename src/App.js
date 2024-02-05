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

import saveIcon from './assets/saveicon.svg';
import errorIcon from './assets/erroricon.svg';

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
          <select class="form-select select-menu" aria-label="Default select example">
            <option selected>승인여부 전체</option>
            <option value="1">승인대기</option>
            <option value="2">승인완료</option>
            <option value="3">승인거부</option>
          </select>
          <select class="form-select select-menu" aria-label="Default select example">
            <option selected>신청일시순</option>
            <option value="1">승인일시순</option>
          </select>
          <select class="form-select select-menu" aria-label="Default select example">
            <option selected>50개씩 보기</option>
            <option value="1">30개씩 보기</option>
          </select>
        </div>
      </div>
      <Divider />
      <div class="d-flex justify-content-between row-4">
        <a href="#!" class="button-main" data-bs-toggle="modal" data-bs-target="#modal1">
          등록
        </a>
        <div class="d-flex gap-1 align-items-center">
          <h2 class="head3">선택한 0건</h2>
          <select class="form-select select-menu" aria-label="Default select example">
            <option selected>승인상태 변경</option>
            <option value="1">승인완료</option>
            <option value="2">승인거부</option>
          </select>
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

      <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-u">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">투자유형 변경</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0 ">
              <form action="">
                <div class="content-area">
                  <div class="Detail-box">
                    <div class="form-input">
                      <div class="Label-u">
                        회원번호
                      </div>
                      <input type="text" />
                    </div>
                    <div class="form-input">
                      <div class="Label-u">
                        회원명/법인명
                      </div>
                      <input type="text" />
                    </div>
                    <div class="form-input">
                      <div class="Label-u">
                        <span>투자유형<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                          <circle cx="2" cy="2" r="2" fill="#FF4D4F" />
                        </svg></span>
                      </div>
                      <div class=" detaildrop">
                        <select class="form-select select-menu" aria-label="Default select example">
                          <option selected>일반개인</option>
                          <option value="1">소득적격</option>
                          <option value="2">개인전문</option>
                          <option value="3">법인</option>
                          <option value="4">여신금융</option>
                          <option value="5">P2P온투</option>
                        </select>
                      </div>

                    </div>
                    <div class="form-input">
                      <div class="Label-u">
                        <span>서류첨부<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                          <circle cx="2" cy="2" r="2" fill="#FF4D4F" />
                        </svg></span>
                      </div>
                      <div class="d-flex w-100 ">
                        <div class="custom-file">
                          <input type="file" class="custom-file-input" accept=".jpg, .jpeg, .gif, .png, .pdf" id="file" multiple onchange="javascript:updateList()" />
                          <label class="custom-file-label button-u" for="file">
                            파일 선택
                          </label>
                        </div>
                        <ul id="fileList" class="file-list"></ul>
                      </div>
                    </div>
                  </div>
                  <ul class="note">
                    <li>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</li>
                    <li>최대 10개, 100MB까지 등록이 가능합니다.</li>
                  </ul>
                </div>
                <div class="modal-footer foot-u">
                  <button type="submit" class="save-btn">저장</button>
                  <button type="button" class="cancel-btn" data-bs-dismiss="modal">취소</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-u">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">승인거부 사유 입력</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-0 ">
              <form action="">
                <div class="content-area">
                  <div class="Detail-box">
                    <div class="form-input">
                      <div class="Label-u">
                        회원번호
                      </div>
                      <input type="text" />
                    </div>
                    <div class="form-input">
                      <div class="Label-u">
                        회원명/법인명
                      </div>
                      <input type="text" />
                    </div>
                    <div class="form-input">
                      <div class="Label-u">
                        <span>승인거부 사유<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                          <circle cx="2" cy="2" r="2" fill="#FF4D4F" />
                        </svg></span>
                      </div>
                      <div class="w-100 p-3">
                        <div class="d-flex align-items-center gap-1 checkcont">
                          <div class="slds-checkbox checkmodal">
                            <input type="checkbox" class="chb chb-1 ch2" id="chb-4" />
                            <label for="chb-4"></label>
                          </div>
                          <span>서류 식별 불가</span>
                        </div>
                        <div class="d-flex align-items-center gap-1 checkcont mt-1">
                          <div class="slds-checkbox checkmodal">
                            <input type="checkbox" class="chb chb-1 ch2" id="chb-5" />
                            <label for="chb-5"></label>
                          </div>
                          <span>필수 서류 누락</span>
                        </div>
                        <div class="d-flex align-items-center gap-1 checkcont mt-1">
                          <div class="slds-checkbox checkmodal">
                            <input type="checkbox" class="chb chb-1 ch2" id="chb-6" />
                            <label for="chb-6"></label>
                          </div>
                          <span>서류의 내용이 등록된 회원정보와 다름</span>
                        </div>
                        <div class="d-flex align-items-center gap-1 checkcont mt-1">
                          <div class="slds-checkbox checkmodal">
                            <input type="checkbox" class="chb chb-1 ch2" id="chb-7" />
                            <label for="chb-7"></label>
                          </div>
                          <span>서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)</span>
                        </div>
                        <div class="d-flex align-items-center gap-1 checkcont mt-1">
                          <div class="slds-checkbox checkmodal">
                            <input type="checkbox" class="chb chb-1 ch2" id="chb-8" />
                            <label for="chb-8"></label>
                          </div>
                          <span>서류의 유효기간이 초과됨</span>
                        </div>
                        <div class="d-flex align-items-center gap-1 checkcont mt-1">
                          <div class="slds-checkbox checkmodal">
                            <input type="checkbox" class="chb chb-1 ch2" id="chb-9" />
                            <label for="chb-9"></label>
                          </div>
                          <span>직접 입력</span>
                        </div>
                        <div class="discriptionbox mt-3 ">
                          <textarea placeholder="사유 입력"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-input ext-bord">
                    <div class="w-100 d-flex ">
                      <div class="Label-u w-150px">
                        <span>최근저장일시</span>
                      </div>
                      <div class="datetime">
                        <input type="datetime-local" />
                      </div>
                    </div>
                    <div class="w-100 d-flex ">
                      <div class="Label-u w-150px">
                        <span>관리자</span>
                      </div>
                      <div class="datetime">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer foot-u">
                  <button type="submit" class="save-btn">저장</button>
                  <button type="button" class="cancel-btn" data-bs-dismiss="modal">취소</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalpop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modalpop">
          <div class="modal-content">
            <div class="p-4">
              <div class="d-flex justify-content-between align-items-center ">
                <div>
                  <img src={saveIcon} alt="" />
                  <img src={errorIcon} alt="" />
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <h2 class="head2 h2u">저장되었습니다.</h2>
              <div class="w-100 d-flex justify-content-center align-items-center ">
                <button type="submit" class="save-btn" data-bs-dismiss="modal" aria-label="Close">확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

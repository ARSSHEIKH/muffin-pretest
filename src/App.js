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
<<<<<<< HEAD
      <Divider />
      <TopLinks />
=======
      <span className="hr-line"></span>
      <ul className="topLinks row-2">
        <li><a href="#!">기본정보 관리</a></li>
        <li><a href="#!">투자유형 관리</a></li>
        <li><a href="#!">입출금내역 조회</a></li>
        <li><a href="#!">영업내역 조회</a></li>
        <li><a href="#!">투자내역 조회</a></li>
        <li><a href="#!">채권내역 조회</a></li>
        <li><a href="#!">SMS 관리</a></li>
        <li><a href="#!">상담내역 관리</a></li>
        <li><a href="#!">1:1문의내역 조회</a></li>
      </ul>
>>>>>>> 054937dac7ebeaa3bbc1502673265ca67c7fe811
      <div className="d-flex justify-content-between row-3">
        <h2 className="head2">신청 목록 <p>(총 100명 | 승인대기 <span>1</span> 건)</p>
        </h2>
        <div className="d-flex gap-1">
<<<<<<< HEAD
          <Dropdown options={statusOptions} />
          <Dropdown options={orderOptions} />
          <Dropdown options={additionalOptions} />
        </div>
      </div>
      <Divider />
=======
          <select className="form-select select-menu" aria-label="Default select example">
            <option selected>승인여부 전체</option>
            <option value="1">승인대기</option>
            <option value="2">승인완료</option>
            <option value="3">승인거부</option>
          </select>
          <select className="form-select select-menu" aria-label="Default select example">
            <option selected>신청일시순</option>
            <option value="1">승인일시순</option>
          </select>
          <select className="form-select select-menu" aria-label="Default select example">
            <option selected>50개씩 보기</option>
            <option value="1">30개씩 보기</option>
          </select>
        </div>
      </div>
      <span className="hr-line"></span>
>>>>>>> 054937dac7ebeaa3bbc1502673265ca67c7fe811
      <div className="d-flex justify-content-between row-4">
        <a href="#!" className="button-main" data-bs-toggle="modal" data-bs-target="#modal1">
          등록
        </a>
        <div className="d-flex gap-1 align-items-center">
          <h2 className="head3">선택한 0건</h2>
<<<<<<< HEAD
          <Dropdown options={options1} />
=======
          <select className="form-select select-menu" aria-label="Default select example">
            <option selected>승인상태 변경</option>
            <option value="1">승인완료</option>
            <option value="2">승인거부</option>
          </select>
>>>>>>> 054937dac7ebeaa3bbc1502673265ca67c7fe811
          <a href="#!" className="button-main" data-bs-toggle="modal" data-bs-target="#modal2">
            저장
          </a>
        </div>
      </div>
<<<<<<< HEAD

      <CustomTable />
      <Pagination />

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalpop">
        Success Modal
=======
      <table className="slds-table slds-table--bordered">
        <thead>
          <tr className="slds-text">
            <th className="slds-cell-shrink">
              <div className="slds-checkbox">
                <input type="checkbox" className="chb chb-1 ch2" id="chb-0" />
                <label for="chb-0"></label>
              </div>
            </th>
            <th className="slds-is-sortable" scope="col">
              <div className="slds-truncate">No
              </div>
            </th>
            <th className="slds-is-sortable" scope="col">
              <div className="slds-truncate">기존유형
              </div>
            </th>
            <th className="slds-is-sortable" scope="col">
              <div className="slds-truncate">신청유형
              </div>
            </th>
            <th className="slds-is-sortable" scope="col">
              <div className="slds-truncate">제출서류
              </div>
            </th>
            <th className="slds-is-sortable" scope="col">
              <div className="slds-truncate">신청일시
              </div>
            </th>
            <th className="slds-is-sortable" scope="col">
              <div className="slds-truncate">승인여부
              </div>
            </th>
            <th className="slds-is-sortable" scope="col">
              <div className="slds-truncate">승인거부 사유
              </div>
            </th>
            <th className="slds-is-sortable" scope="col">
              <div className="slds-truncate">
                승인일시
              </div>
            </th>
            <th className="slds-is-sortable" scope="col">
              <div className="slds-truncate">
                관리자
              </div>
            </th>
          </tr>
        </thead>
        {/* <tbody>
                <tr className="no-result">
                    <td >
                        조회 결과가 없습니다.
                    </td>
                </tr>
            </tbody> */}
        <tbody className="position-relative ">
          <tr className="slds-hint-parent">
            <td className="slds-cell-shrink">
              <div className="slds-checkbox">
                <input type="checkbox" className="chb chb-1" id="chb-1" />
                <label for="chb-1"></label>
              </div>
            </td>
            <td className="slds-truncate" scope="row">1</td>
            <td className="slds-truncate">소득적격</td>
            <td className="">개인전문</td>
            <td className="slds-truncate ">
              <div className="button-u">보기</div>
            </td>
            <td className="">2023-01-10 09:00:00</td>
            <td>
              <div className="Status-u Status-shedule">승인대기</div>
            </td>
            <td><div className="slds-discription">서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가</div></td>
            <td>2023-01-10 09:00:00</td>
            <td>김관리자</td>
          </tr>
          <tr className="slds-hint-parent gray">
            <td className="slds-cell-shrink">
              <div className="slds-checkbox">
                <input type="checkbox" className="chb " id="chb-2" />
                <label for="chb-2"></label>
              </div>
            </td>
            <td className="slds-truncate" scope="row">2</td>
            <td className="slds-truncate">소득적격</td>
            <td className="">개인전문</td>
            <td className="slds-truncate ">
              <div className="button-u">보기</div>
            </td>
            <td className="">2023-01-10 09:00:00</td>
            <td>
              <div className="Status-u Status-pending">승인거부</div>
            </td>
            <td><div className="slds-discription">서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가</div></td>
            <td>2023-01-10 09:00:00</td>
            <td>김관리자</td>
          </tr>
          <tr className="slds-hint-parent">
            <td className="slds-cell-shrink">
              <div className="slds-checkbox">
                <input type="checkbox" className="chb " id="chb-3" />
                <label for="chb-3"></label>
              </div>
            </td>
            <td className="slds-truncate" scope="row">2</td>
            <td className="slds-truncate">소득적격</td>
            <td className="">개인전문</td>
            <td className="slds-truncate ">
              <div className="button-u">보기</div>
            </td>
            <td className="">2023-01-10 09:00:00</td>
            <td>
              <div className="Status-u Status-send">승인완료</div>
            </td>
            <td><div className="slds-discription">서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가</div></td>
            <td>2023-01-10 09:00:00</td>
            <td>김관리자</td>
          </tr>
        </tbody>
      </table>
      <nav>
        <ul className="slds-pagination">
          <li>
            <ahref="/#" aria-label="Previous">
              <span aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M11.6837 16.4531L9.91598 18.2208L3.43751 11.7424L3.43415 11.7457L1.66638 9.97797L1.66975 9.97461L1.6664 9.97126L3.43417 8.20349L3.43751 8.20684L9.91596 1.72839L11.6837 3.49616L5.20528 9.97461L11.6837 16.4531Z"
                    fill="#9599A1" />
                  <path
                    d="M18.3504 16.4531L16.5826 18.2208L10.1042 11.7424L10.1008 11.7457L8.33305 9.97797L8.33641 9.97461L8.33307 9.97126L10.1008 8.20349L10.1042 8.20684L16.5826 1.72839L18.3504 3.49616L11.8719 9.97461L18.3504 16.4531Z"
                    fill="#9599A1" />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <ahref="/#">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M13.4277 3.58344L11.66 1.81567L5.1815 8.29414L5.17814 8.29077L3.41037 10.0585L3.41374 10.0619L3.41039 10.0653L5.17816 11.833L5.1815 11.8297L11.66 18.3081L13.4277 16.5404L6.94927 10.0619L13.4277 3.58344Z"
                    fill="#9599A1" />
                </svg>
              </span>
            </a>
          </li>
          <li className="pages-u"><ahref="/#">1</a></li>
          <li className="pages-u"><ahref="/#">2</a></li>
          <li className="pages-u"><ahref="/#">3</a></li>
          <li className="pages-u"><ahref="/#">4</a></li>
          <li className="pages-u"><ahref="/#">5</a></li>
          <li className="pages-u"><ahref="/#">6</a></li>
          <li className="pages-u"><ahref="/#">7</a></li>
          <li>
            <ahref="/#">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M6.5722 16.5401L8.33997 18.3079L14.8184 11.8294L14.8218 11.8328L16.5896 10.065L16.5862 10.0616L16.5895 10.0583L14.8218 8.29052L14.8184 8.29387L8.33999 1.81542L6.57222 3.58318L13.0507 10.0616L6.5722 16.5401Z"
                    fill="#9599A1" />
                </svg>
              </span>
            </a>
          </li>
          <li>
            <ahref="/#" a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                  fill="none">
                  <path
                    d="M8.33332 16.4531L10.1011 18.2208L16.5796 11.7424L16.5829 11.7457L18.3507 9.97797L18.3473 9.97461L18.3507 9.97126L16.5829 8.20349L16.5796 8.20684L10.1011 1.72839L8.33334 3.49616L14.8118 9.97461L8.33332 16.4531Z"
                    fill="#9599A1" />
                  <path
                    d="M1.66666 16.4531L3.43442 18.2208L9.91289 11.7424L9.91625 11.7457L11.684 9.97797L11.6807 9.97461L11.684 9.97126L9.91624 8.20349L9.91289 8.20684L3.43444 1.72839L1.66667 3.49616L8.14512 9.97461L1.66666 16.4531Z"
                    fill="#9599A1" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalpop">
        Launch demo modal
>>>>>>> 054937dac7ebeaa3bbc1502673265ca67c7fe811
      </button>

      <InvestmentTypeModal />

<<<<<<< HEAD
      <ReasonRejectionModal />
      <SuccessModal />
=======

      <div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-u">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">투자유형 변경</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0 ">
              <form action="">
                <div className="content-area">
                  <div className="Detail-box">
                    <div className="form-input">
                      <div className="Label-u">
                        회원번호
                      </div>
                      <input type="text" />
                    </div>
                    <div className="form-input">
                      <div className="Label-u">
                        회원명/법인명
                      </div>
                      <input type="text" />
                    </div>
                    <div className="form-input">
                      <div className="Label-u">
                        <span>투자유형<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                          <circle cx="2" cy="2" r="2" fill="#FF4D4F" />
                        </svg></span>
                      </div>
                      <div className=" detaildrop">
                        <select className="form-select select-menu" aria-label="Default select example">
                          <option selected>일반개인</option>
                          <option value="1">소득적격</option>
                          <option value="2">개인전문</option>
                          <option value="3">법인</option>
                          <option value="4">여신금융</option>
                          <option value="5">P2P온투</option>
                        </select>
                      </div>

                    </div>
                    <div className="form-input">
                      <div className="Label-u">
                        <span>서류첨부<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                          <circle cx="2" cy="2" r="2" fill="#FF4D4F" />
                        </svg></span>
                      </div>
                      <div className="d-flex w-100 ">
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" accept=".jpg, .jpeg, .gif, .png, .pdf" id="file" multiple onchange="javascript:updateList()" />
                          <label className="custom-file-label button-u" for="file">
                            파일 선택
                          </label>
                        </div>
                        <ul id="fileList" className="file-list"></ul>
                      </div>
                    </div>
                  </div>
                  <ul className="note">
                    <li>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</li>
                    <li>최대 10개, 100MB까지 등록이 가능합니다.</li>
                  </ul>
                </div>
                <div className="modal-footer foot-u">
                  <button type="submit" className="save-btn">저장</button>
                  <button type="button" className="cancel-btn" data-bs-dismiss="modal">취소</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-u">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">승인거부 사유 입력</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0 ">
              <form action="">
                <div className="content-area">
                  <div className="Detail-box">
                    <div className="form-input">
                      <div className="Label-u">
                        회원번호
                      </div>
                      <input type="text" />
                    </div>
                    <div className="form-input">
                      <div className="Label-u">
                        회원명/법인명
                      </div>
                      <input type="text" />
                    </div>
                    <div className="form-input">
                      <div className="Label-u">
                        <span>승인거부 사유<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                          <circle cx="2" cy="2" r="2" fill="#FF4D4F" />
                        </svg></span>
                      </div>
                      <div className="w-100 p-3">
                        <div className="d-flex align-items-center gap-1 checkcont">
                          <div className="slds-checkbox checkmodal">
                            <input type="checkbox" className="chb chb-1 ch2" id="chb-4" />
                            <label for="chb-4"></label>
                          </div>
                          <span>서류 식별 불가</span>
                        </div>
                        <div className="d-flex align-items-center gap-1 checkcont mt-1">
                          <div className="slds-checkbox checkmodal">
                            <input type="checkbox" className="chb chb-1 ch2" id="chb-5" />
                            <label for="chb-5"></label>
                          </div>
                          <span>필수 서류 누락</span>
                        </div>
                        <div className="d-flex align-items-center gap-1 checkcont mt-1">
                          <div className="slds-checkbox checkmodal">
                            <input type="checkbox" className="chb chb-1 ch2" id="chb-6" />
                            <label for="chb-6"></label>
                          </div>
                          <span>서류의 내용이 등록된 회원정보와 다름</span>
                        </div>
                        <div className="d-flex align-items-center gap-1 checkcont mt-1">
                          <div className="slds-checkbox checkmodal">
                            <input type="checkbox" className="chb chb-1 ch2" id="chb-7" />
                            <label for="chb-7"></label>
                          </div>
                          <span>서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)</span>
                        </div>
                        <div className="d-flex align-items-center gap-1 checkcont mt-1">
                          <div className="slds-checkbox checkmodal">
                            <input type="checkbox" className="chb chb-1 ch2" id="chb-8" />
                            <label for="chb-8"></label>
                          </div>
                          <span>서류의 유효기간이 초과됨</span>
                        </div>
                        <div className="d-flex align-items-center gap-1 checkcont mt-1">
                          <div className="slds-checkbox checkmodal">
                            <input type="checkbox" className="chb chb-1 ch2" id="chb-9" />
                            <label for="chb-9"></label>
                          </div>
                          <span>직접 입력</span>
                        </div>
                        <div className="discriptionbox mt-3 ">
                          <textarea placeholder="사유 입력"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-input ext-bord">
                    <div className="w-100 d-flex ">
                      <div className="Label-u w-150px">
                        <span>최근저장일시</span>
                      </div>
                      <div className="datetime">
                        <input type="datetime-local" />
                      </div>
                    </div>
                    <div className="w-100 d-flex ">
                      <div className="Label-u w-150px">
                        <span>관리자</span>
                      </div>
                      <div className="datetime">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer foot-u">
                  <button type="submit" className="save-btn">저장</button>
                  <button type="button" className="cancel-btn" data-bs-dismiss="modal">취소</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalpop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modalpop">
          <div className="modal-content">
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-center ">
                <div>
                  <img src={saveIcon} alt="" />
                  <img src={errorIcon} alt="" />
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <h2 className="head2 h2u">저장되었습니다.</h2>
              <div className="w-100 d-flex justify-content-center align-items-center ">
                <button type="submit" className="save-btn" data-bs-dismiss="modal" aria-label="Close">확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> 054937dac7ebeaa3bbc1502673265ca67c7fe811
    </div>
  );
}

export default App;

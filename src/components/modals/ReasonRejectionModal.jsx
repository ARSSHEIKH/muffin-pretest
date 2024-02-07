import React from 'react'

export default function ReasonRejectionModal() {
  return (
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
                      <div className="Label-u exlable">
                        <span>최근저장일시</span>
                      </div>
                      <div className="datetime">
                        <input type="datetime-local" />
                      </div>
                    </div>
                    <div className="w-100 d-flex ">
                      <div className="Label-u exlable">
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
  )
}
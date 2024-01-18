import React from 'react'

export default function InvestmentTypeModal() {
  return (
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
                    <div class="select-menu" id="dropdown5">
                      <div class="select-btn">
                        <span class="sBtn-text">일반개인</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M5.87511 7.4001C5.74178 7.4001 5.61278 7.3751 5.48811 7.3251C5.36278 7.2751 5.25844 7.20843 5.17511 7.1251L0.575109 2.5251C0.391776 2.34176 0.30011 2.10843 0.30011 1.8251C0.30011 1.54176 0.391776 1.30843 0.575109 1.1251C0.758443 0.941764 0.991776 0.850098 1.27511 0.850098C1.55844 0.850098 1.79178 0.941764 1.97511 1.1251L5.87511 5.0251L9.77511 1.1251C9.95844 0.941764 10.1918 0.850098 10.4751 0.850098C10.7584 0.850098 10.9918 0.941764 11.1751 1.1251C11.3584 1.30843 11.4501 1.54176 11.4501 1.8251C11.4501 2.10843 11.3584 2.34176 11.1751 2.5251L6.57511 7.1251C6.47511 7.2251 6.36678 7.29576 6.25011 7.3371C6.13344 7.3791 6.00844 7.4001 5.87511 7.4001Z" fill="#5A616A" />
                        </svg>
                      </div>

                      <ul class="options">
                        <li class="option">
                          <span class="option-text">일반개인</span>
                        </li>
                        <li class="option">
                          <span class="option-text">소득적격</span>
                        </li>
                        <li class="option">
                          <span class="option-text">개인전문</span>
                        </li>
                        <li class="option">
                          <span class="option-text">법인</span>
                        </li>
                        <li class="option">
                          <span class="option-text">여신금융</span>
                        </li>
                        <li class="option">
                          <span class="option-text">P2P온투</span>
                        </li>
                      </ul>
                    </div>
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
  )
}
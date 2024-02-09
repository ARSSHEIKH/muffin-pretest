import React, { useRef } from 'react'
import CustomDropdown from '../Dropdown';


const options = [
  { name: "일반개인", value: "0" },
  { name: "소득적격", value: "1" },
  { name: "개인전문", value: "2" },
  { name: "법인", value: "3" },
  { name: "여신금융", value: "4" },
  { name: "P2P온투", value: "5" },
];
export default function InvestmentTypeModal() {
  const inputFileRef = useRef()
  const fileListRef = useRef()
  
  const updateList = () => {
    var input = inputFileRef.current;
    var output = fileListRef.current;
    var children = "";
    for (var i = 0; i < input.files.length; ++i) {
      children += `<li>${input.files.item(i).name}<span class="remove-list" onclick="return this.parentNode.remove()"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><g clip-path="url(#clip0_1_2132)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0C9.48912 0 11.3968 0.790176 12.8033 2.1967C14.2098 3.60322 15 5.51088 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5ZM10.146 10.854L7.5 8.207L4.854 10.854L4.146 10.147L6.793 7.5L4.146 4.854L4.854 4.146L7.5 6.793L10.146 4.146L10.854 4.854L8.207 7.5L10.854 10.146L10.147 10.854H10.146Z" fill="#DDE0E6"/></g><defs><clipPath id="clip0_1_2132"><rect width="15" height="15" fill="white"/></clipPath></defs></svg></span></li>`;
    }
    output.innerHTML = children;
  }

  return (
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
                    
                        <CustomDropdown options={options} />
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
                        <input ref={inputFileRef} type="file" className="custom-file-input" accept=".jpg, .jpeg, .gif, .png, .pdf" id="file" multiple onChange={updateList} />
                        <label className="custom-file-label button-u" for="file">
                          파일 선택
                        </label>
                      </div>
                      <ul id="fileList" ref={fileListRef} className="file-list"></ul>
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
  )
}
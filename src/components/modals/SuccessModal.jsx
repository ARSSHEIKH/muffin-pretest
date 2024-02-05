import React from 'react'

export default function SuccessModal() {
  return (
    <div className="modal fade" id="modalpop" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modalpop">
          <div className="modal-content">
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-center ">
                <div>
                  <img src="save-icon.svg" alt="" />
                  {/* <img src="error.svg" alt=""> */}
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <h2 className="head2">저장되었습니다.</h2>
              <div className="w-100 d-flex justify-content-center align-items-center ">
                <button type="submit" className="save-btn" data-bs-dismiss="modal" aria-label="Close">확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
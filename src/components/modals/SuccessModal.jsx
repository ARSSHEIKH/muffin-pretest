import React from 'react'

export default function SuccessModal() {
  return (
    <div class="modal fade" id="modalpop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modalpop">
          <div class="modal-content">
            <div class="p-4">
              <div class="d-flex justify-content-between align-items-center ">
                <div>
                  <img src="save-icon.svg" alt="" />
                  {/* <img src="error.svg" alt=""> */}
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <h2 class="head2">저장되었습니다.</h2>
              <div class="w-100 d-flex justify-content-center align-items-center ">
                <button type="submit" class="save-btn" data-bs-dismiss="modal" aria-label="Close">확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
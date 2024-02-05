import React from 'react';


const CustomTable = ({ tableData }) => {
  return (

    <table className="slds-table slds-table--bordered">
      <thead>
        <tr className="slds-text">
          <th className="slds-cell-shrink">
            <div className="slds-checkbox">
              <input type="checkbox" className="chb chb-1 ch2" id="chb-0" />
              <label htmlFor="chb-0"></label>
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
              <label htmlFor="chb-1"></label>
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
              <label htmlFor="chb-2"></label>
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
              <label htmlFor="chb-3"></label>
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

  );
};

export default CustomTable;

import React from 'react';
const TableHeader = () => {
    return (
      <tr className="slds-text">
        <th className="slds-cell-shrink">
          <div className="slds-checkbox">
            <input type="checkbox" className="chb chb-1 ch2" id="chb-0" />
            <label for="chb-0"></label>
          </div>
        </th>
        <th className="slds-is-sortable" scope="col">
          <div className="slds-truncate">No</div>
        </th>
        {/* ... other headers ... */}
        <th className="slds-is-sortable" scope="col">
          <div className="slds-truncate">관리자</div>
        </th>
      </tr>
    );
  };
  const TableRow = ({ data }) => (
    <tr className={`slds-hint-parent ${data.status === '승인대기' ? 'gray' : ''}`}>
      <td className="slds-cell-shrink">
        <div className="slds-checkbox">
          <input type="checkbox" className="chb" id={`chb-${data.id}`} />
          <label htmlFor={`chb-${data.id}`}></label>
        </div>
      </td>
      <td className="slds-truncate" scope="row">{data.no}</td>
      <td className="slds-truncate">{data.oldType}</td>
      <td className="">{data.newType}</td>
      <td className="slds-truncate">
        <div className="button-u">보기</div>
      </td>
      <td className="">{data.dateTime}</td>
      <td>
        <div className={`Status-u ${data.status === '승인대기' ? 'Status-shedule' : (data.status === '승인거부' ? 'Status-pending' : 'Status-send')}`}>
          {data.status}
        </div>
      </td>
      <td>
        <div className="slds-discription">{data.rejectReason}</div>
      </td>
      <td>{data.approvalDateTime}</td>
      <td>{data.admin}</td>
    </tr>
  );


const CustomTable = ({ tableData }) => {
  return (
 
    <table class="slds-table slds-table--bordered">
    <thead>
      <tr class="slds-text">
        <th class="slds-cell-shrink">
          <div class="slds-checkbox">
            <input type="checkbox" class="chb chb-1 ch2" id="chb-0" />
            <label for="chb-0"></label>
          </div>
        </th>
        <th class="slds-is-sortable" scope="col">
          <div class="slds-truncate">No
          </div>
        </th>
        <th class="slds-is-sortable" scope="col">
          <div class="slds-truncate">기존유형
          </div>
        </th>
        <th class="slds-is-sortable" scope="col">
          <div class="slds-truncate">신청유형
          </div>
        </th>
        <th class="slds-is-sortable" scope="col">
          <div class="slds-truncate">제출서류
          </div>
        </th>
        <th class="slds-is-sortable" scope="col">
          <div class="slds-truncate">신청일시
          </div>
        </th>
        <th class="slds-is-sortable" scope="col">
          <div class="slds-truncate">승인여부
          </div>
        </th>
        <th class="slds-is-sortable" scope="col">
          <div class="slds-truncate">승인거부 사유
          </div>
        </th>
        <th class="slds-is-sortable" scope="col">
          <div class="slds-truncate">
            승인일시
          </div>
        </th>
        <th class="slds-is-sortable" scope="col">
          <div class="slds-truncate">
            관리자
          </div>
        </th>
      </tr>
    </thead>
    {/* <tbody>
            <tr class="no-result">
                <td >
                    조회 결과가 없습니다.
                </td>
            </tr>
        </tbody> */}
    <tbody class="position-relative ">
      <tr class="slds-hint-parent">
        <td class="slds-cell-shrink">
          <div class="slds-checkbox">
            <input type="checkbox" class="chb chb-1" id="chb-1" />
            <label for="chb-1"></label>
          </div>
        </td>
        <td class="slds-truncate" scope="row">1</td>
        <td class="slds-truncate">소득적격</td>
        <td class="">개인전문</td>
        <td class="slds-truncate ">
          <div class="button-u">보기</div>
        </td>
        <td class="">2023-01-10 09:00:00</td>
        <td>
          <div class="Status-u Status-shedule">승인대기</div>
        </td>
        <td><div class="slds-discription">서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가</div></td>
        <td>2023-01-10 09:00:00</td>
        <td>김관리자</td>
      </tr>
      <tr class="slds-hint-parent gray">
        <td class="slds-cell-shrink">
          <div class="slds-checkbox">
            <input type="checkbox" class="chb " id="chb-2" />
            <label for="chb-2"></label>
          </div>
        </td>
        <td class="slds-truncate" scope="row">2</td>
        <td class="slds-truncate">소득적격</td>
        <td class="">개인전문</td>
        <td class="slds-truncate ">
          <div class="button-u">보기</div>
        </td>
        <td class="">2023-01-10 09:00:00</td>
        <td>
          <div class="Status-u Status-pending">승인거부</div>
        </td>
        <td><div class="slds-discription">서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가</div></td>
        <td>2023-01-10 09:00:00</td>
        <td>김관리자</td>
      </tr>
      <tr class="slds-hint-parent">
        <td class="slds-cell-shrink">
          <div class="slds-checkbox">
            <input type="checkbox" class="chb " id="chb-3" />
            <label for="chb-3"></label>
          </div>
        </td>
        <td class="slds-truncate" scope="row">2</td>
        <td class="slds-truncate">소득적격</td>
        <td class="">개인전문</td>
        <td class="slds-truncate ">
          <div class="button-u">보기</div>
        </td>
        <td class="">2023-01-10 09:00:00</td>
        <td>
          <div class="Status-u Status-send">승인완료</div>
        </td>
        <td><div class="slds-discription">서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가</div></td>
        <td>2023-01-10 09:00:00</td>
        <td>김관리자</td>
      </tr>
    </tbody>
  </table>

  );
};

export default CustomTable;

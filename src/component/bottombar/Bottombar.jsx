import "./bottombar.css";

export default function Bottombar() {
  return (
    <div className="bottombar">
      <div className="bottombarWrapper">
        <div className="bottombarNav">
          <span className="bottombarNavItem">About</span>
          <span className="bottombarNavItem">회사소개</span>
          <span className="bottombarNavItem">매장안내</span>
          <span className="bottombarNavItem">입점상담</span>
          <span className="bottombarNavItem">개인정보처리방침</span>
          <span className="bottombarNavItem">이용약관</span>
        </div>

        <span className="bottombarContentContainer">
          (주)우리나라사랑 | 서울특별시 강남구 도봉대로 | 대표이사 : 홍길동 |
          사업자등록번호 : 000000000
        </span>
        <span className="bottombarContentContainer">
          통신판매업 신고번호 : 000 | 개인정보보호책임자 : 홍길동 | 호스팅사업자
          : (주)우리나라사랑 | 고객센터(유료) : 0000-0000 | 이메일 :
          rosua@gmail.com
        </span>

        <span className="bottombarContentButton">사업자정보확인</span>
      </div>
    </div>
  );
}

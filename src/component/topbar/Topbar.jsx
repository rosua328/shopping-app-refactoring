import "./topbar.css";
import {
  Search,
  Login,
  PersonOutline,
  SupportAgent,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">한나라</span>
        </div>
        <div className="topcenter">
          <div className="topbarSearch">
            <input type="text" />
            <button className="topbarSearchButton">
              <Search />
            </button>
          </div>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <Login />
            <div className="topbarIconSummary">로그인</div>
          </div>
          <div className="topbarIconContainer">
            <PersonOutline />
            <div className="topbarIconSummary">마이페이지</div>
          </div>
          <div className="topbarIconContainer">
            <SupportAgent />
            <div className="topbarIconSummary">고객센터</div>
          </div>
        </div>
      </div>
    </div>
  );
}

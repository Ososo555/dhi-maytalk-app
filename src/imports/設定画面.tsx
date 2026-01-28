import svgPaths from "./svg-j1sot4zrgt";

function IOsHomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 right-0" data-name="iOS / Home Indicator">
      <div className="-translate-x-1/2 absolute bg-[#1f2024] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-[#eaf2ff] h-[40px] left-0 overflow-clip right-0 top-[44px]" data-name="Nav Bar">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#1f2024] text-[14px] text-center top-[calc(50%-8.5px)]">設定</p>
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Edit">
          <mask height="18" id="mask0_1_2985" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="1" y="1">
            <path d={svgPaths.p575dbf0} fill="var(--fill-0, #006FFD)" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2985)">
            <rect fill="var(--fill-0, #C5C6CC)" height="20" id="Fill" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Tab 1">
      <Edit />
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#71727a] text-[10px] text-center tracking-[0.15px]">今日の質問</p>
    </div>
  );
}

function BxBook() {
  return (
    <div className="relative shrink-0 size-[23px]" data-name="bx:book">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="bx:book">
          <path d={svgPaths.p3218a80} fill="var(--fill-0, #C5C6CC)" id="Vector" />
          <path d={svgPaths.p2a67e800} fill="var(--fill-0, #C5C6CC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px relative" data-name="Tab 2">
      <BxBook />
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#71727a] text-[10px] text-center tracking-[0.15px] w-[63px]">ダイアログ</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2764)" id="Icon">
          <mask height="20" id="mask0_1_2764" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <path d={svgPaths.p189ea880} fill="var(--fill-0, #006FFD)" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2764)">
            <rect fill="var(--fill-0, #006FFD)" height="20" id="Fill" width="20" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2764">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative" data-name="Tab 3">
      <Icon />
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2024] text-[10px] text-center">設定</p>
    </div>
  );
}

function TabBar() {
  return (
    <div className="absolute bg-[#eaf2ff] bottom-0 content-stretch flex gap-[4px] h-[88px] items-start left-0 pb-[32px] pt-[16px] px-[16px] right-0" data-name="Tab bar">
      <Tab />
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1f2024] text-[14px] w-full">アカウント情報</p>
    </div>
  );
}

function RightButton() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Right Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.9998">
        <g id="Right Button">
          <mask height="12" id="mask0_1_2772" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="2" y="0">
            <path clipRule="evenodd" d={svgPaths.p3443a800} fill="var(--fill-0, #006FFD)" fillRule="evenodd" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2772)">
            <rect fill="var(--fill-0, #8F9098)" height="11.9995" id="Fill" width="11.9995" x="0.000244131" y="-0.000823942" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Content />
          <RightButton />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-full left-0 right-0 top-0" data-name="Divider">
        <div className="absolute inset-[-0.25px_-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343.5 0.5">
            <path d="M0.25 0.25H343.25" id="Divider" stroke="var(--stroke-0, #D4D6DD)" strokeLinecap="round" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1f2024] text-[14px] w-full">プライバシー・セキュリティ</p>
    </div>
  );
}

function RightButton1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Right Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.9998">
        <g id="Right Button">
          <mask height="12" id="mask0_1_2772" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="2" y="0">
            <path clipRule="evenodd" d={svgPaths.p3443a800} fill="var(--fill-0, #006FFD)" fillRule="evenodd" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2772)">
            <rect fill="var(--fill-0, #8F9098)" height="11.9995" id="Fill" width="11.9995" x="0.000244131" y="-0.000823942" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Content1 />
          <RightButton1 />
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-full left-0 right-0 top-0" data-name="Divider">
        <div className="absolute inset-[-0.25px_-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343.5 0.5">
            <path d="M0.25 0.25H343.25" id="Divider" stroke="var(--stroke-0, #D4D6DD)" strokeLinecap="round" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1f2024] text-[14px] w-full">アプリ設定</p>
    </div>
  );
}

function RightButton2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Right Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.9998">
        <g id="Right Button">
          <mask height="12" id="mask0_1_2772" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="2" y="0">
            <path clipRule="evenodd" d={svgPaths.p3443a800} fill="var(--fill-0, #006FFD)" fillRule="evenodd" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2772)">
            <rect fill="var(--fill-0, #8F9098)" height="11.9995" id="Fill" width="11.9995" x="0.000244131" y="-0.000823942" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Content2 />
          <RightButton2 />
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-full left-0 right-0 top-0" data-name="Divider">
        <div className="absolute inset-[-0.25px_-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343.5 0.5">
            <path d="M0.25 0.25H343.25" id="Divider" stroke="var(--stroke-0, #D4D6DD)" strokeLinecap="round" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1f2024] text-[14px] w-full">デフォルト質問数を変更</p>
    </div>
  );
}

function RightButton3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Right Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.9998">
        <g id="Right Button">
          <mask height="12" id="mask0_1_2772" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="8" x="2" y="0">
            <path clipRule="evenodd" d={svgPaths.p3443a800} fill="var(--fill-0, #006FFD)" fillRule="evenodd" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2772)">
            <rect fill="var(--fill-0, #8F9098)" height="11.9995" id="Fill" width="11.9995" x="0.000244131" y="-0.000823942" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Content3 />
          <RightButton3 />
        </div>
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-full left-0 right-0 top-0" data-name="Divider">
        <div className="absolute inset-[-0.25px_-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343.5 0.5">
            <path d="M0.25 0.25H343.25" id="Divider" stroke="var(--stroke-0, #D4D6DD)" strokeLinecap="round" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-0 px-[16px] py-[24px] top-[253px] w-[375px]" data-name="Settings">
      <ListItem />
      <Divider />
      <ListItem1 />
      <Divider1 />
      <ListItem2 />
      <Divider2 />
      <ListItem3 />
      <Divider3 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="absolute inset-[15%_12.5%_-37.2%_12.5%]" data-name="Avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.0001 97.7624">
        <g id="Avatar">
          <path d={svgPaths.pe79d900} fill="var(--fill-0, #B4DBFF)" id="Rectangle 1" />
          <circle cx="30.0001" cy="16" fill="var(--fill-0, #B4DBFF)" id="Ellipse 1" r="16" />
        </g>
      </svg>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#eaf2ff] col-1 ml-0 mt-0 overflow-clip relative rounded-[32px] row-1 size-[80px]" data-name="Avatar">
      <Avatar2 />
    </div>
  );
}

function Edit2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Edit">
          <mask height="10" id="mask0_1_2784" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="10" x="0" y="0">
            <path d={svgPaths.p1bb76200} fill="var(--fill-0, #006FFD)" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2784)">
            <rect fill="var(--fill-0, white)" height="10" id="Fill" width="10" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Edit1() {
  return (
    <div className="bg-[#006ffd] col-1 ml-[57.5px] mt-[58px] overflow-clip relative rounded-[40px] row-1 size-[24px]" data-name="Edit">
      <Edit2 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Avatar">
      <Avatar1 />
      <Edit1 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 text-center" data-name="Name">
      <p className="css-ew64yg font-['Inter:Extra_Bold','Noto_Sans_JP:Black',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1f2024] text-[16px] tracking-[0.08px]">とーく めい</p>
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#71727a] text-[12px] tracking-[0.12px]">@Maytalk22</p>
    </div>
  );
}

function ProfileInfo() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-px px-[140px] py-[8px] top-[100px] w-[374px]" data-name="Profile info">
      <Avatar />
      <Name />
    </div>
  );
}

function Action() {
  return (
    <div className="absolute inset-[31.82%_80.37%_27.27%_5.31%] overflow-clip" data-name="Action">
      <p className="-translate-x-1/2 absolute css-4hzbpn font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[27px] not-italic text-[#1f2024] text-[15px] text-center top-[calc(50%-9px)] tracking-[-0.165px] w-[54px]">9:41</p>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute h-[14px] overflow-clip right-[14px] top-[calc(50%+1px)] w-[68px]" data-name="Container">
      <p className="absolute css-ew64yg font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[41px] not-italic text-[#1f2024] text-[17px] top-[-3px]">􀛨</p>
      <div className="absolute inset-[11.43%_74.12%_12.14%_0.74%]" data-name="Signal">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0996 10.7002">
          <path d={svgPaths.p29961000} fill="var(--fill-0, #1F2024)" id="Signal" />
        </svg>
      </div>
      <p className="absolute css-ew64yg font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21px] not-italic text-[#1f2024] text-[14px] top-[-1px]">􀙇</p>
    </div>
  );
}

function IOsStatusBar() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-white h-[44px] left-0 right-0 top-0" data-name="iOS / Status Bar">
      <Action />
      <Container />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="設定画面">
      <IOsHomeIndicator />
      <NavBar />
      <TabBar />
      <Settings />
      <ProfileInfo />
      <IOsStatusBar />
    </div>
  );
}
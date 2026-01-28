import svgPaths from "./svg-0b5v0cbgtk";

function NavBar() {
  return (
    <div className="absolute bg-[#eaf2ff] h-[36px] left-0 overflow-clip right-0 top-[44px]" data-name="Nav Bar">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#1f2024] text-[14px] text-center top-[calc(50%-8.5px)]">今日の質問</p>
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Edit">
          <mask height="18" id="mask0_1_2738" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="1" y="1">
            <path d={svgPaths.p575dbf0} fill="var(--fill-0, #006FFD)" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2738)">
            <rect fill="var(--fill-0, #2897FF)" height="20" id="Fill" width="20" />
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
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[10px] text-center">今日の質問</p>
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
        <g clipPath="url(#clip0_1_2989)" id="Icon">
          <mask height="20" id="mask0_1_2989" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <path d={svgPaths.p189ea880} fill="var(--fill-0, #006FFD)" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2989)">
            <rect fill="var(--fill-0, #C5C6CC)" height="20" id="Fill" width="20" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2989">
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
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#71727a] text-[10px] text-center tracking-[0.15px] w-[63px]">設定</p>
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

function Section() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] z-[1]" data-name="Section 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2024] text-[12px] text-center">今日までインタビューを ３日 連続継続中！</p>
        </div>
      </div>
    </div>
  );
}

function ContentSwitcher() {
  return (
    <div className="absolute bg-[#f8f9fe] content-stretch flex isolate items-center justify-center left-[16px] p-[4px] right-[16px] rounded-[16px] top-[109.89px]" data-name="Content Switcher">
      <Section />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[31.999px] relative shrink-0 w-[32px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 31.9995">
        <g id="Image">
          <mask height="28" id="mask0_1_3017" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="2">
            <g id="Shape">
              <path d={svgPaths.p2d3d2100} fill="var(--fill-0, #B4DBFF)" />
              <path clipRule="evenodd" d={svgPaths.p2c1eabb6} fill="var(--fill-0, #B4DBFF)" fillRule="evenodd" />
            </g>
          </mask>
          <g mask="url(#mask0_1_3017)">
            <rect fill="var(--fill-0, #B4DBFF)" height="31.9987" id="Fill" width="31.9987" x="0.000488281" y="-0.000549316" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="bg-[#eaf2ff] content-stretch flex flex-col items-center justify-center p-[40px] relative rounded-[24px] shrink-0 size-[100px]" data-name="Image">
      <Image1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-center">
      <p className="css-4hzbpn font-['Inter:Extra_Bold','Noto_Sans_JP:Black',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1f2024] text-[18px] tracking-[0.09px] w-[349px]">今日の質問にまだ回答していません</p>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71727a] text-[14px] w-[349px]">
        <p className="css-4hzbpn leading-[20px]">１問だけでも、今日について一緒に書いてみませんか</p>
      </div>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#006ffd] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button Primary">
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white">今日の質問を始める</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-1/2 p-[24px] top-[calc(50%+13.89px)] w-[375px]">
      <Image />
      <Frame1 />
      <ButtonPrimary />
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
    <div className="bg-white relative size-full" data-name="今日の質問（回答前）">
      <NavBar />
      <TabBar />
      <ContentSwitcher />
      <Frame />
      <IOsStatusBar />
    </div>
  );
}
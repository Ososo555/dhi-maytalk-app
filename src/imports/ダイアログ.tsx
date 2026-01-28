import svgPaths from "./svg-m2sg5542aw";

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
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#71727a] text-[10px] text-center tracking-[0.15px] w-[63px]">今日の質問</p>
    </div>
  );
}

function BxBook() {
  return (
    <div className="relative shrink-0 size-[23px]" data-name="bx:book">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="bx:book">
          <path d={svgPaths.p3218a80} fill="var(--fill-0, #2897FF)" id="Vector" />
          <path d={svgPaths.p2a67e800} fill="var(--fill-0, #2897FF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-center min-h-px min-w-px relative" data-name="Tab 2">
      <BxBook />
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[10px] text-center">ダイアログ</p>
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

function ArrowDown() {
  return (
    <div className="relative size-[15px]" data-name="Arrow Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Arrow Down">
          <mask height="9" id="mask0_1_2904" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="15" x="0" y="3">
            <path clipRule="evenodd" d={svgPaths.p30bb1df0} fill="var(--fill-0, #006FFD)" fillRule="evenodd" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2904)">
            <rect fill="var(--fill-0, #494A50)" height="14.9997" id="Fill" width="14.9994" x="0.000305164" y="-0.00102994" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function RightButton() {
  return (
    <div className="-translate-y-1/2 absolute right-[24px] size-[20px] top-1/2" data-name="Right Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9997">
        <g id="Right Button">
          <mask height="20" id="mask0_1_2908" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <path clipRule="evenodd" d={svgPaths.p3a566180} fill="var(--fill-0, #006FFD)" fillRule="evenodd" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2908)">
            <rect fill="var(--fill-0, #006FFD)" height="19.9997" id="Fill" width="20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-[#eaf2ff] h-[36px] left-0 overflow-clip right-0 top-[44px]" data-name="Nav Bar">
      <div className="absolute flex items-center justify-center left-[232px] size-[15px] top-[11px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <ArrowDown />
        </div>
      </div>
      <RightButton />
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%+0.5px)] not-italic text-[#1f2024] text-[14px] text-center top-[calc(50%-8.5px)]">2026年 1月</p>
    </div>
  );
}

function Monday() {
  return (
    <div className="content-stretch flex flex-col h-[46.874px] items-center justify-center relative shrink-0 w-[49.341px]" data-name="Monday">
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8f9098] text-[12.335px] text-center tracking-[0.6168px] uppercase">月</p>
    </div>
  );
}

function Tuesday() {
  return (
    <div className="content-stretch flex flex-col h-[46.874px] items-center justify-center relative shrink-0 w-[49.341px]" data-name="Tuesday">
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8f9098] text-[12.335px] text-center tracking-[0.6168px] uppercase">火</p>
    </div>
  );
}

function Wednesday() {
  return (
    <div className="content-stretch flex flex-col h-[46.874px] items-center justify-center relative shrink-0 w-[49.341px]" data-name="Wednesday">
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8f9098] text-[12.335px] text-center tracking-[0.6168px] uppercase">水</p>
    </div>
  );
}

function Thursday() {
  return (
    <div className="content-stretch flex flex-col h-[46.874px] items-center justify-center relative shrink-0 w-[49.341px]" data-name="Thursday">
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8f9098] text-[12.335px] text-center tracking-[0.6168px] uppercase">木</p>
    </div>
  );
}

function Friday() {
  return (
    <div className="content-stretch flex flex-col h-[46.874px] items-center justify-center relative shrink-0 w-[49.341px]" data-name="Friday">
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8f9098] text-[12.335px] text-center tracking-[0.6168px] uppercase">金</p>
    </div>
  );
}

function Saturday() {
  return (
    <div className="content-stretch flex flex-col h-[46.874px] items-center justify-center relative shrink-0 w-[49.341px]" data-name="Saturday">
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8f9098] text-[12.335px] text-center tracking-[0.6168px] uppercase">土</p>
    </div>
  );
}

function Sunday() {
  return (
    <div className="content-stretch flex flex-col h-[46.874px] items-center justify-center relative shrink-0 w-[49.341px]" data-name="Sunday">
      <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8f9098] text-[12.335px] text-center tracking-[0.6168px] uppercase">日</p>
    </div>
  );
}

function Week() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Week">
      <Monday />
      <Tuesday />
      <Wednesday />
      <Thursday />
      <Friday />
      <Saturday />
      <Sunday />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f8f9fe] content-stretch flex flex-col gap-[2.467px] items-start relative shrink-0 w-[341.26px]" data-name="Header">
      <Week />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 108" />
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 109" />
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 109" />
      </svg>
    </div>
  );
}

function UilSmile({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[2.44px] overflow-clip size-[35.668px] top-[2.3px]"} data-name="uil:smile">
      <div className="absolute inset-[4.17%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(251, 255, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.696 32.696">
            <path d={svgPaths.p22bca280} fill="var(--fill-0, #FBFF00)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute left-0 size-[40.488px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 6" r="20.2442" />
        </svg>
      </div>
      <UilSmile />
    </div>
  );
}

function Group({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[3.61px] size-[34px] top-[3.29px]"} data-name="Group">
      <div className="absolute bottom-1/4 left-[30%] right-[30%] top-[35%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 159, 172, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6 13.6">
            <path d={svgPaths.p3299d600} fill="var(--fill-0, #FF9FAC)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 159, 172, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <path clipRule="evenodd" d={svgPaths.p359bf280} fill="var(--fill-0, #FF9FAC)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute left-0 size-[40.488px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 6" r="20.2442" />
        </svg>
      </div>
      <Group />
    </div>
  );
}

function OcticonSmileyNeutral({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[3.44px] overflow-clip size-[34px] top-[3.29px]"} data-name="octicon:smiley-neutral-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <path d={svgPaths.p3c678100} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute left-0 size-[40.488px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 6" r="20.2442" />
        </svg>
      </div>
      <OcticonSmileyNeutral />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Group">
          <path d={svgPaths.p396bb540} fill="var(--fill-0, #67FFCC)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3fab8ff0} fill="var(--fill-0, #67FFCC)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgSmileSad() {
  return (
    <div className="absolute left-[2.28px] overflow-clip size-[36px] top-[2.29px]" data-name="gg:smile-sad">
      <Group1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute left-0 size-[40.488px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 6" r="20.2442" />
        </svg>
      </div>
      <GgSmileSad />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[8.676px] items-start relative shrink-0 w-[335.476px]" data-name="表情サークル">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function DaysOfTheMonth() {
  return <div className="content-stretch flex items-center justify-center rounded-[24.67px] shrink-0 w-[40.488px]" data-name=".Days of the month" />;
}

function DaysOfTheMonth1() {
  return <div className="content-stretch flex h-[40.488px] items-center justify-center rounded-[24.67px] shrink-0" data-name=".Days of the month" />;
}

function DaysOfTheMonth2() {
  return <div className="content-stretch flex items-center justify-center rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month" />;
}

function DaysOfTheMonth3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">1</p>
    </div>
  );
}

function DaysOfTheMonth4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">2</p>
    </div>
  );
}

function DaysOfTheMonth5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">3</p>
    </div>
  );
}

function DaysOfTheMonth6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">4</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex gap-[8.676px] h-[20px] items-center relative rounded-[24.67px] shrink-0 w-full" data-name="日付">
      <DaysOfTheMonth />
      <DaysOfTheMonth1 />
      <DaysOfTheMonth2 />
      <DaysOfTheMonth3 />
      <DaysOfTheMonth4 />
      <DaysOfTheMonth5 />
      <DaysOfTheMonth6 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col h-[71px] items-start relative shrink-0 w-[341px]" data-name="１週間">
      <Component2 />
      <Component3 />
    </div>
  );
}

function PhSmileyXEyes({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[2.26px] overflow-clip size-[37px] top-[2.29px]"} data-name="ph:smiley-x-eyes">
      <div className="absolute inset-[4.17%]" data-name="Vector">
        <div className="absolute inset-[-0.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.4167 34.4167">
            <path d={svgPaths.p2e2bd600} fill="var(--fill-0, #2897FF)" id="Vector" stroke="var(--stroke-0, #2897FF)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute left-0 size-[42px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <circle cx="21" cy="21" fill="var(--fill-0, #71727A)" id="Ellipse 1" r="21" />
        </svg>
      </div>
      <PhSmileyXEyes />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 109">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 7" r="20.2442" />
          <g clipPath="url(#clip0_1_2941)" id="octicon:smiley-neutral-16">
            <path d={svgPaths.p387e1780} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2941">
            <rect fill="white" height="34" transform="translate(3.09912 3.28833)" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 110">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 2" r="20.2442" />
          <g clipPath="url(#clip0_1_3004)" id="octicon:smiley-neutral-16">
            <path d={svgPaths.p3689bc00} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_3004">
            <rect fill="white" height="34" transform="translate(2.93457 3.28833)" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 107">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 3" r="20.2442" />
          <g id="uil:smile">
            <path d={svgPaths.p2da9e3c0} fill="var(--fill-0, #FBFF00)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 111">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 4" r="20.2442" />
          <g id="Group">
            <path d={svgPaths.p2aa02b00} fill="var(--fill-0, #FF9FAC)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p10fa9680} fill="var(--fill-0, #FF9FAC)" fillRule="evenodd" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 112">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 5" r="20.2442" />
          <g clipPath="url(#clip0_1_2962)" id="octicon:smiley-neutral-16">
            <path d={svgPaths.p1535e820} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2962">
            <rect fill="white" height="34" transform="translate(3.44104 3.28833)" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Group">
          <path d={svgPaths.p396bb540} fill="var(--fill-0, #67FFCC)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3fab8ff0} fill="var(--fill-0, #67FFCC)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgSmileSad1({ className }: { className?: string }) {
  return (
    <div className={className || "absolute left-[2.28px] overflow-clip size-[36px] top-[2.29px]"} data-name="gg:smile-sad">
      <Group2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute left-0 size-[40.488px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 6" r="20.2442" />
        </svg>
      </div>
      <GgSmileSad1 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex gap-[8.676px] items-start relative shrink-0 w-[335.476px]" data-name="表情サークル">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function DaysOfTheMonth7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">5</p>
    </div>
  );
}

function DaysOfTheMonth8() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">6</p>
    </div>
  );
}

function DaysOfTheMonth9() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">7</p>
    </div>
  );
}

function DaysOfTheMonth10() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">8</p>
    </div>
  );
}

function DaysOfTheMonth11() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">9</p>
    </div>
  );
}

function DaysOfTheMonth12() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">10</p>
    </div>
  );
}

function DaysOfTheMonth13() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">11</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex gap-[9px] h-[20px] items-center relative rounded-[24.67px] shrink-0 w-[341px]" data-name="日付">
      <DaysOfTheMonth7 />
      <DaysOfTheMonth8 />
      <DaysOfTheMonth9 />
      <DaysOfTheMonth10 />
      <DaysOfTheMonth11 />
      <DaysOfTheMonth12 />
      <DaysOfTheMonth13 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col h-[71px] items-start relative shrink-0 w-[341px]" data-name="１週間">
      <Component5 />
      <Component6 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute inset-[0_-3.73%_-3.73%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <g id="Frame 108">
            <circle cx="21" cy="21" fill="var(--fill-0, #71727A)" id="Ellipse 1" r="21" />
            <g id="ph:smiley-x-eyes">
              <path d={svgPaths.p206a400} fill="var(--fill-0, #2897FF)" id="Vector" stroke="var(--stroke-0, #2897FF)" strokeWidth="0.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 109">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 7" r="20.2442" />
          <g clipPath="url(#clip0_1_2941)" id="octicon:smiley-neutral-16">
            <path d={svgPaths.p387e1780} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2941">
            <rect fill="white" height="34" transform="translate(3.09912 3.28833)" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 110">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 2" r="20.2442" />
          <g clipPath="url(#clip0_1_3004)" id="octicon:smiley-neutral-16">
            <path d={svgPaths.p3689bc00} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_3004">
            <rect fill="white" height="34" transform="translate(2.93457 3.28833)" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 107">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 3" r="20.2442" />
          <g id="uil:smile">
            <path d={svgPaths.p2da9e3c0} fill="var(--fill-0, #FBFF00)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 111">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 4" r="20.2442" />
          <g id="Group">
            <path d={svgPaths.p2aa02b00} fill="var(--fill-0, #FF9FAC)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p10fa9680} fill="var(--fill-0, #FF9FAC)" fillRule="evenodd" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 112">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 5" r="20.2442" />
          <g clipPath="url(#clip0_1_2962)" id="octicon:smiley-neutral-16">
            <path d={svgPaths.p1535e820} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2962">
            <rect fill="white" height="34" transform="translate(3.44104 3.28833)" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Group">
          <path d={svgPaths.p396bb540} fill="var(--fill-0, #67FFCC)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3fab8ff0} fill="var(--fill-0, #67FFCC)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgSmileSad2() {
  return (
    <div className="absolute left-[2.28px] overflow-clip size-[36px] top-[2.29px]" data-name="gg:smile-sad">
      <Group3 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute left-0 size-[40.488px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 6" r="20.2442" />
        </svg>
      </div>
      <GgSmileSad2 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex gap-[8.676px] items-start relative shrink-0 w-[335.476px]" data-name="表情サークル">
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function DaysOfTheMonth14() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">12</p>
    </div>
  );
}

function DaysOfTheMonth15() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">13</p>
    </div>
  );
}

function DaysOfTheMonth16() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">14</p>
    </div>
  );
}

function DaysOfTheMonth17() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">15</p>
    </div>
  );
}

function DaysOfTheMonth18() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">16</p>
    </div>
  );
}

function DaysOfTheMonth19() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">17</p>
    </div>
  );
}

function DaysOfTheMonth20() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">18</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex gap-[9px] h-[20px] items-center relative rounded-[24.67px] shrink-0 w-[341px]" data-name="日付">
      <DaysOfTheMonth14 />
      <DaysOfTheMonth15 />
      <DaysOfTheMonth16 />
      <DaysOfTheMonth17 />
      <DaysOfTheMonth18 />
      <DaysOfTheMonth19 />
      <DaysOfTheMonth20 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col h-[71px] items-start relative shrink-0 w-[341px]" data-name="１週間">
      <Component8 />
      <Component9 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute inset-[0_-3.73%_-3.73%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <g id="Frame 108">
            <circle cx="21" cy="21" fill="var(--fill-0, #71727A)" id="Ellipse 1" r="21" />
            <g id="ph:smiley-x-eyes">
              <path d={svgPaths.p206a400} fill="var(--fill-0, #2897FF)" id="Vector" stroke="var(--stroke-0, #2897FF)" strokeWidth="0.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 109">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 7" r="20.2442" />
          <g clipPath="url(#clip0_1_2941)" id="octicon:smiley-neutral-16">
            <path d={svgPaths.p387e1780} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2941">
            <rect fill="white" height="34" transform="translate(3.09912 3.28833)" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 110">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 2" r="20.2442" />
          <g clipPath="url(#clip0_1_5440)" id="octicon:smiley-neutral-16">
            <path d={svgPaths.p3689bc00} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_5440">
            <rect fill="white" height="34" transform="translate(2.93457 3.28833)" width="34" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 107">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 3" r="20.2442" />
          <g id="uil:smile">
            <path d={svgPaths.p2da9e3c0} fill="var(--fill-0, #FBFF00)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 111">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 4" r="20.2442" />
          <g id="Group">
            <path d={svgPaths.p2aa02b00} fill="var(--fill-0, #FF9FAC)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p10fa9680} fill="var(--fill-0, #FF9FAC)" fillRule="evenodd" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 112">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 5" r="20.2442" />
          <g clipPath="url(#clip0_1_2962)" id="octicon:smiley-neutral-16">
            <path d={svgPaths.p1535e820} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2962">
            <rect fill="white" height="34" transform="translate(3.44104 3.28833)" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute left-[-2.72px] size-[46px] top-[-2.71px]" data-name="Today">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <circle cx="23" cy="23" fill="var(--fill-0, #006FFD)" id="Today" r="23" />
        </svg>
      </div>
      <div className="absolute left-0 size-[40.488px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 6" r="20.2442" />
        </svg>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex gap-[8.676px] items-start relative shrink-0 w-[335.476px]" data-name="表情サークル">
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function DaysOfTheMonth21() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">19</p>
    </div>
  );
}

function DaysOfTheMonth22() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">20</p>
    </div>
  );
}

function DaysOfTheMonth23() {
  return (
    <button className="content-stretch cursor-pointer flex h-[40px] items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">21</p>
    </button>
  );
}

function DaysOfTheMonth24() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">22</p>
    </div>
  );
}

function DaysOfTheMonth25() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">23</p>
    </div>
  );
}

function DaysOfTheMonth26() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">24</p>
    </div>
  );
}

function DaysOfTheMonth27() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#006ffd] text-[14.802px] text-center">25</p>
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex gap-[9px] h-[20px] items-center relative rounded-[24.67px] shrink-0 w-[341px]" data-name="日付">
      <DaysOfTheMonth21 />
      <DaysOfTheMonth22 />
      <DaysOfTheMonth23 />
      <DaysOfTheMonth24 />
      <DaysOfTheMonth25 />
      <DaysOfTheMonth26 />
      <DaysOfTheMonth27 />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col h-[71px] items-start relative shrink-0 w-[341px]" data-name="１週間">
      <Component11 />
      <Component12 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <div className="absolute inset-[0_-3.73%_-3.73%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
          <g id="Frame 108">
            <circle cx="21" cy="21" fill="var(--fill-0, #71727A)" id="Ellipse 1" r="21" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 109">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 7" r="20.2442" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 110">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 2" r="20.2442" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 107">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 3" r="20.2442" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 111">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 4" r="20.2442" />
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative shrink-0 size-[40.488px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.4884 40.4884">
        <g id="Frame 112">
          <circle cx="20.2442" cy="20.2442" fill="var(--fill-0, #71727A)" id="Ellipse 5" r="20.2442" />
        </g>
      </svg>
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex gap-[8.676px] items-start relative shrink-0 w-[335.476px]" data-name="表情サークル">
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function DaysOfTheMonth28() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">26</p>
    </div>
  );
}

function DaysOfTheMonth29() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">27</p>
    </div>
  );
}

function DaysOfTheMonth30() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[24.67px] shrink-0 w-[40.09px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f3036] text-[14.802px] text-center">28</p>
    </div>
  );
}

function DaysOfTheMonth31() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">29</p>
    </div>
  );
}

function DaysOfTheMonth32() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">30</p>
    </div>
  );
}

function DaysOfTheMonth33() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#494a50] text-[14.802px] text-center">31</p>
    </div>
  );
}

function DaysOfTheMonth34() {
  return <div className="content-stretch flex items-center justify-center rounded-[24.67px] shrink-0 size-[40.488px]" data-name=".Days of the month" />;
}

function Component15() {
  return (
    <div className="content-stretch flex gap-[9px] h-[20px] items-center relative rounded-[24.67px] shrink-0 w-[341px]" data-name="日付">
      <DaysOfTheMonth28 />
      <DaysOfTheMonth29 />
      <DaysOfTheMonth30 />
      <DaysOfTheMonth31 />
      <DaysOfTheMonth32 />
      <DaysOfTheMonth33 />
      <DaysOfTheMonth34 />
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col h-[71px] items-start relative shrink-0 w-[341px]" data-name="１週間">
      <Component14 />
      <Component15 />
    </div>
  );
}

function Days() {
  return (
    <div className="content-stretch flex flex-col h-[355px] items-start relative shrink-0 w-[342px]" data-name="Days">
      <Component1 />
      <Component4 />
      <Component7 />
      <Component10 />
      <Component13 />
    </div>
  );
}

function MonthlyCalendar() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[11.102px] items-start left-0 p-[19.736px] rounded-[14.802px] top-[80px] w-[375px]" data-name="Monthly Calendar">
      <Header />
      <Days />
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
    <div className="bg-white relative size-full" data-name="ダイアログ">
      <TabBar />
      <NavBar />
      <MonthlyCalendar />
      <IOsStatusBar />
    </div>
  );
}
import svgPaths from "./svg-2rvlrmqc1w";

function Title() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[110px] items-start left-0 not-italic pb-[24px] pt-[25px] px-[32px] text-center top-[107px] w-[375px]" data-name="Title">
      <p className="css-4hzbpn font-['Inter:Extra_Bold','Noto_Sans_JP:Black',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1f2024] text-[24px] tracking-[0.24px] w-full">今日は何問答えれますか？</p>
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#71727a] text-[14px] w-full">今日は一つだけ、でも大丈夫。</p>
    </div>
  );
}

function ArrowLeft() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[20px]" data-name="Arrow Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Arrow Left">
          <mask height="20" id="mask0_1_2712" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="4" y="0">
            <path clipRule="evenodd" d={svgPaths.p16eaa040} fill="var(--fill-0, #006FFD)" fillRule="evenodd" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2712)">
            <rect fill="var(--fill-0, #006FFD)" height="19.9995" id="Fill" width="19.9992" x="0.000406885" y="-0.00137326" />
          </g>
        </g>
      </svg>
    </button>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-[22px] top-[73px] w-[302px]">
      <ArrowLeft />
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#71727a] text-[14px] text-center w-[311px]">2026年 1月 25日 のインタビュー</p>
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
    <div className="absolute backdrop-blur-[20px] h-[44px] left-0 right-0 top-0" data-name="iOS / Status Bar">
      <Action />
      <Container />
    </div>
  );
}

function Plan1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative" data-name="Plan">
      <p className="css-4hzbpn font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f2024] text-[14px] w-full">１問</p>
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#006ffd] text-[10px] tracking-[0.15px] w-full">手軽に今日を「ちょっと」良い日に</p>
    </div>
  );
}

function Price() {
  return <div className="h-[19px] shrink-0 w-[64px]" data-name="Price" />;
}

function Plan() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Plan">
      <Plan1 />
      <Price />
    </div>
  );
}

function Option() {
  return (
    <div className="bg-[#eaf2ff] content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shrink-0 w-[327px]" data-name="Option 1">
      <Plan />
    </div>
  );
}

function Plan3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative" data-name="Plan">
      <p className="css-4hzbpn font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f2024] text-[14px] w-full">２問</p>
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#006ffd] text-[10px] tracking-[0.15px] w-full">明日のことも「もう少し」考えてみる</p>
    </div>
  );
}

function Plan2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Plan">
      <Plan3 />
    </div>
  );
}

function Option1() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shrink-0 w-[327px]" data-name="Option 2">
      <div aria-hidden="true" className="absolute border-[#d4d6dd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Plan2 />
    </div>
  );
}

function Plan5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative" data-name="Plan">
      <p className="css-4hzbpn font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1f2024] text-[14px] w-full">３問</p>
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#006ffd] text-[10px] tracking-[0.15px] w-full">自分のことを「さらに」知ってみる</p>
    </div>
  );
}

function Plan4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Plan">
      <Plan5 />
    </div>
  );
}

function Option2() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shrink-0 w-[327px]" data-name="Option 3">
      <div aria-hidden="true" className="absolute border-[#d4d6dd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Plan4 />
    </div>
  );
}

function Plans1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Plans">
      <Option />
      <Option1 />
      <Option2 />
    </div>
  );
}

function StarFilled() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Star Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_2726)" id="Star Filled">
          <mask height="10" id="mask0_1_2726" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="11" x="-1" y="0">
            <path d={svgPaths.p51ba440} fill="var(--fill-0, #006FFD)" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2726)">
            <rect fill="var(--fill-0, #006FFD)" height="10" id="Fill" width="10" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2726">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Plan7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Plan">
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#71727a] text-[12px] tracking-[0.12px] w-full">質より継続が何より大切。</p>
    </div>
  );
}

function Plan6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Plan">
      <StarFilled />
      <Plan7 />
    </div>
  );
}

function StarFilled1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Star Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_2726)" id="Star Filled">
          <mask height="10" id="mask0_1_2726" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="11" x="-1" y="0">
            <path d={svgPaths.p51ba440} fill="var(--fill-0, #006FFD)" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2726)">
            <rect fill="var(--fill-0, #006FFD)" height="10" id="Fill" width="10" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2726">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Plan9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Plan">
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#71727a] text-[12px] tracking-[0.12px] w-full">毎日歩き続けることが、貴方を知る旅のコツ。</p>
    </div>
  );
}

function Plan8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Plan">
      <StarFilled1 />
      <Plan9 />
    </div>
  );
}

function StarFilled2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Star Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_2726)" id="Star Filled">
          <mask height="10" id="mask0_1_2726" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="11" x="-1" y="0">
            <path d={svgPaths.p51ba440} fill="var(--fill-0, #006FFD)" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2726)">
            <rect fill="var(--fill-0, #006FFD)" height="10" id="Fill" width="10" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2726">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Plan11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Plan">
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#71727a] text-[12px] tracking-[0.12px] w-[272px]">忙しい貴方だからこそ、サクッとやっちゃおう。</p>
    </div>
  );
}

function Plan10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Plan">
      <StarFilled2 />
      <Plan11 />
    </div>
  );
}

function Benefits() {
  return (
    <div className="bg-[#f8f9fe] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[332px]" data-name="Benefits">
      <p className="css-4hzbpn font-['Inter:Extra_Bold','Noto_Sans_JP:Black',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#71727a] text-[16px] tracking-[0.08px] w-[277px]">Q. 本当に１問「だけ」でいいの？</p>
      <Plan6 />
      <Plan8 />
      <Plan10 />
    </div>
  );
}

function Plans() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 p-[24px] top-[208px] w-[375px]" data-name="Plans">
      <Plans1 />
      <Benefits />
    </div>
  );
}

function StarFilled3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-name="Star Filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_2716)" id="Star Filled">
          <mask height="10" id="mask0_1_2716" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="11" x="-1" y="0">
            <path d={svgPaths.p51ba440} fill="var(--fill-0, #006FFD)" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2716)">
            <rect fill="var(--fill-0, white)" height="10" id="Fill" width="10" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2716">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Recommended() {
  return (
    <div className="absolute bg-[#006ffd] left-[335px] overflow-clip rounded-[40px] size-[24px] top-[220px]" data-name="Recommended">
      <StarFilled3 />
    </div>
  );
}

function Options() {
  return (
    <div className="absolute contents left-0 top-[208px]" data-name="Options">
      <Plans />
      <Recommended />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="質問数セレクト">
      <Title />
      <Frame />
      <IOsStatusBar />
      <Options />
    </div>
  );
}
import svgPaths from "./svg-kgs0ff86va";

function ButtonPrimary() {
  return (
    <div className="bg-[#006ffd] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button Primary">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative size-full">
          <p className="css-ew64yg font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] text-white">これでOK！</p>
        </div>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center left-0 p-[24px] right-0" data-name="Action">
      <ButtonPrimary />
    </div>
  );
}

function Action1() {
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
      <Action1 />
      <Container />
    </div>
  );
}

function ArrowLeft() {
  return (
    <button className="absolute block cursor-pointer left-[23px] size-[20px] top-[19px]" data-name="Arrow Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Arrow Left">
          <mask height="20" id="mask0_1_2663" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="4" y="0">
            <path clipRule="evenodd" d={svgPaths.p16eaa040} fill="var(--fill-0, #006FFD)" fillRule="evenodd" id="Shape" />
          </mask>
          <g mask="url(#mask0_1_2663)">
            <rect fill="var(--fill-0, #006FFD)" height="19.9995" id="Fill" width="19.9992" x="0.000406885" y="-0.00137326" />
          </g>
        </g>
      </svg>
    </button>
  );
}

function NavBar() {
  return (
    <div className="bg-[#eaf2ff] h-[57px] overflow-clip relative shrink-0 w-full" data-name="Nav Bar">
      <ArrowLeft />
      <p className="-translate-x-1/2 absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#1f2024] text-[14px] text-center top-[calc(50%-8px)]">今日の質問 ３問挑戦！</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[57px] items-center left-0 top-[44px] w-[375px]" data-name="質問数">
      <NavBar />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white content-stretch flex h-[35px] items-center justify-center relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px not-italic relative text-[#1f2024] text-[14px] text-center">１問目</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col h-[89px] items-center relative shrink-0 w-[327px]" data-name="質問タイトル">
      <Frame5 />
      <div className="font-['Inter:Extra_Bold','Noto_Sans_JP:Black',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#1f2024] text-[18px] text-center tracking-[0.09px] w-full">
        <p className="css-4hzbpn mb-0">今日まじでこれ頑張って</p>
        <p className="css-4hzbpn">偉いわーってこと教えて</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8f9098] text-[14px]">
        <p className="css-ew64yg leading-[20px]">一言でズバッとまとめると？（必須）</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Content">
      <Text />
    </div>
  );
}

function Field() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <Content />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5c6cc] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#8f9098] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">さらに理由など詳しく書くと素敵です（任意）</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Content">
      <Text1 />
    </div>
  );
}

function Field1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Field">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <Content1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5c6cc] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TextArea() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[262px] items-start relative shrink-0 w-full" data-name="Text Area">
      <Field1 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col h-[293px] items-start relative shrink-0 w-[327px]" data-name="質問入力フレーム">
      <TextArea />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="１問目">
      <Component3 />
      <Field />
      <Component4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white content-stretch flex h-[35px] items-center justify-center relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold h-[21px] leading-[normal] min-h-px min-w-px not-italic relative text-[#1f2024] text-[14px] text-center">２問目</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col h-[89px] items-center relative shrink-0 w-[327px]" data-name="質問タイトル">
      <Frame7 />
      <div className="font-['Inter:Extra_Bold','Noto_Sans_JP:Black',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#1f2024] text-[18px] text-center tracking-[0.09px] w-full">
        <p className="css-4hzbpn mb-0">明日を頑張るための</p>
        <p className="css-4hzbpn">ご褒美を考えてみて！</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8f9098] text-[14px]">
        <p className="css-ew64yg leading-[20px]">一言でズバッとまとめると？（必須）</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Content">
      <Text2 />
    </div>
  );
}

function Field2() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <Content2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5c6cc] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#8f9098] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">さらに理由など詳しく書くと素敵です（任意）</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Content">
      <Text3 />
    </div>
  );
}

function Field3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Field">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <Content3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5c6cc] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TextArea1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[262px] items-start relative shrink-0 w-full" data-name="Text Area">
      <Field3 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col h-[293px] items-start relative shrink-0 w-[327px]" data-name="質問入力フレーム">
      <TextArea1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Component5 />
      <Field2 />
      <Component6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex h-[35px] items-center justify-center relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold h-[21px] leading-[normal] min-h-px min-w-px not-italic relative text-[#1f2024] text-[14px] text-center">３問目</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col h-[89px] items-center relative shrink-0 w-[327px]" data-name="質問タイトル">
      <Frame8 />
      <p className="css-4hzbpn font-['Inter:Extra_Bold','Noto_Sans_JP:Black',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#1f2024] text-[18px] text-center tracking-[0.09px] w-full">今持ってる小さな悩みは？</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8f9098] text-[14px]">
        <p className="css-ew64yg leading-[20px]">一言でズバッとまとめると？（必須）</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Content">
      <Text4 />
    </div>
  );
}

function Field4() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <Content4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5c6cc] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-px items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#8f9098] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">さらに理由など詳しく書くと素敵です（任意）</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Content">
      <Text5 />
    </div>
  );
}

function Field5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Field">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <Content5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c5c6cc] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TextArea2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[262px] items-start relative shrink-0 w-full" data-name="Text Area">
      <Field5 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col h-[293px] items-start relative shrink-0 w-[327px]" data-name="質問入力フレーム">
      <TextArea2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Component7 />
      <Field4 />
      <Component8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#71727a] text-[14px] text-center w-full">今の貴方の心はどんな顔？</p>
    </div>
  );
}

function PhSmileyXEyes() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ph:smiley-x-eyes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2694)" id="ph:smiley-x-eyes">
          <path d={svgPaths.p1515a780} fill="var(--fill-0, #71727A)" id="Vector" stroke="var(--stroke-0, #71727A)" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_2694">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group">
          <path d={svgPaths.p2c9c7480} fill="var(--fill-0, #71727A)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p10299800} fill="var(--fill-0, #71727A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgSmileSad() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="gg:smile-sad">
      <Group />
    </div>
  );
}

function OcticonSmileyNeutral() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="octicon:smiley-neutral-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_1_2707)" id="octicon:smiley-neutral-16">
          <path d={svgPaths.p2d536680} fill="var(--fill-0, #71727A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2707">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UilSmile() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="uil:smile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="uil:smile">
          <path d={svgPaths.p25de5280} fill="var(--fill-0, #71727A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[4.17%_8.33%_4.17%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group">
          <path d={svgPaths.p21114000} fill="var(--fill-0, #71727A)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p10299800} fill="var(--fill-0, #71727A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function GgSmileMouthOpen() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="gg:smile-mouth-open">
      <Group1 />
    </div>
  );
}

function FaceRating() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Face Rating">
      <PhSmileyXEyes />
      <GgSmileSad />
      <OcticonSmileyNeutral />
      <UilSmile />
      <GgSmileMouthOpen />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame1 />
      <FaceRating />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[1577px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[45px] items-start pb-[24px] pt-[11px] px-[24px] relative size-full">
        <Component2 />
        <Frame />
        <Frame2 />
        <Frame4 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1577px] items-start left-0 top-[101px] w-[375px]">
      <Frame3 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="今日の質問３">
      <Action />
      <IOsStatusBar />
      <Component1 />
      <Frame6 />
    </div>
  );
}
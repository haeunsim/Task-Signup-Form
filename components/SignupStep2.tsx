"use client";

interface SignupStep2Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function SignupStep2({ onNext, onPrev }: SignupStep2Props) {
  return (
    <div className="space-y-6">
      <div>
        <label>생년월일</label>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <input
              className="placeholder-on"
              type="number"
              placeholder="YYYY"
            />
          </div>
          <div>
            <input className="placeholder-on" type="number" placeholder="MM" />
          </div>
          <div>
            <input className="placeholder-on" type="number" placeholder="DD" />
          </div>
        </div>
      </div>

      <div>
        <label>성별</label>
        <div className="flex gap-10">
          <div className="flex items-center space-x-2">
            <input type="radio" id="male" />
            <label htmlFor="male">남성</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" id="female" />
            <label htmlFor="female">여성</label>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="nickname">닉네임</label>
        <input id="nickname" placeholder="닉네임을 입력하세요" />
      </div>

      <div className="flex gap-3">
        <button onClick={onPrev} className="flex-1 btn-2">
          이전 단계
        </button>
        <button onClick={onNext} className="flex-1 btn-1">
          다음 단계
        </button>
      </div>
    </div>
  );
}

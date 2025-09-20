"use client";

interface SignupStep1Props {
  onNext: () => void;
}

export default function SignupStep1({ onNext }: SignupStep1Props) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="username">아이디</label>
        <input id="username" placeholder="아이디를 입력하세요" />
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input id="confirmPassword" type="password" />
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" placeholder="이메일을 입력하세요" />
      </div>

      <div>
        <label htmlFor="phone">전화번호</label>
        <input
          className="placeholder-on"
          id="phone"
          placeholder="010-1234-5678"
        />
      </div>

      <button onClick={onNext} className="w-full btn-1">
        다음 단계
      </button>
    </div>
  );
}

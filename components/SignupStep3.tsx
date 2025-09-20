"use client";

import Link from "next/link";

interface SignupStep3Props {
  onPrev: () => void;
}

export default function SignupStep3({ onPrev }: SignupStep3Props) {
  return (
    <div className="flex flex-col gap-8">
      <div>3단계 : SNS 소설 계정 연결</div>

      <div className="flex gap-3">
        <button onClick={onPrev} className="flex-1 btn-2">
          이전 단계
        </button>
        <button className="flex-1 btn-1">
          <Link href="/main">회원가입 완료</Link>
        </button>
      </div>
    </div>
  );
}

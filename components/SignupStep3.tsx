"use client";

import Link from "next/link";
import { useState } from "react";

interface SignupStep3Props {
  onPrev: () => void;
  onSubmit: () => void;
}

export default function SignupStep3({ onPrev, onSubmit }: SignupStep3Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    setIsModalOpen(true);
    onSubmit();
  };

  return (
    <div className="flex flex-col gap-8">
      <div>3단계 : SNS 소설 계정 연결</div>

      <div className="flex gap-3">
        <button onClick={onPrev} className="flex-1 btn-2">
          이전 단계
        </button>

        <button onClick={handleSubmit} className="flex-1 btn-1">
          회원가입 완료
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>회원가입이 완료되었습니다!</h2>

            <button className="btn-4">
              <Link href="/auth/login">로그인 페이지로 이동</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

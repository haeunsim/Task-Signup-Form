"use client";

import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="layout">
      <div className="content">
        <div className="layout-flex">
          <h2 className="text-2xl font-bold">로그인</h2>

          <LoginForm />

          <button className="btn-2">
            <Link href="/auth/signup">회원가입</Link>
          </button>

          <h2 className="mt-5 text-xl font-bold">간편 로그인</h2>
          <button className="btn-3">카카오 시작하기</button>
          <button className="btn-3">Apple로 시작하기</button>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div>
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            placeholder="아이디"
            autoComplete="off"
            name="username"
          />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            autoComplete="new-password"
            name="password"
          />
        </div>
      </div>

      {/* 빈 칸이 있거나, input error라면 버튼 비활성화 */}
      <button className="btn-1">로그인</button>
    </div>
  );
}

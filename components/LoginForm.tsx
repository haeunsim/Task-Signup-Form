"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/storage";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    const success = login(formData.username, formData.password);
    if (success) {
      router.push("/main");
    } else {
      setError("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div>
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            placeholder="아이디"
            autoComplete="off"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호"
            autoComplete="new-password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>

      <button type="submit" className="btn-1">
        로그인
      </button>
    </form>
  );
}

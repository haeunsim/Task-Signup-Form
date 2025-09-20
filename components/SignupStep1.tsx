"use client";

import { useState } from "react";

interface SignupStep1Props {
  data: {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    phone: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
}

export default function SignupStep1({
  onNext,
  data,
  handleChange,
}: SignupStep1Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!data.username.trim()) {
      newErrors.username = "아이디를 입력해주세요.";
    }

    if (!data.password) {
      newErrors.password = "비밀번호를 입력하세요.";
    } else if (!passwordRegex.test(data.password)) {
      newErrors.password =
        "영문, 숫자, 특수문자를 조합해 8~20자로 입력해주세요.";
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "비밀번호 확인을 입력하세요.";
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    if (!data.email) {
      newErrors.email = "이메일을 입력하세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (!data.phone) {
      newErrors.phone = "전화번호를 입력하세요.";
    } else if (!/^010-\d{4}-\d{4}$/.test(data.phone)) {
      newErrors.phone = "전화번호 형식은 010-1234-5678 이어야 합니다.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/;

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="username">아이디</label>
        <input
          id="username"
          placeholder="아이디를 입력하세요"
          value={data.username}
          onChange={handleChange}
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={data.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          id="confirmPassword"
          type="password"
          value={data.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력하세요"
          value={data.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone">전화번호</label>
        <input
          className="placeholder-on"
          id="phone"
          placeholder="010-1234-5678"
          value={data.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <button onClick={handleNext} className="w-full btn-1">
        다음 단계
      </button>
    </div>
  );
}

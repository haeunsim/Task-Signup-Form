"use client";

import { useEffect, useState } from "react";

interface SignupStep2Props {
  onNext: () => void;
  onPrev: () => void;
  data: {
    birth: string;
    gender: string;
    nickname: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function SignupStep2({
  onNext,
  onPrev,
  data,
  handleChange,
}: SignupStep2Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (data.birth) {
      const [y, m, d] = data.birth.split("-");
      setYear(y || "");
      setMonth(m || "");
      setDay(d || "");
    }
  }, [data.birth]);

  useEffect(() => {
    if (year && month && day) {
      const formatted = `${year}-${String(Number(month)).padStart(
        2,
        "0"
      )}-${String(Number(day)).padStart(2, "0")}`;
      handleChange({
        target: { id: "birth", value: formatted },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [year, month, day]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!year || !month || !day) {
      newErrors.birth = "생년월일을 정확히 입력해주세요.";
    }

    if (!data.nickname) {
      newErrors.nickname = "닉네임을 입력하세요.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label>생년월일</label>
        <div className="grid grid-cols-3 gap-3">
          <input
            type="number"
            placeholder="YYYY"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="placeholder-on"
          />
          <input
            type="number"
            placeholder="MM"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="placeholder-on"
          />
          <input
            type="number"
            placeholder="DD"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="placeholder-on"
          />
        </div>
        {errors.birth && <p className="text-red-500 text-sm">{errors.birth}</p>}
      </div>

      <label htmlFor="gender">성별</label>
      <select
        id="gender"
        name="gender"
        value={data.gender}
        onChange={handleChange}
        className="border rounded p-2"
      >
        <option value="male">남성</option>
        <option value="female">여성</option>
      </select>

      <div>
        <label htmlFor="nickname">닉네임</label>
        <input
          id="nickname"
          placeholder="닉네임을 입력하세요"
          value={data.nickname}
          onChange={handleChange}
        />
        {errors.nickname && (
          <p className="text-red-500 text-sm">{errors.nickname}</p>
        )}
      </div>

      <div className="flex gap-3">
        <button onClick={onPrev} className="flex-1 btn-2">
          이전 단계
        </button>
        <button onClick={handleNext} className="flex-1 btn-1">
          다음 단계
        </button>
      </div>
    </div>
  );
}

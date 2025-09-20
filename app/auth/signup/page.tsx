"use client";

import { useState } from "react";
import SignupStep1 from "@/components/SignupStep1";
import SignupStep2 from "@/components/SignupStep2";
import SignupStep3 from "@/components/SignupStep3";
import { saveUser } from "@/lib/storage";

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    birth: "",
    gender: "male", // 기본값 설정
    nickname: "",
  });

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    saveUser(formData);
  };

  // 공통 handleChange
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="layout">
      <div className="content">
        <div className="layout-flex">
          <h2 className="text-2xl font-bold">회원가입</h2>

          <div className="flex items-center justify-center mb-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    currentStep >= step
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-15 h-0.5 mx-2 ${
                      currentStep > step ? "bg-black" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* 회원가입 3 Step. */}
          {/* 1단계 : 아이디, 비밀번호, 이메일, 전화번호 */}
          {/* 2단계 : 생년월일, 성별, 나머지 구성은 자유 */}
          {/* 3단계 : SNS 소설 계정 연결 항목 */}

          {currentStep === 1 && (
            <SignupStep1
              onNext={handleNext}
              data={formData}
              handleChange={handleChange}
            />
          )}

          {currentStep === 2 && (
            <SignupStep2
              onNext={handleNext}
              onPrev={handlePrev}
              data={formData}
              handleChange={handleChange}
            />
          )}

          {currentStep === 3 && (
            <SignupStep3 onPrev={handlePrev} onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}

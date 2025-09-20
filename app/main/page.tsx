import Link from "next/link";

export default function Main() {
  return (
    <div className="layout">
      <div className="flex flex-col items-center justify-center pt-60">
        <h4 className="text-6xl font-bold text-memoment">환영합니다. OOO님</h4>

        <button className="text-sm text-gray-500 mt-[100px]">
          <Link href="/auth/login">로그아웃</Link>
        </button>
      </div>
    </div>
  );
}

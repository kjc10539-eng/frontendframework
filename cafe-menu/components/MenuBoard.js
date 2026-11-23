'use client'
import { useState } from "react"
import MenuCard from "./MenuCard"

export default function MenuBoard({ menus = [] }) {
  const [keyword, setKeyword] = useState('');
  const filtered = menus.filter((menu) => menu.name.includes(keyword.trim()));

  return (
    <section>
      <input
        className="search"
        type="text"
        placeholder="메뉴 이름을 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <p>검색 결과 {filtered.length}개</p>

      {filtered.length === 0 ? (
        <p className="empty">"{keyword}"에 해당하는 메뉴가 없습니다.</p>
      ) : (
        <div className="menu-grid">
          {filtered.map((menu) => (
            <MenuCard key={menu.id} {...menu} />
          ))}
        </div>
      )}
    </section>
  );
}
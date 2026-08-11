/* ==========================================================================
   MEGABOX Official Interactive Script (main.js)
   Full Functionality Replica
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. 헤더 팝업 배너 닫기
  const closeBannerBtn = document.getElementById('closeBannerBtn');
  const popupBanner = document.getElementById('popupBanner');
  if (closeBannerBtn && popupBanner) {
    closeBannerBtn.addEventListener('click', () => {
      popupBanner.style.display = 'none';
    });
  }

  // 2. 사이트맵 레이어 모달 토글
  const btnToggleSitemap = document.getElementById('btnToggleSitemap');
  const btnCloseSitemap = document.getElementById('btnCloseSitemap');
  const layerSitemap = document.getElementById('layer_sitemap');

  if (btnToggleSitemap && layerSitemap) {
    btnToggleSitemap.addEventListener('click', (e) => {
      e.preventDefault();
      layerSitemap.classList.toggle('on');
      if (layerSearch) layerSearch.classList.remove('on');
    });
  }

  if (btnCloseSitemap && layerSitemap) {
    btnCloseSitemap.addEventListener('click', () => {
      layerSitemap.classList.remove('on');
    });
  }

  // 3. 검색 레이어 모달 토글
  const btnToggleSearch = document.getElementById('btnToggleSearch');
  const btnCloseSearch = document.getElementById('btnCloseSearch');
  const layerSearch = document.getElementById('layer_header_search');

  if (btnToggleSearch && layerSearch) {
    btnToggleSearch.addEventListener('click', (e) => {
      e.preventDefault();
      layerSearch.classList.toggle('on');
      if (layerSitemap) layerSitemap.classList.remove('on');
      const input = document.getElementById('headerSearchInput');
      if (input && layerSearch.classList.contains('on')) {
        setTimeout(() => input.focus(), 100);
      }
    });
  }

  if (btnCloseSearch && layerSearch) {
    btnCloseSearch.addEventListener('click', () => {
      layerSearch.classList.remove('on');
    });
  }

  // 4. 로그인 팝업 모달 토글 및 회원/비회원 탭 전환
  const btnHeaderLogin = document.getElementById('btnHeaderLogin');
  const layerLoginSelect = document.getElementById('layer_login_select');
  const btnCloseLogin = document.getElementById('btnCloseLogin');

  if (btnHeaderLogin && layerLoginSelect) {
    btnHeaderLogin.addEventListener('click', (e) => {
      e.preventDefault();
      layerLoginSelect.classList.add('on');
    });
  }

  if (btnCloseLogin && layerLoginSelect) {
    btnCloseLogin.addEventListener('click', () => {
      layerLoginSelect.classList.remove('on');
    });
  }

  // 로그인 탭 스위처 (회원 로그인 / 비회원 로그인)
  const loginTabItems = document.querySelectorAll('.login-tab-item');
  const loginTabConuts = document.querySelectorAll('.login-tab-cont');

  loginTabItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = tab.dataset.target;
      loginTabItems.forEach(t => t.classList.remove('on'));
      tab.classList.add('on');

      loginTabConuts.forEach(cont => {
        if (cont.id === targetId) {
          cont.style.display = 'block';
        } else {
          cont.style.display = 'none';
        }
      });
    });
  });

  // 5. 빠른 예매 모달 토글 & 인터랙티브 선택
  const quickBookingBtns = document.querySelectorAll('.quick-booking-btn, .btn-quick-reserve');
  const layerQuickBooking = document.getElementById('layer_quick_booking');
  const btnCloseQuickBooking = document.getElementById('btnCloseQuickBooking');

  quickBookingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (layerQuickBooking) {
        layerQuickBooking.classList.add('on');
      } else {
        alert('빠른 예매 페이지로 이동합니다.');
      }
    });
  });

  if (btnCloseQuickBooking && layerQuickBooking) {
    btnCloseQuickBooking.addEventListener('click', () => {
      layerQuickBooking.classList.remove('on');
    });
  }

  // 빠른예매 모달 리스트 항목 클릭
  const qbItems = document.querySelectorAll('.qb-item');
  qbItems.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.qb-item').forEach(i => i.classList.remove('selected'));
      }
      item.classList.add('selected');
    });
  });

  const btnConfirmBooking = document.getElementById('btnConfirmBooking');
  if (btnConfirmBooking) {
    btnConfirmBooking.addEventListener('click', () => {
      const selMovie = document.querySelector('.qb-col-movie .selected');
      const selTheater = document.querySelector('.qb-col-theater .selected');
      const selTime = document.querySelector('.qb-col-time .selected');

      if (!selMovie || !selTheater || !selTime) {
        alert('영화, 극장, 시간을 모두 선택해 주세요!');
      } else {
        alert(`[예매 선택 완료]\n· 영화: ${selMovie.textContent}\n· 극장: ${selTheater.textContent}\n· 시간: ${selTime.textContent}\n\n좌석 지정 및 결제 단계로 이동합니다.`);
        if (layerQuickBooking) layerQuickBooking.classList.remove('on');
      }
    });
  }

  // 6. 박스오피스 / 상영예정작 / 특별관 탭 전환
  const sortBtns = document.querySelectorAll('.tab-sorting button');
  sortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sortBtns.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
    });
  });

  // 7. 보고싶어(♡) 하트 클릭 수 카운터 및 아이콘 토글
  const likeBtns = document.querySelectorAll('.btn-like');
  likeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const heartIcon = btn.querySelector('.heart-icon');
      if (!heartIcon) return;

      if (heartIcon.textContent === '♡') {
        heartIcon.textContent = '❤️';
        btn.style.color = '#ff4d4f';
        btn.style.borderColor = '#ff4d4f';
      } else {
        heartIcon.textContent = '♡';
        btn.style.color = '#aaaaaa';
        btn.style.borderColor = '#363142';
      }
    });
  });

  // 8. 검색 버튼 제출 처리
  const btnSearchSubmit = document.getElementById('btnSearchSubmit');
  const movieNameInput = document.getElementById('movieName');
  if (btnSearchSubmit && movieNameInput) {
    btnSearchSubmit.addEventListener('click', () => {
      const val = movieNameInput.value.trim();
      if (!val) {
        alert('검색할 영화명을 입력해 주세요!');
      } else {
        alert(`'${val}' 검색 결과 페이지로 이동합니다.`);
      }
    });
  }

  // 9. 맨 위로 가기 (TOP 버튼)
  const btnGoTop = document.getElementById('btnGoTop');
  if (btnGoTop) {
    btnGoTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});

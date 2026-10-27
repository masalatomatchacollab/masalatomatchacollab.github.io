// Inside Instagram's (or Facebook's) in-app browser you're usually not logged in, so Follow and Join channel
// open Instagram's website instead of the app. Send visitors to their real browser:
//   Android: jump to Chrome automatically (intent link).
//   iPhone: show a banner with "Open in Safari" (x-safari-https works from iOS 17, and only on a tap).
(() => {
  const ua = navigator.userAgent || "";
  if (!/Instagram|FBAN|FBAV/i.test(ua)) return;
  const url = location.href;
  const android = /Android/i.test(ua);
  const ios = /iPhone|iPad|iPod/i.test(ua);

  if (android) {
    const target = url.replace(/^https?:\/\//, "");
    location.href = "intent://" + target + "#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=" + encodeURIComponent(url) + ";end";
    return;
  }

  const bar = document.createElement("div");
  bar.className = "inapp";
  bar.setAttribute("role", "note");
  const text = document.createElement("span");
  text.textContent = "Open in your browser so Follow and Join work";
  bar.append(text);
  if (ios) {
    const a = document.createElement("a");
    a.className = "inapp-btn";
    a.href = url.replace(/^https:\/\//, "x-safari-https://").replace(/^http:\/\//, "x-safari-http://");
    a.textContent = "Open in Safari";
    bar.append(a);
  }
  const hint = document.createElement("small");
  hint.textContent = "Or tap ••• at the top right → Open in external browser";
  bar.append(hint);
  const show = () => document.body.prepend(bar);
  document.body ? show() : document.addEventListener("DOMContentLoaded", show);
})();

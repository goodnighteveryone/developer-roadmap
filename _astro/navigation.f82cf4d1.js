import{a as n,T as i}from"./jwt.2bcbdb7f.js";window.fireEvent=e=>{const{action:t,category:o,label:c,value:l}=e;if(!window.gtag){console.warn("Missing GTAG - Analytics disabled");return}window.gtag("event",t,{event_category:o,event_label:c,value:l})};function a(e){e.classList.add("opacity-0","transition-opacity","duration-300"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0")})}function d(e="hide"){document.querySelectorAll("[data-auth-required]").forEach(t=>{e==="hide"?t.classList.add("hidden"):a(t)})}function s(e="hide"){document.querySelectorAll("[data-guest-required]").forEach(t=>{e==="hide"?t.classList.add("hidden"):a(t)})}function u(){const e=["/settings/update-profile","/settings/update-password"];d("hide"),s("show"),e.includes(window.location.pathname)&&(window.location.href="/")}function r(){const e=["/login","/signup","/verify-account","/verification-pending","/reset-password","/forgot-password"];s("hide"),d("show"),e.includes(window.location.pathname)&&(window.location.href="/")}function h(){n.get(i)?r():u()}window.setTimeout(()=>{h()},0);function w(){n.remove(i),window.location.reload()}function f(){document.addEventListener("click",e=>{const t=e.target,o={...t.dataset,...t.closest("button")?.dataset};o.logoutButton!==void 0?w():o.showMobileNav!==void 0?document.querySelector("[data-mobile-nav]")?.classList.remove("hidden"):o.closeMobileNav!==void 0&&document.querySelector("[data-mobile-nav]")?.classList.add("hidden")}),document.querySelector("[data-account-button]")?.addEventListener("click",e=>{e.stopPropagation(),document.querySelector("[data-account-dropdown]")?.classList.toggle("hidden")})}f();

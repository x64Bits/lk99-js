let xCoord = 0;
let yCoord = 0;
const body = document.querySelector("body");

const cursor =
  '* {cursor: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGhlaWdodD0iMWVtIiB3aWR0aD0iMWVtIiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7Ij4KCTxwYXRoIGQ9Ik04IDNINWExIDEgMCAwIDAtMSAxdjNoNVY0YTEgMSAwIDAgMC0xLTF6bTcgMXYzaDVWNGExIDEgMCAwIDAtMS0xaC0zYTEgMSAwIDAgMC0xIDF6bTAgMTBhMyAzIDAgMCAxLTYgMFY5SDR2NWE4IDggMCAwIDAgMTYgMFY5aC01djV6Ij4KCTwvcGF0aD4KPC9zdmc+Cg==") 24 24, auto !important}';

function addCursor() {
  const style = document.createElement("style");
  style.textContent = cursor;
  document.head.append(style);
}

function generateRandomNumber() {
  const randomDecimal = Math.random();

  const randomNumber = Math.floor(randomDecimal * (100 - 35 + 1)) + 25;

  return randomNumber;
}

function trackCursor(event) {
  const { clientX, clientY } = event;

  const rect = body.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;

  xCoord = x;
  yCoord = y;
}

document.body.addEventListener("mousemove", trackCursor);

// -- .- .. - . The Milky Way
function levitate(elements, track) {
  for (const element of elements) {
    const elementCenter = element.clientWidth / 2;
    const transform = track
      ? `translate(${
          xCoord - elementCenter
        }px, ${yCoord}px) rotate(${generateRandomNumber()}deg)`
      : `rotate(${generateRandomNumber()}deg)`;
    element.style.transition = "transform 250ms";
    element.style.transformOrigin = "center bottom";
    element.style.transform = transform;
  }
}

/**
 * Levitate your blocks
 * @constructor
 * @param {string} selector - This parameter imbues only specific elements with the power to levitate at will, the same parameter that you would pass to document.querySelector. ex. "nav > div:nth-child(2)"
 * @param {string} track - Turn your cursor into a powerful magnet that attracts things
 */
function lk99(selector = "body *", track) {
  const elements = document.querySelectorAll(selector);
  body.style.overflow = "hidden";

  if (track) {
    addCursor();
  }

  setInterval(() => levitate(elements, track), 850);
}

export default lk99;

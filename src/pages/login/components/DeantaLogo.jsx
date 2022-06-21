import { useState } from "react";

export function DeantaLogo() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = (e) => {
    e.preventDefault();

    setIsMouseOver(true);
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();

    setIsMouseOver(false);
  };

  return (
    <div className="deanta-logo">
      <a href="https://www.deanta.com/">
        {/* <img
              className="mb-3 inline-logo"
              src="assets/images/deanta-logo.svg"
              alt="Lanstad Beta"
            /> */}
        <svg
          width="171"
          height="41"
          viewBox="0 0 171 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseLeave(e)}
        >
          <g id="deanta-logo-svg">
            <g
              className={
                isMouseOver ? "deanta-logo-right-animated" : "deanta-logo-right"
              }
            >
              <g id="right_2">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M141.157 9.85667V14.9464C143.741 11.2456 147.895 8.84436 153.029 8.84436C156.263 8.84436 159.868 10.0698 161.618 13.0001H161.724V9.85667H170.525V39.4267H161.724V36.2299H161.618C160.027 39.2668 156.21 40.439 153.029 40.439C143.964 40.439 138.238 33.4061 138.238 24.615C138.238 21.6884 138.921 18.9333 140.168 16.5699H136.916V39.4267H128.115V16.5699H124.251C124.576 17.992 124.678 19.4887 124.678 20.9388V39.4267H115.877V23.283C115.877 19.9797 115.241 17.1559 111.265 17.1559C107.183 17.1559 106.228 19.8199 106.228 23.3363V39.4267H97.4277V24.5556L116.858 9.26448C118.506 9.69135 120.122 10.4279 121.285 11.4018C122.464 12.3859 123.252 13.6141 123.768 14.9643V9.85667H128.115V0H136.916V9.85667H141.157ZM161.724 24.615C161.724 28.8774 158.649 32.1807 154.355 32.1807C150.22 32.1807 147.039 28.8241 147.039 24.7216C147.039 20.5125 150.007 17.1026 154.302 17.1026C158.596 17.1026 161.724 20.2994 161.724 24.615Z"
                  fill="white"
                />
                <path
                  d="M77.2725 40.4197L95.5705 26.0195V39.4261H86.7699V36.2293H86.6638C85.0734 39.2662 81.2562 40.4384 78.0753 40.4384C77.8047 40.4384 77.537 40.4321 77.2725 40.4197Z"
                  fill="white"
                />
              </g>
            </g>
            <g
              className={
                isMouseOver ? "deanta-logo-left-animated" : "deanta-logo-left"
              }
            >
              <g id="left_2">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.3251 7.35254C32.8698 10.9223 33.9301 15.2379 33.9301 19.6068C33.9301 19.9069 33.9262 20.2038 33.9183 20.4974C35.7118 13.878 41.6083 8.84436 48.7845 8.84436C56.2291 8.84436 61.9735 13.7882 63.7471 20.523C65.3046 13.8387 70.6699 8.84436 78.0749 8.84436C81.3089 8.84436 84.914 10.0698 86.6635 13.0001H86.7695V9.85667H95.5702V23.9629L74.999 40.1519C68.603 38.9167 64.3888 33.8216 63.4719 27.3323H42.0515C42.5817 30.8487 45.4975 32.9266 48.9436 32.9266C51.3293 32.9266 52.8667 31.9676 54.2982 30.1561H63.3109C60.7661 36.0701 55.5705 40.3857 48.9436 40.3857C40.5684 40.3857 33.7057 33.698 33.3698 25.362C31.4269 34.5807 24.5041 39.4267 13.7311 39.4267H0V0H12.9889C20.093 0 25.8717 1.17214 30.3251 7.35254ZM14.3143 30.5823C21.1533 30.5823 23.9101 26.1601 23.9101 19.7666C23.9101 13.4797 21.0473 8.84436 14.3673 8.84436H10.02V30.5823H14.3143ZM42.1575 21.365H55.5175C54.8283 18.1682 52.0185 16.3035 48.8375 16.3035C45.6566 16.3035 42.8467 18.1682 42.1575 21.365ZM86.7695 24.615C86.7695 28.8774 83.6946 32.1807 79.4003 32.1807C75.2651 32.1807 72.0842 28.8241 72.0842 24.7216C72.0842 20.5125 75.053 17.1026 79.3473 17.1026C83.6416 17.1026 86.7695 20.2994 86.7695 24.615Z"
                  fill="white"
                />
                <path
                  d="M97.4287 9.87453H105.65V13.0054C105.65 13.0054 105.755 13.0496 105.779 13.0054C107.806 9.29057 112.087 8.5243 114.712 8.90067C111.467 11.4647 101.841 19.0445 97.4334 22.514L97.4287 9.87453Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
  );
}

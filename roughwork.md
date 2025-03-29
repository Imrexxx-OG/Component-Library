import React from "react"

export default function Badges(){
  return (
    <div className="badges">
      <h1 className="sub-header">BADGES</h1>
      <div className="general-badge-container">
        <h2>SQUARE</h2>
        <div className="badges-container">
          <button className="button-square button-gray">Badge</button>
          <button className="button-square button-red">Badge</button>
          <button className="button-square button-yellow">Badge</button>
          <button className="button-square button-green">Badge</button>
          <button className="button-square button-blue">Badge</button>
          <button className="button-square button-indigo">Badge</button>
          <button className="button-square button-purple">Badge</button>
          <button className="button-square button-pink">Badge</button>
        </div>
        <h2>PILL</h2>
        <div className="badges-container">
          <button className="button-pill button-gray">Badge</button>
          <button className="button-pill button-red">Badge</button>
          <button className="button-pill button-yellow">Badge</button>
          <button className="button-pill button-green">Badge</button>
          <button className="button-pill button-blue">Badge</button>
          <button className="button-pill button-indigo">Badge</button>
          <button className="button-pill button-purple">Badge</button>
          <button className="button-pill button-pink">Badge</button>
        </div>
      </div>
    </div>
  )
}

import React from "react"

export default function Banners(){
  return (
    <div className="banners">
      <h1 className="sub-header">BANNERS</h1>
      <div className="banners-container">
        <h2>Success</h2>
        <div className="banner-green">
          <button className="banner-button-green">
            <div className="banner-icon-check icon-container">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#34D399"/>
              </svg>
              <span className="banner-success">Congratulations!</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit cupiditate labore tempore animi, amet hic, a alias.</p>
          </button>
        </div>
        <h2>Warning</h2>
        <div className="banner-yellow">
          <button className="banner-button-yellow">
            <div className="banner-icon-exclamation icon-container" >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13ZM10 5C9.44772 5 9 5.44772 9 6V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6C11 5.44772 10.5523 5 10 5Z" fill="#FBBF24"/>
              </svg>
              <span className="banner-warning">Attention!</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit cupiditate labore tempore animi, amet hic, a alias.</p>
          </button>
        </div>
        <h2>Error</h2>
        <div className="banner-red">
          <button className="banner-button-red">
            <div className="banner-icon-xcircle icon-container">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L10 11.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L11.4142 10L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L10 8.58579L8.70711 7.29289Z" fill="#F87171"/>
              </svg>
              <span className="banner-error">There is a problem with your Application</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit cupiditate labore tempore animi, amet hic, a alias.</p>
          </button>
        </div>
        <h2>Neutral</h2>
        <div className="banner-blue">
          <button className="banner-button-blue">
            <div className="banner-icon-information icon-container">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z" fill="#60A5FA"/>
              </svg>
              <span className="banner-neutral">Update Available!</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit cupiditate labore tempore animi, amet hic, a alias.</p>
          </button>
        </div>
      </div>
    </div>
  )
}

import React from "react"

export default function Testimonials(){
  return (
    <div className="testimonials">
      <h1 className="sub-header">TESTIMONIALS</h1>
      <div className="testimonial-container">
        <h3>With Pic</h3>
        <div className="testimonial-with-pic">
          <img src="https://moccasin-wrong-prawn-350.mypinata.cloud/ipfs/bafkreifuflxap7rqo6uqjac7mt27le2sw2pflcnpp3en5j6i4zh4a2hwrm" alt="my portrait" className="headshot-image" />
          <div className="testimonial-with-pic-container">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.028 6C6.684 11.184 1.5 19.68 1.5 29.04C1.5 36.672 6.108 41.136 11.436 41.136C16.476 41.136 20.22 37.104 20.22 32.352C20.22 27.6 16.908 24.144 12.588 24.144C11.724 24.144 10.572 24.288 10.284 24.432C11.004 19.536 15.612 13.776 20.22 10.896L14.028 6ZM38.796 6C31.596 11.184 26.412 19.68 26.412 29.04C26.412 36.672 31.02 41.136 36.348 41.136C41.244 41.136 45.132 37.104 45.132 32.352C45.132 27.6 41.676 24.144 37.356 24.144C36.492 24.144 35.484 24.288 35.196 24.432C35.916 19.536 40.38 13.776 44.988 10.896L38.796 6Z" fill="blue" fill-opacity="0.5"/>
            </svg>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestiae iure nulla ad, praesentium deserunt illo amet a dolore sit corporis, culpa velit, optio itaque dignissimos quam veniam porro fugiat.</p>
            <div className="testimonial-with-pic-signature">
              <div className="testmonial-with-pic-name">Imran Damare</div>
              <div className="testmonial-with-pic-title">RootEM, Founder</div>
            </div>
          </div>
        </div>
        <h3>No Pic</h3>
        <div className="testimonial-no-pic">
          <div className="testimonial-no-pic-container">
            <svg width="180" height="32" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M118.495 27.973C120.816 27.973 122.829 26.742 123.847 24.895L121.195 23.379C120.721 24.349 119.703 24.942 118.472 24.942C116.648 24.942 115.298 23.592 115.298 21.722C115.298 19.827 116.648 18.477 118.472 18.477C119.679 18.477 120.698 19.093 121.171 20.064L123.8 18.524C122.829 16.701 120.816 15.469 118.495 15.469C114.896 15.469 112.243 18.193 112.243 21.721C112.243 25.25 114.896 27.973 118.495 27.973ZM134.277 15.8V17.198C133.424 16.132 132.146 15.469 130.417 15.469C127.267 15.469 124.662 18.193 124.662 21.721C124.662 25.25 127.267 27.973 130.417 27.973C132.146 27.973 133.424 27.31 134.277 26.244V27.642H137.332V15.8H134.277ZM130.985 25.06C129.114 25.06 127.717 23.71 127.717 21.721C127.717 19.732 129.114 18.382 130.985 18.382C132.88 18.382 134.277 19.732 134.277 21.722C134.277 23.71 132.88 25.06 130.985 25.06ZM146.875 18.737V15.801H144.199V12.485L141.144 13.409V15.801H139.084V18.737H141.144V23.663C141.144 26.86 142.589 28.115 146.875 27.642V24.87C145.123 24.965 144.199 24.941 144.199 23.662V18.736H146.875V18.737ZM150.545 14.38C151.586 14.38 152.439 13.527 152.439 12.51C152.439 11.49 151.586 10.615 150.545 10.615C149.526 10.615 148.674 11.491 148.674 12.509C148.679 13.0037 148.878 13.4767 149.227 13.8265C149.577 14.1763 150.05 14.375 150.545 14.38ZM149.029 27.642H152.084V15.8H149.029V27.64V27.642ZM160.516 27.973C163.997 27.973 166.792 25.25 166.792 21.721C166.792 18.193 163.997 15.469 160.516 15.469C157.035 15.469 154.264 18.193 154.264 21.721C154.264 25.25 157.035 27.973 160.516 27.973ZM160.516 24.989C158.716 24.989 157.319 23.639 157.319 21.721C157.319 19.803 158.716 18.453 160.516 18.453C162.34 18.453 163.737 19.803 163.737 21.721C163.737 23.64 162.34 24.989 160.516 24.989ZM175.524 15.47C173.938 15.47 172.706 16.061 171.996 17.127V15.801H168.941V27.641H171.996V21.248C171.996 19.188 173.109 18.311 174.601 18.311C175.974 18.311 176.945 19.14 176.945 20.751V27.641H180V20.371C180 17.221 178.034 15.469 175.524 15.469V15.47Z" fill="#2E59F3"/>
            <path d="M59.267 27.642H62.985L66.087 16.7L69.213 27.64H72.931L77.573 11.064H74.139L70.966 23.354L67.485 11.064H64.69L61.233 23.354L58.059 11.064H54.626L59.267 27.641V27.642ZM83.551 27.973C87.032 27.973 89.827 25.25 89.827 21.721C89.827 18.193 87.033 15.469 83.551 15.469C80.071 15.469 77.299 18.193 77.299 21.721C77.299 25.25 80.07 27.973 83.551 27.973ZM83.551 24.989C81.751 24.989 80.354 23.639 80.354 21.721C80.354 19.803 81.752 18.453 83.551 18.453C85.375 18.453 86.772 19.803 86.772 21.721C86.772 23.639 85.375 24.989 83.552 24.989H83.551ZM95.031 17.837V15.801H91.976V27.641H95.031V21.981C95.031 19.495 97.044 18.785 98.631 18.974V15.564C97.139 15.564 95.647 16.227 95.031 17.837ZM111.334 27.642L106.432 21.65L111.192 15.8H107.545L103.472 21.01V11.064H100.417V27.642H103.472V22.266L107.782 27.642H111.334Z" fill="#1F2937"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.342 12.4501L34.746 8.0651V28.4361H43.626V30.4101H0.21V28.4361H4.157V15.8861L0.479 16.8061L0 14.8901L20.81 9.6881H23.89C23.5505 10.4946 23.325 11.3444 23.22 12.2131L22.743 16.1351L27.839 13.1931V28.4361H32.772V8.0661L25.178 12.4501C25.3993 10.6106 26.3025 8.92106 27.709 7.7151H23.645C24.3983 6.70895 25.3958 5.91157 26.5432 5.39834C27.6905 4.88512 28.9498 4.67302 30.202 4.7821L24.685 1.5961C25.7413 1.14395 26.8885 0.944398 28.0354 1.01332C29.1824 1.08223 30.2974 1.41772 31.292 1.9931C32.2833 2.56308 33.1282 3.35601 33.76 4.3091C34.3914 3.35605 35.236 2.56311 36.227 1.9931C37.2217 1.4177 38.337 1.08222 39.4841 1.0133C40.6312 0.944386 41.7785 1.14394 42.835 1.5961L37.317 4.7821C38.5693 4.67275 39.8289 4.88472 40.9764 5.39796C42.124 5.91119 43.1217 6.70873 43.875 7.7151H39.809C41.2165 8.92054 42.1204 10.6103 42.342 12.4501ZM23.892 18.5691H17.972V28.4361H23.892V18.5691ZM13.038 20.5421C13.0439 20.805 12.9972 21.0664 12.9007 21.3111C12.8042 21.5557 12.6598 21.7785 12.4759 21.9666C12.2921 22.1546 12.0725 22.304 11.8302 22.406C11.5878 22.508 11.3275 22.5605 11.0645 22.5605C10.8015 22.5605 10.5412 22.508 10.2988 22.406C10.0565 22.304 9.83689 22.1546 9.65305 21.9666C9.46921 21.7785 9.32479 21.5557 9.22827 21.3111C9.13175 21.0664 9.08508 20.805 9.091 20.5421C9.10261 20.0264 9.31563 19.5357 9.68447 19.1751C10.0533 18.8145 10.5487 18.6125 11.0645 18.6125C11.5803 18.6125 12.0757 18.8145 12.4445 19.1751C12.8134 19.5357 13.0264 20.0264 13.038 20.5421Z" fill="#2E59F3"/>
            </svg>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestiae iure nulla ad, praesentium deserunt illo amet a dolore sit corporis, culpa velit, optio itaque dignissimos quam veniam porro fugiat.
            </p>
            <div className="testimonial-no-pic-signature">
              <div className="testmonial-no-pic-name">Imran Damare</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 0H14L9 20H6L11 0Z" fill="#2E59F3"/>
                </svg>

              <div className="testmonial-no-pic-title">RootEM, Founder</div>
            </div>
          </div>
          <div className="dot-pattern"></div>
        </div>
      </div>
    </div>
  )
}

import React from "react"

export default function Testimonials(){
  return (
    <div className="testimonials">
      <h1 className="sub-header">TESTIMONIALS</h1>
      <div className="testimonial-container">
        <h3>With Pic</h3>
        <div className="testimonial-with-pic">
          <img src="https://moccasin-wrong-prawn-350.mypinata.cloud/ipfs/bafkreifuflxap7rqo6uqjac7mt27le2sw2pflcnpp3en5j6i4zh4a2hwrm" alt="my portrait" className="headshot-image" />
          <div className="testimonial-with-pic-container">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.028 6C6.684 11.184 1.5 19.68 1.5 29.04C1.5 36.672 6.108 41.136 11.436 41.136C16.476 41.136 20.22 37.104 20.22 32.352C20.22 27.6 16.908 24.144 12.588 24.144C11.724 24.144 10.572 24.288 10.284 24.432C11.004 19.536 15.612 13.776 20.22 10.896L14.028 6ZM38.796 6C31.596 11.184 26.412 19.68 26.412 29.04C26.412 36.672 31.02 41.136 36.348 41.136C41.244 41.136 45.132 37.104 45.132 32.352C45.132 27.6 41.676 24.144 37.356 24.144C36.492 24.144 35.484 24.288 35.196 24.432C35.916 19.536 40.38 13.776 44.988 10.896L38.796 6Z" fill="blue" fill-opacity="0.5"/>
            </svg>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestiae iure nulla ad, praesentium deserunt illo amet a dolore sit corporis, culpa velit, optio itaque dignissimos quam veniam porro fugiat.</p>
            <div className="testimonial-with-pic-signature">
              <div className="testmonial-with-pic-name">Imran Damare</div>
              <div className="testmonial-with-pic-title">RootEM, Founder</div>
            </div>
          </div>
        </div>
        <h3>No Pic</h3>
        <div className="testimonial-no-pic">
          <div className="testimonial-no-pic-container">
            <svg width="180" height="32" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M118.495 27.973C120.816 27.973 122.829 26.742 123.847 24.895L121.195 23.379C120.721 24.349 119.703 24.942 118.472 24.942C116.648 24.942 115.298 23.592 115.298 21.722C115.298 19.827 116.648 18.477 118.472 18.477C119.679 18.477 120.698 19.093 121.171 20.064L123.8 18.524C122.829 16.701 120.816 15.469 118.495 15.469C114.896 15.469 112.243 18.193 112.243 21.721C112.243 25.25 114.896 27.973 118.495 27.973ZM134.277 15.8V17.198C133.424 16.132 132.146 15.469 130.417 15.469C127.267 15.469 124.662 18.193 124.662 21.721C124.662 25.25 127.267 27.973 130.417 27.973C132.146 27.973 133.424 27.31 134.277 26.244V27.642H137.332V15.8H134.277ZM130.985 25.06C129.114 25.06 127.717 23.71 127.717 21.721C127.717 19.732 129.114 18.382 130.985 18.382C132.88 18.382 134.277 19.732 134.277 21.722C134.277 23.71 132.88 25.06 130.985 25.06ZM146.875 18.737V15.801H144.199V12.485L141.144 13.409V15.801H139.084V18.737H141.144V23.663C141.144 26.86 142.589 28.115 146.875 27.642V24.87C145.123 24.965 144.199 24.941 144.199 23.662V18.736H146.875V18.737ZM150.545 14.38C151.586 14.38 152.439 13.527 152.439 12.51C152.439 11.49 151.586 10.615 150.545 10.615C149.526 10.615 148.674 11.491 148.674 12.509C148.679 13.0037 148.878 13.4767 149.227 13.8265C149.577 14.1763 150.05 14.375 150.545 14.38ZM149.029 27.642H152.084V15.8H149.029V27.64V27.642ZM160.516 27.973C163.997 27.973 166.792 25.25 166.792 21.721C166.792 18.193 163.997 15.469 160.516 15.469C157.035 15.469 154.264 18.193 154.264 21.721C154.264 25.25 157.035 27.973 160.516 27.973ZM160.516 24.989C158.716 24.989 157.319 23.639 157.319 21.721C157.319 19.803 158.716 18.453 160.516 18.453C162.34 18.453 163.737 19.803 163.737 21.721C163.737 23.64 162.34 24.989 160.516 24.989ZM175.524 15.47C173.938 15.47 172.706 16.061 171.996 17.127V15.801H168.941V27.641H171.996V21.248C171.996 19.188 173.109 18.311 174.601 18.311C175.974 18.311 176.945 19.14 176.945 20.751V27.641H180V20.371C180 17.221 178.034 15.469 175.524 15.469V15.47Z" fill="#2E59F3"/>
            <path d="M59.267 27.642H62.985L66.087 16.7L69.213 27.64H72.931L77.573 11.064H74.139L70.966 23.354L67.485 11.064H64.69L61.233 23.354L58.059 11.064H54.626L59.267 27.641V27.642ZM83.551 27.973C87.032 27.973 89.827 25.25 89.827 21.721C89.827 18.193 87.033 15.469 83.551 15.469C80.071 15.469 77.299 18.193 77.299 21.721C77.299 25.25 80.07 27.973 83.551 27.973ZM83.551 24.989C81.751 24.989 80.354 23.639 80.354 21.721C80.354 19.803 81.752 18.453 83.551 18.453C85.375 18.453 86.772 19.803 86.772 21.721C86.772 23.639 85.375 24.989 83.552 24.989H83.551ZM95.031 17.837V15.801H91.976V27.641H95.031V21.981C95.031 19.495 97.044 18.785 98.631 18.974V15.564C97.139 15.564 95.647 16.227 95.031 17.837ZM111.334 27.642L106.432 21.65L111.192 15.8H107.545L103.472 21.01V11.064H100.417V27.642H103.472V22.266L107.782 27.642H111.334Z" fill="#1F2937"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.342 12.4501L34.746 8.0651V28.4361H43.626V30.4101H0.21V28.4361H4.157V15.8861L0.479 16.8061L0 14.8901L20.81 9.6881H23.89C23.5505 10.4946 23.325 11.3444 23.22 12.2131L22.743 16.1351L27.839 13.1931V28.4361H32.772V8.0661L25.178 12.4501C25.3993 10.6106 26.3025 8.92106 27.709 7.7151H23.645C24.3983 6.70895 25.3958 5.91157 26.5432 5.39834C27.6905 4.88512 28.9498 4.67302 30.202 4.7821L24.685 1.5961C25.7413 1.14395 26.8885 0.944398 28.0354 1.01332C29.1824 1.08223 30.2974 1.41772 31.292 1.9931C32.2833 2.56308 33.1282 3.35601 33.76 4.3091C34.3914 3.35605 35.236 2.56311 36.227 1.9931C37.2217 1.4177 38.337 1.08222 39.4841 1.0133C40.6312 0.944386 41.7785 1.14394 42.835 1.5961L37.317 4.7821C38.5693 4.67275 39.8289 4.88472 40.9764 5.39796C42.124 5.91119 43.1217 6.70873 43.875 7.7151H39.809C41.2165 8.92054 42.1204 10.6103 42.342 12.4501ZM23.892 18.5691H17.972V28.4361H23.892V18.5691ZM13.038 20.5421C13.0439 20.805 12.9972 21.0664 12.9007 21.3111C12.8042 21.5557 12.6598 21.7785 12.4759 21.9666C12.2921 22.1546 12.0725 22.304 11.8302 22.406C11.5878 22.508 11.3275 22.5605 11.0645 22.5605C10.8015 22.5605 10.5412 22.508 10.2988 22.406C10.0565 22.304 9.83689 22.1546 9.65305 21.9666C9.46921 21.7785 9.32479 21.5557 9.22827 21.3111C9.13175 21.0664 9.08508 20.805 9.091 20.5421C9.10261 20.0264 9.31563 19.5357 9.68447 19.1751C10.0533 18.8145 10.5487 18.6125 11.0645 18.6125C11.5803 18.6125 12.0757 18.8145 12.4445 19.1751C12.8134 19.5357 13.0264 20.0264 13.038 20.5421Z" fill="#2E59F3"/>
            </svg>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestiae iure nulla ad, praesentium deserunt illo amet a dolore sit corporis, culpa velit, optio itaque dignissimos quam veniam porro fugiat.
            </p>
            <div className="testimonial-no-pic-signature">
              <div className="testmonial-no-pic-name">Imran Damare</div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 0H14L9 20H6L11 0Z" fill="#2E59F3"/>
                </svg>

              <div className="testmonial-no-pic-title">RootEM, Founder</div>
            </div>
          </div>
          <div className="dot-pattern"></div>
        </div>
      </div>
    </div>
  )
}

import React from "react"

export default function Cards(){
  return (
    <div id="cards">
      <h1 className="sub-header">CARDS</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-icon-blue">
            <div className="card-icon-cloud">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_dd_1_114)">
              <rect x="12" y="2" width="48" height="48" rx="6" fill="#3F75FE"/>
              <path d="M31 30C28.7909 30 27 28.2091 27 26C27 24.0929 28.3346 22.4976 30.1207 22.097C30.0417 21.7439 30 21.3768 30 21C30 18.2386 32.2386 16 35 16C37.4193 16 39.4373 17.7183 39.9002 20.001C39.9334 20.0003 39.9666 20 40 20C42.7614 20 45 22.2386 45 25C45 27.419 43.2822 29.4367 41 29.9M39 27L36 24M36 24L33 27M36 24L36 36" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <filter id="filter0_dd_1_114" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_114"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="3"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_114"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_114"/>
              <feOffset dy="10"/>
              <feGaussianBlur stdDeviation="7.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="effect1_dropShadow_1_114" result="effect2_dropShadow_1_114"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_114" result="shape"/>
              </filter>
              </defs>
              </svg>
            </div>
          </div>
          <h3 className="card-title">Easy Deployment</h3>
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </div>
      </div>
    </div>
  )
}
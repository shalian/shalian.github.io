const notTopImgDom = $('.not-top-img')[0]
const logoDom = document.getElementById('blog-info')
const weatherDom = document.getElementById('weather')
const navDom = document.getElementById('nav')
let sw_bar_slim = document.getElementsByClassName('sw-bar-slim')[0],
  sc_gisBJw = document.getElementsByClassName('sc-gisBJw')[0]

// 是否黑暗模式
let isdark = document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark';

if (navDom) {
  navDom.style.height = '60px';
  navDom.style.position = 'fixed';
  navDom.style.top = '0px';
}

const navBgTop0 = 'transparent'; // 页面滚动到顶部时的背景颜色
const navBgColor = 'rgba(255, 255, 255, 0.6)'; // 正常模式下的nav背景颜色
const navBgDarkColor = 'rgba(0, 0, 0, 0.6)'; // 黑暗模式下的nav背景颜色


// 切换黑暗也浅色模式
/**
 * 初始化判断显示模式
 */
// function initNav() {
//     console.log(isdark);
// }
/**
 * 改变模式时执行
 */
function changeNav () {
  // isdark 取反即为当前模式
  isdark = document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark';
  // console.log(!isdark);
  navDom.style.background = document.documentElement.scrollTop > 0 ? !isdark ? navBgDarkColor : navBgColor : navBgTop0;
}

/**
 * @describtion 初始化 顶部字体颜色、背景颜色
 * @param {*} scrolltop 滚动距离
 */
(function fontColor (scrolltop) {
  // console.log(scrolltop)
  // 没有顶部图片，设为 dark
  navDom.className = !notTopImgDom ? scrolltop > 0 ? 'dark' : 'light' : 'dark';
  weatherDom.className = !notTopImgDom ? scrolltop > 0 ? 'dark' : 'light' : 'dark';
  navDom.style.background = scrolltop > 0 ? isdark ? navBgDarkColor : navBgColor : navBgTop0;
})(document.documentElement.scrollTop)


/**
 * 添加页面滚动事件
 */
document.addEventListener('scroll', (e) => {
  // console.log(e);sw-container
  const scrolltop = e.target.documentElement.scrollTop;
  isdark = document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark';

  // 顶部背景颜色
  navDom.style.background = scrolltop > 0 ? isdark ? navBgDarkColor : navBgColor : navBgTop0;
  if (scrolltop > 0) {
    navDom.style.backdropFilter = 'saturate(1) blur(4px)';
    navDom.style.boxShadow = navDom.style['-webkit-box-shadow'] =
      '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)';
  } else {
    navDom.style.backdropFilter = 'none';
    navDom.style.boxShadow = navDom.style['-webkit-box-shadow'] = 'none';
  }
  navDom.style.color = scrolltop > 0 ? 'var(--font-color)' : 'var(--light-grey)';

  sw_bar_slim = document.getElementsByClassName('sw-bar-slim')[0];
  sc_gisBJw = document.getElementsByClassName('sc-gisBJw')[0];
  // console.log(sw_bar_slim);
  // 设置天气组件字体颜色
  if (sw_bar_slim) {
    sw_bar_slim.style.transition = 'color 0.4s';
    if (scrolltop > 0) {
      sw_bar_slim.style.color = 'var(--font-color)';
    } else if (scrolltop == 0) {
      sw_bar_slim.style.color = !notTopImgDom ? 'var(--light-grey)' : 'var(--font-color)'; // var(--light-grey)
    }
  }

  setTimeout(() => {
    // 设置天气弹窗高度
    if (!sc_gisBJw) return
    sc_gisBJw.style.height =
      window.innerWidth > 600 ? '100% !important' : '100vh !important';
  })
})

const defaultLeft = 10 // 默认相对于logo偏移量
let navStyle = null,
  logoStyle = null
if (window.getComputedStyle) {
  navStyle = window.getComputedStyle(navDom);
  logoStyle = window.getComputedStyle(logoDom);
} else {
  navStyle = navDom.currentStyle;
  logoStyle = logoDom.currentStyle; //兼容IE的写法
}

const logoWidth = logoStyle.width;
const logo_width = parseFloat(logoWidth.slice(0, -2));

/**
 *  相同： getComputedStyle 和 element.style 的相同点就是二者返回的都是 CSSStyleDeclaration 对象，取相应属性值得时候都是采用的 CSS 驼峰式写法，均需要注意 float 属性。
 *  不同： element.style 读取的只是元素的内联样式，即写在元素的 style 属性上的样式；而 getComputedStyle 读取的样式是最终样式，包括了内联样式、嵌入样式和外部样式。 element.style 既支持读也支持写，我们通过 element.style 即可改写元素的样式。而 getComputedStyle 仅支持读并不支持写入。我们可以通过使用 getComputedStyle 读取样式，通过 element.style 修改样式 我们可以通过使用 getComputedStyle 读取样式，通过 element.style 修改样式。
 */

/**
 * @description 判断屏幕尺寸是否大于 768
 * @param {*} w window
 */

function resetFn (w) {
  if (w.innerWidth > 768) {
    // if (logoDom.style.left == '36px') return
    logoDom.style.left = '36px'
    navDom.style.paddingLeft = '36px'
  } else {
    // if (logoDom.style.left == '16px') return
    logoDom.style.left = '16px'
    navDom.style.paddingLeft = '16px'
  }

  const navPaddingLeft = navDom.style.paddingLeft
  const nav_pdl = parseFloat(navPaddingLeft.slice(0, -2))

  weatherDom.style.left = nav_pdl + logo_width + defaultLeft + 'px'
}

resetFn(window)

window.addEventListener('resize', (e) => {
  const win = e.target
  resetFn(win)
})

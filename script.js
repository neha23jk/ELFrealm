function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();




window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main");
  const counter = document.getElementById("counter");
  const scrollCue = document.getElementById("scroll-cue");

  let count = 1;
  const duration = 4000; 
  const intervalTime = duration / 100; 

  const counterInterval = setInterval(() => {
    counter.textContent = `${count}%`;
    count++;
    if (count > 100) clearInterval(counterInterval);
  }, intervalTime);

  setTimeout(() => {
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
      mainContent.style.display = "block";
    }, 600); 
  }, duration);
});







const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
    var data = `
  ./clean_frames/frame_0001.png
  ./clean_frames/frame_0002.png
  ./clean_frames/frame_0003.png
  ./clean_frames/frame_0004.png
  ./clean_frames/frame_0005.png
  ./clean_frames/frame_0006.png
  ./clean_frames/frame_0007.png
  ./clean_frames/frame_0008.png
  ./clean_frames/frame_0009.png
  ./clean_frames/frame_0010.png
  ./clean_frames/frame_0011.png
  ./clean_frames/frame_0012.png
  ./clean_frames/frame_0013.png
  ./clean_frames/frame_0014.png
  ./clean_frames/frame_0015.png
  ./clean_frames/frame_0016.png
  ./clean_frames/frame_0017.png
  ./clean_frames/frame_0018.png
  ./clean_frames/frame_0019.png
  ./clean_frames/frame_0020.png
  ./clean_frames/frame_0021.png
  ./clean_frames/frame_0022.png
  ./clean_frames/frame_0023.png
  ./clean_frames/frame_0024.png
  ./clean_frames/frame_0025.png
  ./clean_frames/frame_0026.png
  ./clean_frames/frame_0027.png
  ./clean_frames/frame_0028.png
  ./clean_frames/frame_0029.png
  ./clean_frames/frame_0030.png
  ./clean_frames/frame_0031.png
  ./clean_frames/frame_0032.png
  ./clean_frames/frame_0033.png
  ./clean_frames/frame_0034.png
  ./clean_frames/frame_0035.png
  ./clean_frames/frame_0036.png
  ./clean_frames/frame_0037.png
  ./clean_frames/frame_0038.png
  ./clean_frames/frame_0039.png
  ./clean_frames/frame_0040.png
  ./clean_frames/frame_0041.png
  ./clean_frames/frame_0042.png
  ./clean_frames/frame_0043.png
  ./clean_frames/frame_0044.png
  ./clean_frames/frame_0045.png
  ./clean_frames/frame_0046.png
  ./clean_frames/frame_0047.png
  ./clean_frames/frame_0048.png
  ./clean_frames/frame_0049.png
  ./clean_frames/frame_0050.png
  ./clean_frames/frame_0051.png 
  ./clean_frames/frame_0052.png
  ./clean_frames/frame_0053.png
  ./clean_frames/frame_0054.png
  ./clean_frames/frame_0055.png
  ./clean_frames/frame_0056.png
  ./clean_frames/frame_0057.png
  ./clean_frames/frame_0058.png
  ./clean_frames/frame_0059.png
  ./clean_frames/frame_0060.png
  ./clean_frames/frame_0061.png
  ./clean_frames/frame_0062.png
  ./clean_frames/frame_0063.png
  ./clean_frames/frame_0064.png
  ./clean_frames/frame_0065.png
  ./clean_frames/frame_0066.png
  ./clean_frames/frame_0067.png
  ./clean_frames/frame_0068.png
  ./clean_frames/frame_0069.png
  ./clean_frames/frame_0070.png
  ./clean_frames/frame_0071.png
  ./clean_frames/frame_0072.png
  ./clean_frames/frame_0073.png
  ./clean_frames/frame_0074.png
  ./clean_frames/frame_0075.png
  ./clean_frames/frame_0076.png
  ./clean_frames/frame_0077.png
  ./clean_frames/frame_0078.png
  ./clean_frames/frame_0079.png
  ./clean_frames/frame_0080.png
  ./clean_frames/frame_0081.png
  ./clean_frames/frame_0082.png
  ./clean_frames/frame_0083.png
  ./clean_frames/frame_0084.png
  ./clean_frames/frame_0085.png
  ./clean_frames/frame_0086.png
  ./clean_frames/frame_0087.png
  ./clean_frames/frame_0088.png
  ./clean_frames/frame_0089.png
  ./clean_frames/frame_0090.png
  ./clean_frames/frame_0091.png
  ./clean_frames/frame_0092.png
  ./clean_frames/frame_0093.png
  ./clean_frames/frame_0094.png
  ./clean_frames/frame_0095.png
  ./clean_frames/frame_0096.png
  ./clean_frames/frame_0097.png
  ./clean_frames/frame_0098.png
  ./clean_frames/frame_0099.png
  ./clean_frames/frame_0100.png
  ./clean_frames/frame_0101.png
  ./clean_frames/frame_0102.png
  ./clean_frames/frame_0103.png
  ./clean_frames/frame_0104.png
  ./clean_frames/frame_0105.png
  ./clean_frames/frame_0106.png
  ./clean_frames/frame_0107.png
  ./clean_frames/frame_0108.png
  ./clean_frames/frame_0109.png
  ./clean_frames/frame_0110.png
  ./clean_frames/frame_0111.png
  ./clean_frames/frame_0112.png
  ./clean_frames/frame_0113.png
  ./clean_frames/frame_0114.png
  ./clean_frames/frame_0115.png
  ./clean_frames/frame_0116.png
  ./clean_frames/frame_0117.png
  ./clean_frames/frame_0118.png
  ./clean_frames/frame_0119.png
  ./clean_frames/frame_0120.png
  ./clean_frames/frame_0121.png
  ./clean_frames/frame_0122.png
  ./clean_frames/frame_0123.png
  ./clean_frames/frame_0124.png
  ./clean_frames/frame_0125.png
  ./clean_frames/frame_0126.png
  ./clean_frames/frame_0127.png
  ./clean_frames/frame_0128.png
  ./clean_frames/frame_0129.png
  ./clean_frames/frame_0130.png
  ./clean_frames/frame_0131.png
  ./clean_frames/frame_0132.png
  ./clean_frames/frame_0133.png
  ./clean_frames/frame_0134.png
  ./clean_frames/frame_0135.png
  ./clean_frames/frame_0136.png
  ./clean_frames/frame_0137.png
  ./clean_frames/frame_0138.png
  ./clean_frames/frame_0139.png
  ./clean_frames/frame_0140.png
  ./clean_frames/frame_0141.png
  ./clean_frames/frame_0142.png
  ./clean_frames/frame_0143.png
  ./clean_frames/frame_0144.png
  ./clean_frames/frame_0145.png
  ./clean_frames/frame_0146.png
  ./clean_frames/frame_0147.png
  ./clean_frames/frame_0148.png
  ./clean_frames/frame_0149.png
  ./clean_frames/frame_0150.png
  ./clean_frames/frame_0151.png
  ./clean_frames/frame_0152.png
  ./clean_frames/frame_0153.png
  ./clean_frames/frame_0154.png
  ./clean_frames/frame_0155.png
  ./clean_frames/frame_0156.png
  ./clean_frames/frame_0157.png
  ./clean_frames/frame_0158.png
  ./clean_frames/frame_0159.png
  ./clean_frames/frame_0160.png
  ./clean_frames/frame_0161.png
  ./clean_frames/frame_0162.png
  ./clean_frames/frame_0163.png
  ./clean_frames/frame_0164.png
  ./clean_frames/frame_0165.png
  ./clean_frames/frame_0166.png
  ./clean_frames/frame_0167.png
  ./clean_frames/frame_0168.png
  ./clean_frames/frame_0169.png
  ./clean_frames/frame_0170.png
  ./clean_frames/frame_0171.png
  ./clean_frames/frame_0172.png
  ./clean_frames/frame_0173.png
  ./clean_frames/frame_0174.png
  ./clean_frames/frame_0175.png
  ./clean_frames/frame_0176.png
  ./clean_frames/frame_0177.png
  ./clean_frames/frame_0178.png
  ./clean_frames/frame_0179.png
  ./clean_frames/frame_0180.png
  ./clean_frames/frame_0181.png
  ./clean_frames/frame_0182.png
  ./clean_frames/frame_0183.png
  ./clean_frames/frame_0184.png
  ./clean_frames/frame_0185.png
  ./clean_frames/frame_0186.png
  ./clean_frames/frame_0187.png
  ./clean_frames/frame_0188.png
  ./clean_frames/frame_0189.png
  ./clean_frames/frame_0190.png
  ./clean_frames/frame_0191.png
  ./clean_frames/frame_0192.png
  ./clean_frames/frame_0193.png
  ./clean_frames/frame_0194.png
  ./clean_frames/frame_0195.png
  ./clean_frames/frame_0196.png
  ./clean_frames/frame_0197.png
  ./clean_frames/frame_0198.png
  ./clean_frames/frame_0199.png
  ./clean_frames/frame_0200.png
  ./clean_frames/frame_0201.png
  ./clean_frames/frame_0202.png
  ./clean_frames/frame_0203.png
  ./clean_frames/frame_0204.png
  ./clean_frames/frame_0205.png
  ./clean_frames/frame_0206.png
  ./clean_frames/frame_0207.png
  ./clean_frames/frame_0208.png
  ./clean_frames/frame_0209.png
  ./clean_frames/frame_0210.png
  ./clean_frames/frame_0211.png
  ./clean_frames/frame_0212.png
  ./clean_frames/frame_0213.png
  ./clean_frames/frame_0214.png
  ./clean_frames/frame_0215.png
  ./clean_frames/frame_0216.png
  ./clean_frames/frame_0217.png
  ./clean_frames/frame_0218.png
  ./clean_frames/frame_0219.png
  ./clean_frames/frame_0220.png
  ./clean_frames/frame_0221.png
  ./clean_frames/frame_0222.png
  ./clean_frames/frame_0223.png
  ./clean_frames/frame_0224.png
  ./clean_frames/frame_0225.png
  ./clean_frames/frame_0226.png
  ./clean_frames/frame_0227.png
  ./clean_frames/frame_0228.png
  ./clean_frames/frame_0229.png
  ./clean_frames/frame_0230.png
  ./clean_frames/frame_0231.png
  ./clean_frames/frame_0232.png
  ./clean_frames/frame_0233.png
  ./clean_frames/frame_0234.png
  ./clean_frames/frame_0235.png
  ./clean_frames/frame_0236.png
  ./clean_frames/frame_0237.png
  ./clean_frames/frame_0238.png
  ./clean_frames/frame_0239.png
  ./clean_frames/frame_0240.png
  ./clean_frames/frame_0241.png
  ./clean_frames/frame_0242.png
 `;

  return data.split("\n")[index];
}
window.addEventListener("resize", () => {
  console.log("New frame source:", files(0));
});


const frameCount = 242;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
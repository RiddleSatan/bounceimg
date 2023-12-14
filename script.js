

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
        prev = now;
        return func(...args);
    }
};
};

document.querySelector(".rect").addEventListener("mousemove", throttleFunction(function (dets) {
  let div = document.createElement("div");
  div.classList.add('imagediv');
  let img= document.createElement("img");
  img.setAttribute("src","https://images.unsplash.com/photo-1529567186287-3e17bdefa342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvdXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")
  div.style.left = dets.clientX+'px'
  div.style.top = dets.clientY+'px'
  document.body.appendChild(div);
  div.appendChild(img);
  gsap.to(img,{
    y:"0",
    ease:Power3,
    
  });
  gsap.to(img,{
    y:"100%",
    ease:Power2,
    delay:"0.6"
    
  });
  setTimeout(()=>{
    div.remove();
  },2000)
},500));


  

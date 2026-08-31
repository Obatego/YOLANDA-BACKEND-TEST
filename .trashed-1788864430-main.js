(() => {
  const splash=document.querySelector('.splash');
  if(splash){
    let closed=false;
    const close=()=>{if(closed)return;closed=true;splash.classList.add('hide');setTimeout(()=>splash.remove(),560)};
    splash.addEventListener('pointerdown',close,{passive:true});
    setTimeout(close,2500);
  }
})();
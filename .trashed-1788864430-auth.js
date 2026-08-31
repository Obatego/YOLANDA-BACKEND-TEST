(() => {
  const form=document.getElementById('loginForm');
  if(!form)return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const email=form.email.value.trim(), password=form.password.value;
    const valid=(email==='employee@yolanda.test'||email==='YOL-001')&&password==='Yolanda123!';
    const btn=form.querySelector('button[type=submit]');
    btn.disabled=true; btn.textContent='Signing in…';
    setTimeout(()=>{
      if(valid){localStorage.setItem('yolandaUser',JSON.stringify({name:'Yolanda Employee',email}));location.href='dashboard.html'}
      else{alert('Demo login: employee@yolanda.test or YOL-001 / Yolanda123!');btn.disabled=false;btn.textContent='Sign In'}
    },650);
  });
})();
(() => {
  const form=document.getElementById('profileForm'), report=document.getElementById('reportForm');
  const toast=m=>{const t=document.querySelector('.toast');if(!t)return;t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)};
  if(form)form.addEventListener('submit',e=>{e.preventDefault();localStorage.setItem('yolandaProfile',JSON.stringify(Object.fromEntries(new FormData(form))));toast('Profile saved successfully.');});
  if(report)report.addEventListener('submit',e=>{e.preventDefault();const reports=JSON.parse(localStorage.getItem('yolandaReports')||'[]');reports.push({...Object.fromEntries(new FormData(report)),submittedAt:new Date().toISOString()});localStorage.setItem('yolandaReports',JSON.stringify(reports));report.reset();toast('Work report submitted successfully.');});
})();
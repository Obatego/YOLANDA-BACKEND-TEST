(() => {
  const reports=JSON.parse(localStorage.getItem('yolandaReports')||'[]');
  const count=document.getElementById('reportCount'); if(count)count.textContent=reports.length;
  const tbody=document.getElementById('reportRows');
  if(tbody)tbody.innerHTML=reports.length?reports.slice().reverse().map(r=>`<tr><td>${r.date||'—'}</td><td>${r.shift||'—'}</td><td>${r.totalCalled||'—'}</td><td>${r.income||'₦0'}</td><td>Submitted</td></tr>`).join(''):'<tr><td colspan="5">No reports submitted yet.</td></tr>';
  const search=document.getElementById('search');
  if(search)search.addEventListener('input',()=>{
    const q=search.value.toLowerCase();
    document.querySelectorAll('#reportRows tr').forEach(row=>row.style.display=row.textContent.toLowerCase().includes(q)?'':'none');
  });
  document.querySelectorAll('.bar').forEach((b,i)=>b.style.height+[55,72,48,84,67,92,76][i%7]+'%');
})();
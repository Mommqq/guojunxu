const button=document.querySelector('.language-switch');
let language='en';
button.addEventListener('click',()=>{language=language==='en'?'zh':'en';document.documentElement.lang=language==='en'?'en':'zh-CN';document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=el.dataset[language]});button.querySelectorAll('span').forEach((el,i)=>el.classList.toggle('active',(language==='en'&&i===0)||(language==='zh'&&i===1)));document.title=language==='en'?'Guojun Xu | Academic Homepage':'许国骏 | 个人学术主页';});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.1});
document.querySelectorAll('.section-content').forEach(el=>observer.observe(el));

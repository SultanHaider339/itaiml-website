(function(){
  function animatePage(){
    const selectors=['.home-about-panel','.home-services-panel','.home-project-card','.home-cta','.clean-hero','.clean-card','.clean-story-card','.clean-contact-grid'];
    const elements=[]; selectors.forEach(selector=>document.querySelectorAll(selector).forEach(element=>{if(!element.classList.contains('reveal-on-scroll')){element.classList.add('reveal-on-scroll');elements.push(element);}}));
    if(!('IntersectionObserver' in window)){elements.forEach(element=>element.classList.add('is-visible'));return;}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});
    elements.forEach(element=>observer.observe(element));
  }
  window.addEventListener('load',animatePage);window.addEventListener('hashchange',()=>setTimeout(animatePage,40));setTimeout(animatePage,80);
})();

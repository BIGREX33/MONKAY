document.addEventListener('mousemove', function(e)
 { const element = document.getElementById('followMe');
   const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
     const elementWidth = element.offsetWidth; 
     const elementHeight = element.offsetHeight;
      let x = e.clientX; let y = e.clientY; // Ensure the element stays within the viewport 
      if (x + elementWidth > viewportWidth) { x = viewportWidth - elementWidth; }
       if (x < 0) { x = 0; } if (y + elementHeight > viewportHeight) { y = viewportHeight - elementHeight; } 
       if (y < 0) { y = 0; } element.style.left = x + 'px'; element.style.top = y + 'px'; });
   
   
       const text = " Monkay, the latest meme coin on Solana, is taking the crypto world by storm with its fun and quirky branding. Backed  by a strong community, Monkay offers unique use cases and engaging content, making it a favorite among meme coin enthusiasts.";
    let index = 0;
     function type() { 
      if (index < text.length) 
        { document.getElementById('typingText').innerHTML += text.charAt(index); index++;
           setTimeout(type, 4); 
        }
      }// Adjust the typing speed here (milliseconds) } } type();



      type()



      ScrollReveal().reveal('.slide-up-scale', {
        distance: '50px',
        duration: 1000,
        delay:400,
        scale: 1.2,
        reset:true,
        origin: 'bottom'
    });
    
    ScrollReveal().reveal('.bounce-in', {
      duration: 1500,
      delay:400,
      easing: 'cubic-bezier(.25,.46,.45,.94)',
      scale: 0.5,
      reset:true,
      
  });
  
  ScrollReveal().reveal('.ease-in-bezier', {
    duration: 1000,
    delay:400,
    reset:true,
    easing: 'cubic-bezier(0.42, 0, 1, 1)'
});


ScrollReveal().reveal('.elastic-bezier', {
  duration: 2000,
  reset:true,
  easing: 'cubic-bezier(.68,-0.55,.27,1.55)'
});



function checkScroll() {
  const phases = document.querySelectorAll('.phase');
  phases.forEach(phase => {
      const rect = phase.getBoundingClientRect();
      const isVisible = (rect.top <= window.innerHeight * 0.8);
      
      if (isVisible) {
          phase.classList.add('active');
      }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);


const tokenomicsData = [
  { label: 'Liquidity Pool', percentage: 40, color: '#6407ac' },
  { label: 'Community Rewards', percentage: 20, color: '#fed01a' },
  { label: 'Marketing', percentage: 15, color: '#08cebd' },
  { label: 'Development', percentage: 15, color: '#ff6b6b' },
  { label: 'Team', percentage: 10, color: '#4ecdc4' }
];

const ctx = document.getElementById('tokenomicsChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: tokenomicsData.map(item => item.label),
      datasets: [{
          data: tokenomicsData.map(item => item.percentage),
          backgroundColor: tokenomicsData.map(item => item.color),
          borderWidth: 0,
      }]
  },
  options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
          legend: {
              display: false
          }
      },
      animation: {
          animateScale: true,
          animateRotate: true
      }
  }
});

const detailsContainer = document.querySelector('.tokenomics-info');
tokenomicsData.forEach(item => {
  const infoItem = document.createElement('div');
  infoItem.className = 'info-item';
  infoItem.innerHTML = `
      <div class="color-dot" style="background-color: ${item.color}"></div>
      <div>
          <strong>${item.label}:</strong> ${item.percentage}%
      </div>
  `;
  detailsContainer.appendChild(infoItem);
});
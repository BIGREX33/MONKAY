// Roadmap Animation
const roadmapPhases = document.querySelectorAll('.phase');

function checkRoadmapVisibility() {
    roadmapPhases.forEach(phase => {
        const phaseTop = phase.getBoundingClientRect().top;
        const phaseBottom = phase.getBoundingClientRect().bottom;
        
        if (phaseTop < window.innerHeight && phaseBottom > 0) {
            phase.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkRoadmapVisibility);
window.addEventListener('load', checkRoadmapVisibility);

// Enhanced Tokenomics Chart Initialization
const ctx = document.getElementById('tokenomicsChart').getContext('2d');
const tokenomicsChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Liquidity Pool (40%)', 'Marketing (20%)', 'Development (20%)', 'Team (10%)', 'Community Rewards (10%)'],
        datasets: [{
            label: 'Token Distribution',
            data: [40, 20, 20, 10, 10],
            backgroundColor: [
                '#08cebd',
                '#6407ac',
                '#fed01a',
                '#ffffff',
                '#6b11af'
            ],
            borderWidth: 0,
            hoverOffset: 20
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white',
                    font: {
                        size: 14,
                        family: 'Protest Riot'
                    },
                    padding: 20
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fed01a',
                bodyColor: 'white',
                borderColor: '#6407ac',
                borderWidth: 1,
                padding: 15,
                callbacks: {
                    label: function(context) {
                        return ` ${context.label}: ${context.raw}%`;
                    }
                }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeOutQuart'
        },
        cutout: '60%'
    }
});

// Add hover effects to chart segments
ctx.canvas.addEventListener('mousemove', function(event) {
    const points = tokenomicsChart.getElementsAtEventForMode(
        event,
        'nearest',
        { intersect: true },
        true
    );
    
    if (points.length) {
        ctx.canvas.style.cursor = 'pointer';
    } else {
        ctx.canvas.style.cursor = 'default';
    }
});

// Add click effects to chart segments
ctx.canvas.addEventListener('click', function(event) {
    const activePoints = tokenomicsChart.getElementsAtEventForMode(
        event,
        'nearest',
        { intersect: true },
        true
    );
    
    if (activePoints.length) {
        const clickedIndex = activePoints[0].index;
        const label = tokenomicsChart.data.labels[clickedIndex];
        const value = tokenomicsChart.data.datasets[0].data[clickedIndex];
        alert(`${label}: ${value}% of total supply`);
    }
});

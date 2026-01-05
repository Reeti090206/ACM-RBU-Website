// ====================
// EVENTS SECTION - TIMELINE & FILTERS
// ====================

class EventsSection {
  constructor() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.timelineItems = document.querySelectorAll('.timeline-item');
    this.allEvents = Array.from(this.timelineItems);
    
    this.init();
  }
  
  init() {
    // Initialize filter functionality
    this.initFilters();
    
    // Initialize scroll animations
    this.initScrollAnimations();
    
    // Initialize register button interactions
    this.initRegisterButtons();
  }
  
  // Filter Events by Category
  initFilters() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter events
        this.filterEvents(filter);
      });
    });
  }
  
  filterEvents(filter) {
    const emptyState = document.querySelector('.events-empty');
    let visibleCount = 0;
    
    this.timelineItems.forEach(item => {
      const category = item.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        item.classList.remove('hidden');
        // Re-trigger animation
        setTimeout(() => {
          item.classList.add('visible');
        }, 100);
        visibleCount++;
      } else {
        item.classList.add('hidden');
        item.classList.remove('visible');
      }
    });
    
    // Show/hide empty state
    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.style.display = 'block';
      } else {
        emptyState.style.display = 'none';
      }
    }
  }
  
  // Scroll Animations with Intersection Observer
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Staggered animation
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
        }
      });
    }, observerOptions);
    
    this.timelineItems.forEach(item => {
      if (!item.classList.contains('hidden')) {
        observer.observe(item);
      }
    });
  }
  
  // Register Button Interactions
  initRegisterButtons() {
    const registerButtons = document.querySelectorAll('.btn-register');
    
    registerButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const eventTitle = button.closest('.event-card').querySelector('.event-title').textContent;
        this.handleRegistration(eventTitle);
      });
    });
  }
  
  handleRegistration(eventTitle) {
    // Placeholder for registration logic
    alert(`Registration for "${eventTitle}" - This would open a registration form or redirect to registration page.`);
    
    // You can implement actual registration logic here:
    // - Open a modal with registration form
    // - Redirect to external registration page
    // - Make an API call to register the user
  }
  
  // Method to add new event dynamically (for future use)
  addEvent(eventData) {
    const timelineItems = document.querySelector('.timeline-items');
    const newEvent = this.createEventElement(eventData);
    timelineItems.appendChild(newEvent);
    this.timelineItems = document.querySelectorAll('.timeline-item');
    this.initScrollAnimations();
  }
  
  createEventElement(data) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.setAttribute('data-category', data.category);
    
    item.innerHTML = `
      <div class="timeline-node">
        <div class="date-badge">
          <span class="date-day">${data.day}</span>
          <span class="date-month">${data.month}</span>
        </div>
        <div class="node-dot"></div>
      </div>
      
      <div class="event-card glass">
        <div class="event-header">
          <div>
            <div class="event-category">${data.category}</div>
            <h3 class="event-title">${data.title}</h3>
          </div>
          <span class="event-status status-${data.status}">${data.status}</span>
        </div>
        
        <p class="event-description">${data.description}</p>
        
        <div class="event-meta">
          <div class="event-meta-item">
            <i data-lucide="clock"></i>
            <span>${data.time}</span>
          </div>
          <div class="event-meta-item">
            <i data-lucide="map-pin"></i>
            <span>${data.location}</span>
          </div>
          <div class="event-meta-item">
            <i data-lucide="users"></i>
            <span>${data.capacity} seats</span>
          </div>
        </div>
        
        <button class="btn-register">Register Now</button>
      </div>
    `;
    
    return item;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const eventsSection = document.querySelector('.events-section');
  if (eventsSection) {
    new EventsSection();
    
    // Reinitialize Lucide icons for dynamically added content
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
});

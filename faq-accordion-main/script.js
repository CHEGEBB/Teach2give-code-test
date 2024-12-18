document.addEventListener('DOMContentLoaded', () => {
    // Get all FAQ elements
    const faqs = document.querySelectorAll('.faq');
    // Add click event listener to each FAQ
    faqs.forEach(faq => {
        // Get the question part of the FAQ 
        const question = faq.querySelector('.faq-question');

        // Add click handler
        question.addEventListener('click', () => {
            // Check if this FAQ is already active
            const isActive = faq.classList.contains('active');

            // First, close all FAQs
            faqs.forEach(item => {
                item.classList.remove('active');
            });

            // If the clicked FAQ wasn't active, open it
            if (!isActive) {
                faq.classList.add('active');
            }
        });
    });
});
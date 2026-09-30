document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-links");
    const backTop = document.querySelector(".back-top");
    const faqItems = document.querySelectorAll(".faq-item");
    const contactForm = document.querySelector("#contactForm");

    // Mobile navigation
    if (menu && navLinks) {
        menu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const icon = menu.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = menu.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }

    // FAQ accordion
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const icon = item.querySelector(".faq-question i");

        if (!question) return;

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            faqItems.forEach(otherItem => {
                otherItem.classList.remove("active");
                const otherIcon = otherItem.querySelector(".faq-question i");
                if (otherIcon) {
                    otherIcon.classList.remove("fa-minus");
                    otherIcon.classList.add("fa-plus");
                }
            });

            if (!isActive) {
                item.classList.add("active");
                if (icon) {
                    icon.classList.remove("fa-plus");
                    icon.classList.add("fa-minus");
                }
            }
        });
    });

    // Back-to-top visibility
    if (backTop) {
        const toggleBackTop = () => {
            backTop.classList.toggle("show", window.scrollY > 500);
        };

        window.addEventListener("scroll", toggleBackTop);
        toggleBackTop();
    }

    // Contact form opens WhatsApp with the entered message.
    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get("name").trim();
            const email = formData.get("email").trim();
            const subject = formData.get("subject").trim();
            const message = formData.get("message").trim();

            const whatsappMessage =
                `Hello Kame Abudho Ali,%0A%0A` +
                `Name: ${encodeURIComponent(name)}%0A` +
                `Email: ${encodeURIComponent(email)}%0A` +
                `Subject: ${encodeURIComponent(subject)}%0A%0A` +
                `${encodeURIComponent(message)}`;

            window.open(
                `https://wa.me/254717248525?text=${whatsappMessage}`,
                "_blank",
                "noopener,noreferrer"
            );

            contactForm.reset();
        });
    }
});

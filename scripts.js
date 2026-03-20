
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_6kxeti8", "template_0704yru", this)
            .then(() => {
                alert("Message sent!");
                form.reset();
            })
            .catch((error) => {
                console.error(error);
                alert("Failed to send message.");
            });
    });
});
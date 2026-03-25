// ===== MODAL =====
const modal = document.getElementById("modal");
const openBtns = document.querySelectorAll(".main__btn, .info__btn");
const closeBtn = document.getElementById("closeModal");

function openModal() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        openModal();
    });
});

closeBtn.addEventListener("click", () => {
    closeModal();
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
    }
});

const phoneInput = document.getElementById("phoneInput");

phoneInput.addEventListener("input", (e) => {
    let numbers = e.target.value.replace(/\D/g, "");

    if (!numbers.startsWith("998")) {
        numbers = "998" + numbers;
    }

    numbers = numbers.slice(0, 12);

    let formatted = "+998";

    if (numbers.length > 3) {
        formatted += " (" + numbers.slice(3, 5);
    }
    if (numbers.length >= 5) {
        formatted += ") " + numbers.slice(5, 8);
    }
    if (numbers.length >= 8) {
        formatted += "-" + numbers.slice(8, 10);
    }
    if (numbers.length >= 10) {
        formatted += "-" + numbers.slice(10, 12);
    }

    e.target.value = formatted;
});

const modalForm = document.getElementById("modalForm");

modalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const phone = phoneInput.value;
    const numbers = phone.replace(/\D/g, "");
    const nameInput = document.getElementById("nameInput");

    if (nameInput.value.trim().length < 2) {
        alert("Ismingizni to'g'ri kiriting!");
        nameInput.focus();
        return;
    }

    if (numbers.length !== 12 || !numbers.startsWith("998")) {
        alert("To'g'ri telefon kiriting!\nMasalan: +998 (90) 123-45-67");
        phoneInput.focus();
        return;
    }

    alert("Ma'lumot qabul qilindi!");
    modalForm.reset();
    closeModal();
    phoneInput.value = "+998";
});

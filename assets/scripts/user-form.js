document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = ["name", "email", "phone"];
    let hasError = false;

    fields.forEach(id => {
        const input = document.getElementById(id);
        if (input.value.trim() === "") {
            input.classList.add("error");
            hasError = true;
        } else {
            input.classList.remove("error");
        }
    });

    if (!hasError) {
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("successMessage").style.display = "block";
    }
});
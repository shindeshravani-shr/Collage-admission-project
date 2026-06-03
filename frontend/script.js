document.getElementById("admissionForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        course: document.getElementById("course").value
    };

    const res = await fetch("http://EC2-IP:5000/admission", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const msg = await res.text();

    alert(msg);   // backend response दाखवेल

    document.getElementById("admissionForm").reset();
});

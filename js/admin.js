auth.onAuthStateChanged(user => {
  if (!user || user.email !== "admin@gmail.com") {
    alert("เข้าถึงเฉพาะผู้ดูแลระบบ");
    location.href = "index.html";
  }
});

function addCode() {
  const code = document.getElementById("code").value;
  const price = parseInt(document.getElementById("price").value);

  db.collection("codes").add({
    code,
    price,
    status: "available",
    buyerEmail: ""
  }).then(() => {
    alert("เพิ่มรหัสแล้ว");
    location.reload();
  });
}
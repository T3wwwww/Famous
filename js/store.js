auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("auth-links").innerHTML = `
      <p>สวัสดี ${user.email}</p>
      <a href="dashboard.html">ดูรหัสของฉัน</a> |
      <a href="#" onclick="logout()">ออกจากระบบ</a>
    `;
  }
});

db.collection("codes").where("status", "==", "available").get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      const data = doc.data();
      document.getElementById("code-list").innerHTML += `
        <div>
          <p>ราคา: ${data.price} บาท</p>
          <button onclick="buyCode('${doc.id}')">ซื้อเลย</button>
        </div>
      `;
    });
  });

function buyCode(codeId) {
  const user = auth.currentUser;
  if (!user) return alert("กรุณาเข้าสู่ระบบก่อน");

  db.collection("codes").doc(codeId).update({
    status: "sold",
    buyerEmail: user.email
  }).then(() => alert("ซื้อสำเร็จ!"));
}
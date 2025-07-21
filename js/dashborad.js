auth.onAuthStateChanged(user => {
  if (!user) location.href = "login.html";

  db.collection("codes").where("buyerEmail", "==", user.email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        document.getElementById("my-codes").innerHTML += `
          <p>${data.code} - ${data.price} บาท</p>
        `;
      });
    });
});
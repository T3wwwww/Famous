/* สไตล์พื้นฐานสำหรับทุกหน้า */
body {
  font-family: "Prompt", sans-serif;
  background-color: #111;
  color: #fff;
  margin: 0;
  padding: 20px;
  line-height: 1.6;
}

h1, h2 {
  color: #00ffcc;
  margin-bottom: 20px;
}

input, button {
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

input {
  width: 100%;
  max-width: 300px;
}

button {
  background-color: #00cc99;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #00aa88;
}

a {
  color: #00ffcc;
  text-decoration: none;
  margin-right: 10px;
}

a:hover {
  text-decoration: underline;
}

#code-list div, #my-codes div, #all-codes div {
  background: #222;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #333;
}

#auth-links {
  margin-bottom: 20px;
}

@media screen and (max-width: 600px) {
  input, button {
    width: 100%;
  }
}
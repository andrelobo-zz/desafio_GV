import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { db } from "./firebase_config";
import firebase from "firebase";
import MessageListItem from "./Message";


function App() {
  const [messages, setTodos] = useState([]);
  const [todoInput, setMessageInput] = useState("");

  useEffect(() => {
    getMessages();
  }, []); // blank to run only on first launch

  function getMessages() {
    db.collection("messages").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          message: doc.data().message,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function AddMessage(e) {
    e.preventDefault();

    db.collection("messages").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: todoInput,
    });

    setMessageInput("");
  }

  return (
    <div className="App">
      <div
        style={{
          
          color: "#2b385b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
         <img alt="logo" src="./logogd.png"/> 
        <h1>Quadro de Mensagens GrowDev</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Escreva uma mensagem aqui"
            value={todoInput}
            style={{ width: "90vw", maxWidth: "500px" }}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={AddMessage}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>

        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {messages.map((message) => (
            <MessageListItem
              message={message.message}
              inprogress={message.inprogress}
              id={message.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

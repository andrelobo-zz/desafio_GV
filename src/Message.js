import React from "react";
import { ListItem, ListItemText, Button } from "@material-ui/core";
import { db } from "./firebase_config";


export default function MessageListItem({ message, inprogress, id }) {
  function toggleInProgress() {
    db.collection("messages").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteMessage() {
    db.collection("messages").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={message}
          secondary={inprogress ? "Para ler" : "Já lida"}
        />
      </ListItem>

      <Button onClick={toggleInProgress}>
        {inprogress ? "Não Lida" : "Lida"}
      </Button>
      <Button onClick={deleteMessage}>Deletar mensagem</Button>
    </div>
  );
}

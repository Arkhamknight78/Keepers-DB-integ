import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import db from "./firebase";
import { collection, doc, getDocs , query, where, deleteDoc } from "firebase/firestore";





function App() {


  const [NotesList, SetNotesList] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "KeepersData"));
  //       const data = querySnapshot.docs.map((doc) => {doc.data()});
  //       const dataid = querySnapshot.docs.map((doc) => {doc.id});
  //       console.log("data");
  //       console.log(data);
  //       console.log("dataid");
  //       console.log(dataid);
  //       // SetNotesList(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    db.collection("KeepersData").onSnapshot((snapshot) => {
        const data=snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }));
            // console.log({data});
            SetNotesList(data);
    });
   
}, []);


  console.log("NotesList")
  console.log(NotesList)

  function addItem(items) {
    SetNotesList((prevValues) => {
      return [...prevValues, items];
    });
  }

 function deleteItem(id) {
  db.collection("KeepersData").doc(id).delete();
 };
 

  return (
    <div>
      <Header />

      <CreateArea onAdd={addItem} />

      {NotesList.map((Notes, index) => {
        console.log(Notes);
        if (Notes.data && Notes.data.Title && Notes.data.Content) {
        return (<Note
          key={index}
          id={Notes.id}
          Title={Notes.data.Title}
          Content={Notes.data.Content}
          onDel={deleteItem}
        />
      );
      }
      else{
        return null;
      }
      }
      )}
      <Footer />
    </div>
  );
}

export default App;

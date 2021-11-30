import db, { auth, provider, storage } from "../firebase";
import { ADD_USER, GET_ARTICLES } from "../actions/Actiontype";

const setuser = (payload) => {
  return {
    type: ADD_USER,
    user: payload,
  };
};
export function SigninApi() {
  const temp = auth
    .signInWithPopup(provider)
    .then((payload) => {
      console.log(payload);
      setuser(payload);
    })
    .catch((err) => {
      console.log(err.message);
    });
  return temp;
  //   return dispatch => {
  //     auth.signInWithPopup(provider)
  //         .then(payload => dispatch(setuser(payload.user)))
  //         .catch(error => alert(error.message));
  // }
}
export function getuserauth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) await dispatch(setuser(user));
    });
  };
}
export function getarticles(payload) {
  return {
    type: GET_ARTICLES,
    payload: payload,
  };
}
export function signoutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setuser(null));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// export function PostArticleAPI(payload) {
//   return (dispatch) => {
//     if (payload.image !== "") {
//       const upload = storage
//         .ref(`images/${payload.image.name}`)
//         .put(payload.image);
//       upload.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log(`progress:${progress}%`);
//         },
//         (err) => {
//           console.log(err.code);
//         },
//         async ()=>{
//           const downloadURL = await upload.snapshot.ref.getDownloadURL();
//           db.collection("articles").add(
//             {
//               actor:{
//                 description:payload.user.email,
//                 title:payload.user.displayname,
//                 date:payload.user.timestamp,
//                 image:payload.user.photourl
//               },
//               video:payload.video,
//               sharedImg:downloadURL,
//               Comments:0,
//               description:payload.description
//             }
//           )
//         }
//       );
//     }
//   };
// }
export function PostArticleAPI(payload) {
  return (dispatch) => {
    if (payload.image !== "") {
      const upload = storage
        .ref()
        .child(`images/${payload.image.name}`)
        .put(payload.image);

      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log(`progress ${progress}%`);

          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();

          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: "",
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
    }
  };
}
export function getArticlesAPI() {
  return (dispatch) => {
    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        const payload = snapshot.docs.map((doc) => doc.data());
        console.log(payload);
        dispatch(getarticles(payload));
      });
  };
}

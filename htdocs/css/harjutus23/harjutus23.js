import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {getFirestore, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, updateDoc} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFpmsCo2mn9A5IIJ-DnG8M8-KGG7jYYWE",
    authDomain: "opime-javascripti-75ff8.firebaseapp.com",
    projectId: "opime-javascripti-75ff8",
    storageBucket: "opime-javascripti-75ff8.firebasestorage.app",
    messagingSenderId: "495493765632",
    appId: "1:495493765632:web:8b7f7944e308b8150e56e5",
    measurementId: "G-GRLCJQ8P1S"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const feedbackCollection = collection(db, "feedback");

const feedbackList = document.getElementById("feedbackList");
const totalReviewsElement = document.getElementById("totalReviews");
const averageRatingElement = document.getElementById("averageRating");

const q = query(feedbackCollection, orderBy("timestamp", "desc"));

onSnapshot(q, (snapshot) => {
    feedbackList.innerHTML = "";
    let totalRating = 0;
    let totalReviews = snapshot.size;

    snapshot.docs.forEach((docSnapshot) => {
        const data = docSnapshot.data();
        totalRating += data.rating;

        const card = document.createElement("div");
        card.className = "card mb-3";
        card.innerHTML = `
            <div class="card-header">Hinnang: ${data.rating} / 5</div>
            <div class="card-body">
                <p class="card-text">${data.comment}</p>
                <button class="btn btn-danger delete-feedback" data-id="${docSnapshot.id}">Kustuta</button>
            </div>
        `;
        feedbackList.appendChild(card);

        card.querySelector(".delete-feedback").addEventListener("click", async () => {
            if (confirm("Kas olete kindel, et soovite selle tagasiside kustutada?")) {
                try {
                    await deleteDoc(doc(db, "feedback", docSnapshot.id));
                    alert("Tagasiside kustutatud!");
                } catch (error) {
                    console.error("Kustutamise viga:", error);
                }
            }
        });
    });

    totalReviewsElement.textContent = totalReviews;
    averageRatingElement.textContent = (totalRating / totalReviews || 0).toFixed(1);
});

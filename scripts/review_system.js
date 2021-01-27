function escreverReview(){
    let userReviewArea = document.getElementById("users_review");
    let userName = document.getElementById("user_name_review");
    let userReviewText = document.getElementById("user_textarea_review");
    let dayOfReview = new Date().getDate();
    let monthOfReview = new Date().getMonth();
    let yearOfReview = new Date().getFullYear();

    userReviewArea.innerHTML += `
        <p><strong>Nome:&nbsp;</strong>${userName.value}</p>
        <p><strong>Comentário:</strong></p>
        <p>
            ${userReviewText.value}
        </p>
        <p>Submetido a ${dayOfReview}/${monthOfReview+1}/${yearOfReview}</p>
        <hr>
    `;
    userName.value = "";
    userReviewText.value = "";
}
const cardList = document.querySelector('.cards');


export const setupCards = (data) =>{
    if(data.length){
        let html = "";
        data.forEach(doc => {
            const card = doc.data();
            console.log(card);
            const htmlCard = `
            <div class="card">
                <div class="card-body">
                    <div class="card-title"> <h4> ${card.title} </h4> 
                    </div> <div class="card-text"> <p> ${card.content} </p> </div>
                </div>
            </div>
             `;

            html+=htmlCard;
            console.log(html);
        });

        cardList.innerHTML = html;
    }
    else{
        cardList.innerHTML = '<h1>Login to see cards</h1>';
    }
}